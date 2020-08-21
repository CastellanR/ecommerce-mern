import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import {
  Wrapper,
  Form,
  Button,
  FormInput,
  MediaButtonGroup,
  MediaButton,
} from "./style";

const Signin = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <Wrapper>
      <div className="home">
        <a href="/">Home</a>
      </div>
      <h2>
        Sign in or <a href="#">Create your account</a>
      </h2>
      <Form /*onSubmit={this.handleSubmit}*/>
        <FormInput type="text" name="email" placeholder="Enter your email" />
        <FormInput
          type="text"
          name="password"
          placeholder="Enter your password"
        />
        <div className="submit">
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </div>
      </Form>
      <p class="separator">
        <span>Or</span>
      </p>
      <MediaButtonGroup>
        <MediaButton>
          <IconContext.Provider value={{ className: "icon" }}>
            <FcGoogle />
          </IconContext.Provider>
          <a href="http://www.stackoverflow.com/">Continue with Google</a>
        </MediaButton>
        <MediaButton facebook>
          <IconContext.Provider value={{ className: "icon" }}>
            <FaFacebook />
          </IconContext.Provider>
          <a href="http://www.stackoverflow.com/">Continue with Facebook</a>
        </MediaButton>
      </MediaButtonGroup>

      <label>
        Keep session active:
        <input type="checkbox" name="keepSessionActive" />
      </label>
    </Wrapper>
  );
};

export default Signin;
