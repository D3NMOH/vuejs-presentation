import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import "./index.css";
import Slide1 from "./routes/slides/1";
import Slide2 from "./routes/slides/2";
import Slide3 from "./routes/slides/3";
import Slide4 from "./routes/slides/4";
import Slide5 from "./routes/slides/5";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "slides/1", element: <Slide1 /> },
      { path: "slides/2", element: <Slide2 /> },
      { path: "slides/3", element: <Slide3 /> },
      { path: "slides/4", element: <Slide4 /> },
      { path: "slides/5", element: <Slide5 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
