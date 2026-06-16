import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Match } from "@/types";
import type { StandingEntry } from "@/data/standings";

interface LiveSummary {
  totalMatches: number;
  totalGoals: number;
  groupsActive: number;
}

interface LiveDataPayload {
  generated: string;
  day: number;
  matchesCompleted: Match[];
  matchesToday: Match[];
  standings: Record<string, StandingEntry[]>;
  summary: LiveSummary;
}

interface LiveDataContextType {
  liveData: LiveDataPayload | null;
  lastUpdated: Date | null;
  isPolling: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

const LiveDataContext = createContext<LiveDataContextType | null>(null);

const POLL_INTERVAL = 30 * 60 * 1000; // 30 minutes

export function LiveDataProvider({ children }: { children: ReactNode }) {
  const [liveData, setLiveData] = useState<LiveDataPayload | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isPolling, setIsPolling] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsPolling(true);
      setError(null);
      const resp = await fetch("/api/scores.json", {
        cache: "no-cache",
        headers: { "Cache-Control": "no-cache" },
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data: LiveDataPayload = await resp.json();
      setLiveData(data);
      setLastUpdated(new Date(data.generated));
    } catch (err: any) {
      setError(err.message || "Failed to fetch");
      // Keep previous data on error
    } finally {
      setIsPolling(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Poll every 30 minutes
  useEffect(() => {
    const timer = setInterval(fetchData, POLL_INTERVAL);
    return () => clearInterval(timer);
  }, [fetchData]);

  return (
    <LiveDataContext.Provider value={{ liveData, lastUpdated, isPolling, error, refresh: fetchData }}>
      {children}
    </LiveDataContext.Provider>
  );
}

export function useLiveData(): LiveDataContextType {
  const ctx = useContext(LiveDataContext);
  if (!ctx) throw new Error("useLiveData must be used within LiveDataProvider");
  return ctx;
}
