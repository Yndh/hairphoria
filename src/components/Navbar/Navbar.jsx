import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="logo">Hairphoria</p>
      <ul>
        <li>
          <a href="#about">O Nas</a>
        </li>
        <li>
          <a href="#galery">Galeria</a>
        </li>
        <li>
          <a href="#local">Lokalizacja</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
