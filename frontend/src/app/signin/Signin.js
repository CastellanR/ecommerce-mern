import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import "./Signin.scss";
class Signin extends Component {
  render() {
    return (
      <div class="wrapper">
        <div className="home">
          <a href="/">Home</a>
        </div>
        <p>
          Sign in or <a href="#">Create your account</a>
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="formInput"
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              className="formInput"
            />
          </label>
          <label>
            Keep session active:
            <input
              type="checkbox"
              name="keepSessionActive"
              className="formInput"
            />
          </label>
          <div className="submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <p class="separator">
          <span>Or</span>
        </p>
        <div className="mediaButtons">
          <div class="google">
            <IconContext.Provider value={{ className: "googleIcon" }}>
              <FcGoogle />
            </IconContext.Provider>
            <a href="#" class="link">
              Continue with Google
            </a>
          </div>
          <div class="facebook">
            <IconContext.Provider value={{ className: "faceIcon" }}>
              <FaFacebook />
            </IconContext.Provider>
            <a href="#" class="link">
              Continue with Facebook
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
