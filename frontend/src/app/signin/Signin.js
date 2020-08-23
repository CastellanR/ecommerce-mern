import React, { useState, useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Wrapper,
  Form,
  Button,
  FormInput,
  MediaButtonGroup,
  MediaButton,
} from "./style";

import { loginUser, logout, selectUser } from "../user/userReducer";

const Signin = () => {
  const { register, handleSubmit, errors } = useForm();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    keepSessionActive: false,
  });

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  let { email, password, keepSessionActive } = inputs;

  let user = useSelector(selectUser);
  console.log("Signin -> user", user);
  const dispatch = useDispatch();
  const history = useHistory();

  // reset login status
  /*useEffect(() => {
    dispatch(logout(user));
  }, []);*/

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.name === "keepSessionActive" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const onSubmit = async () => {
    setAddRequestStatus("pending");
    try {
      const resultAction = await dispatch(
        loginUser(email, password, keepSessionActive)
      );
      unwrapResult(resultAction);
      history.push("/");
    } catch (error) {
      console.error("Failed to save the post: ", error);
    } finally {
      setAddRequestStatus("idle");
    }
  };

  return (
    <Wrapper onChange={handleChange}>
      <div className="home">
        <a href="/">Home</a>
      </div>
      <h2>
        Sign in or <a href="#">Create your account</a>
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          name="email"
          value={email}
          placeholder="Enter your email"
          ref={register({
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span className="error">Wrong email format</span>
        )}
        <FormInput
          type="text"
          name="password"
          value={password}
          placeholder="Enter your password"
          ref={register({ required: true, minLength: 8 })}
        />
        {errors.password && errors.password.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span className="error">Minimum 8 characters length</span>
        )}

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
        <input
          type="checkbox"
          name="keepSessionActive"
          checked={keepSessionActive}
        />
      </label>
      <div>{(user && user.email) || "Usuario actual"}</div>
    </Wrapper>
  );
};

export default Signin;
