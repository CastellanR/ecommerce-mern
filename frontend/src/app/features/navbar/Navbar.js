import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
// import { MdNotifications, MdSettings } from "react-icons/md";

import { Nav, Search, Input, LinkGroup } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/" className="link home">
        <IconContext.Provider value={{ className: "icon" }}>
          <GoHome />
        </IconContext.Provider>
      </Link>
      <Search>
        <Input></Input>
        <Link to="/" className="link">
          <IconContext.Provider value={{ className: "icon" }}>
            <FaSearch />
          </IconContext.Provider>
        </Link>
      </Search>
      <LinkGroup>
        <Link to="/register" className="auth link">
          Register
        </Link>
        <Link to="/signin" className="auth link">
          Sign in
        </Link>
        <Link to="/signin" className="link authMobile">
          <IconContext.Provider value={{ className: "icon" }}>
            <FiUser />
          </IconContext.Provider>
        </Link>
        <Link to="/cart" className="link">
          <IconContext.Provider value={{ className: "icon" }}>
            <FiShoppingCart />
          </IconContext.Provider>
        </Link>
        {/* <Link to="/" className="link">
        <IconContext.Provider value={{ className: "icon" }}>
        <MdNotifications />
        </IconContext.Provider>
        </Link>
        <Link to="/" className="link">
        <IconContext.Provider value={{ className: "icon" }}>
        <MdSettings />
        </IconContext.Provider>
      </Link> */}
      </LinkGroup>
    </Nav>
  );
};

export default Navbar;
