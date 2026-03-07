import { useQuery } from "@tanstack/react-query";
import { getTelemetry } from "../services/assets";

export function useTelemetry(assetId) {
  return useQuery({
    queryKey: ["telemetry", assetId],
    queryFn: () => getTelemetry(assetId),
    enabled: !!assetId,
    refetchInterval: 5000 * 60, // 5m
  });
}
