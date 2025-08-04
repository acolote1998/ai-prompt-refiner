import { useQuery } from "@tanstack/react-query";
import { getApiKeyByUserId } from "../supabaseCalls/useSupabase";

const useGetKey = (userId?: string) => {
  const { isPending, error, data } = useQuery<{ key: string } | null>({
    queryKey: ["key", userId],
    queryFn: () => getApiKeyByUserId(userId!),
    enabled: !!userId,
  });

  return { isPending, error, data };
};
export default useGetKey;
