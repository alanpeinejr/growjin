import type { RouteObject } from "react-router";
import Home from "./components/Home";

const routes: RouteObject[] = [
  {
    index: true,
    path: "growjin",
    Component: Home,
  },
];

export default routes;
