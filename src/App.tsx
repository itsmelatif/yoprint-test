
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./i18n";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
