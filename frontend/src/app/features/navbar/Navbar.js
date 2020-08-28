import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdNotifications } from "react-icons/md";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import { Nav, Search, Input, LinkGroup } from "./styles";
import { selectUserStatus, selectToken, logoutUser } from "../user/userReducer";

const Navbar = () => {
  const isUserAuthenticated = useSelector(selectUserStatus);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const logout = async () => {
    if (addRequestStatus === "idle") {
      setAddRequestStatus("pending");
      let resultAction;
      try {
        resultAction = await dispatch(logoutUser(token));
        unwrapResult(resultAction);
      } catch (error) {
        console.log("logout -> error", error);
        switch (resultAction.payload.code) {
          case 500:
            NotificationManager.error(
              resultAction.payload.message,
              "Server Error",
              4000
            );
            break;

          case 503:
            NotificationManager.error(
              resultAction.payload.message,
              "Network Error",
              4000
            );
            break;

          default:
            break;
        }
        setAddRequestStatus("idle");
      }
    }
  };

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
        {isUserAuthenticated || (
          <Link to="/register" className="auth link">
            Register
          </Link>
        )}
        {isUserAuthenticated || (
          <Link to="/signin" className="auth link">
            Sign in
          </Link>
        )}
        {isUserAuthenticated || (
          <Link to="/signin" className="link profile">
            <IconContext.Provider value={{ className: "icon" }}>
              <FiUser />
            </IconContext.Provider>
          </Link>
        )}
        <Link to="/cart" className="link">
          <IconContext.Provider value={{ className: "icon" }}>
            <FiShoppingCart />
          </IconContext.Provider>
        </Link>
        {isUserAuthenticated && (
          <Link to="/" className="link">
            <IconContext.Provider value={{ className: "icon" }}>
              <MdNotifications />
            </IconContext.Provider>
          </Link>
        )}
        {isUserAuthenticated && (
          <a onClick={logout} className="link">
            <IconContext.Provider value={{ className: "icon" }}>
              <FiLogOut />
            </IconContext.Provider>
          </a>
        )}
        {/* <Link to="/" className="link">
          <IconContext.Provider value={{ className: "icon" }}>
            <MdSettings />
          </IconContext.Provider>
        </Link> */}
      </LinkGroup>
    </Nav>
  );
};

export default Navbar;
