import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const routes = [
    {
      pageName: "Home",
      path: "/",
    },
    {
      pageName: "About Us",
      path: "/AboutUs",
    },
    {
      pageName: "Completed Tasks",
      path: "/CompletedTask",
    },
  ];

  return (
    <header>
      <div>Todo Application</div>
      <nav>
        <ul>
          {routes.map(({ pageName, path }, index) => (
            <li key={index}>
              <Link to={path}>{pageName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
