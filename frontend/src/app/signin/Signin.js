import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button, FormInput } from "./style";

const Signin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  
  return (
    <div class="wrapper">
      <div className="home">
        <a href="/">Home</a>
      </div>
      <h2>
        Sign in or <a href="#">Create your account</a>
      </h2>
      <form /*onSubmit={this.handleSubmit}*/>
        <label>
          Email:
          <FormInput type="text" name="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <FormInput
            type="text"
            name="password"
            placeholder="Enter your password"
          />
        </label>
        <label>
          Keep session active:
          <FormInput type="checkbox" name="keepSessionActive" />
        </label>
        <div className="submit">
          <Button type="submit" value="Submit" />
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
        <Button>Probando la mecha</Button>
      </div>
    </div>
  );
};

export default Signin;
