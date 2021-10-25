import GitSearchContainer from "./GitSearchContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GitSearchContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
