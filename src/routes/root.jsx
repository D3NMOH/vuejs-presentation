import { NavLink, Outlet } from "react-router-dom";
import vue from "../assets/vue.svg";

export default function Root() {
  return (
    <div className="page">
      <div className="sidebar" id="sidebar">
        <div className="imgContainer">
          <img src={vue} alt="vue" className="logo" />
          <img src={vue} alt="vue" className="logoBlur" />
        </div>
        <h1 className="title">Vue.js</h1>
        <div></div>
        <nav>
          <ul className="navList">
            <li className="navItem">
              <NavLink
                to={"/slides/1"}
                className={({ isActive, isPending }) =>
                  isPending ? "navInactive" : isActive ? "navActive" : ""
                }
                unstable_viewTransition
              >
                Was ist Vue.js?
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to={"/slides/2"}
                className={({ isActive, isPending }) =>
                  isPending ? "navInactive" : isActive ? "navActive" : ""
                }
                unstable_viewTransition
              >
                Hauptmerkmale von Vue.js
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to={"/slides/3"}
                className={({ isActive, isPending }) =>
                  isPending ? "navInactive" : isActive ? "navActive" : ""
                }
                unstable_viewTransition
              >
                Anwendungen von Vue.js
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to={"/slides/4"}
                className={({ isActive, isPending }) =>
                  isPending ? "navInactive" : isActive ? "navActive" : ""
                }
                unstable_viewTransition
              >
                Beispiele für Vue.js-Anwendungen
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to={"/slides/5"}
                className={({ isActive, isPending }) =>
                  isPending ? "navInactive" : isActive ? "navActive" : ""
                }
                unstable_viewTransition
              >
                Vergleichen mit React JS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
      <Outlet />
    </div>
  );
}
