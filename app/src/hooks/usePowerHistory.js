import { useQuery } from "@tanstack/react-query";
import { getPowerHistory } from "../services/assets";

export function usePowerHistory(assetId) {
  return useQuery({
    queryKey: ["powerHistory", assetId],
    queryFn: () => getPowerHistory(assetId),
    enabled: !!assetId,
    staleTime: 5 * 60 * 1000, // 5 mins
  });
}
