import GlobalStyle from "./shared/GlobalStyle";
import Layout from "./shared/Layout";
import Router from "./shared/Router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </>
  );
};

export default App;
