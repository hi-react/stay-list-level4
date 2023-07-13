import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./shared/GlobalStyle";
import Layout from "./shared/Layout";
import Router from "./shared/Router";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </Layout>
    </>
  );
};

export default App;
