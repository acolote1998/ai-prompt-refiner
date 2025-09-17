// Deprecated: replaced by direct localStorage access
const useGetKey = () => {
  const key = localStorage.getItem("gemini_api_key");
  return { isPending: false, error: null, data: key ? { key } : null };
};
export default useGetKey;
