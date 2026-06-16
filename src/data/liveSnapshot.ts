import { completedMatches, todayMatches } from "@/data/matches";
import { standings } from "@/data/standings";

const liveData = {
  generated: new Date().toISOString(),
  day: 6,
  matchesCompleted: completedMatches,
  matchesToday: todayMatches,
  standings,
  summary: {
    totalMatches: 16,
    totalGoals: 40,
    groupsActive: 8,
    groupsCompleted: 0,
  },
};

export default liveData;
