import { useQuery } from "@tanstack/react-query";
import { getApiKeyByUserId } from "../supabaseCalls/useSupabase";

const useGetKey = (userId: string) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["key"],
    queryFn: () => getApiKeyByUserId(userId),
  });
  return { isPending, error, data };
};
export default useGetKey;
