import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];
export default routes;
