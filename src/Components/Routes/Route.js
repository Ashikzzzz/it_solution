import { createBrowserRouter } from "react-router-dom";
import Screen from "../../Layout/Screen";
import Home from "../Home/Home";
import HomeMain from "../HomeMain/HomeMain";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen></Screen>,
    children: [
      {
        path: "/",
        element: <HomeMain></HomeMain>,
      },
    ],
  },
]);
