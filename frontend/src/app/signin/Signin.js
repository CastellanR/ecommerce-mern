import React, { useState, useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import {
  Wrapper,
  Form,
  Button,
  FormInput,
  MediaButtonGroup,
  MediaButton,
} from "./style";

import { loginUser, selectUser } from "../user/userReducer";

const Signin = () => {
  const { register, handleSubmit, errors } = useForm();

  const [inputs, setInputs] = useState({
    email: "pabloperez@gmail.com",
    password: "Contrasena",
    keepSessionActive: false,
  });

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  let { email, password, keepSessionActive } = inputs;

  let user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.name === "keepSessionActive" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onSubmit = async () => {
    if (addRequestStatus === "idle") {
      setAddRequestStatus("pending");
      let resultAction;
      try {
        resultAction = await dispatch(
          loginUser({ email, password, keepSessionActive })
        );
        unwrapResult(resultAction);
        history.push("/");
      } catch (error) {
        if (resultAction.payload.code === 500)
          NotificationManager.error(
            "Auth microservice down",
            "Network Error",
            4000
          );
        else {
          NotificationManager.error(
            resultAction.payload.message,
            "Wrong credentials",
            4000
          );
        }
        setAddRequestStatus("idle");
      }
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
          defaultValue={email}
          placeholder="Enter your email"
          ref={register({
            required: true,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g,
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
          defaultValue={password}
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
      <p className="separator">
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
          defaultChecked={keepSessionActive}
        />
      </label>
      <div>{(user && user.email) || "Usuario actual"}</div>
      <NotificationContainer />
    </Wrapper>
  );
};

export default Signin;
