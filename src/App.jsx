import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <div className="App">
      Hello World
      <div>{useRoutes(routes)}</div>
    </div>
  );
}

export default App;
