import { useRoutes } from "react-router-dom";
import routes from "./router";
import Header from "./components/header";
import Footer from "./components/footer";
import { useScrollTop } from "./hooks/useScrollTop";

function App() {
  useScrollTop();
  return (
    <div className="App">
      <Header />
      <div>{useRoutes(routes)}</div>
      <Footer />
    </div>
  );
}

export default App;
