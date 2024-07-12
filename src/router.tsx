import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import WebGl from "./webgl";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/web-gl",
    element: <WebGl />,
  },
]);

export default router;
