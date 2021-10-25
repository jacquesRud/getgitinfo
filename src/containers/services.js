import { useQuery } from "react-query";

export function useReactQuery({ criteria, url, enabled }) {
  const { isLoading, error, data } = useQuery(
    criteria,
    () => fetch(url).then((res) => res.json()),
    { enabled }
  );

  return { data, isLoading, error };
}
