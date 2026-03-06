import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../services/assets";

export function useAssets() {
  return useQuery({
    queryKey: ["assets"],
    queryFn: getAssets,
    staleTime: 1000 * 60 * 15, // 15 mins
  });
}
