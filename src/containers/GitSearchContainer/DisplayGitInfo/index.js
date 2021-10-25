import { useMemo } from "react";

export default function DisplayGitInfo({ data }) {
  const display = useMemo(() => {
    return !data.total_count
      ? "No User Found"
      : data.items.map(({ login }) => <div>{login}</div>);
  }, [data]);
  return display;
}
