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
} from "./styles";

import { registerUser } from "../user/userReducer";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();

  const [inputs, setInputs] = useState({
    email: "pabloperez@gmail.com",
    password: "Contrasena",
    firstName: "",
    lastName: "",
  });

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  let { email, password, firstName, lastName } = inputs;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onSubmit = async () => {
    if (addRequestStatus === "idle") {
      setAddRequestStatus("pending");
      let resultAction;
      try {
        resultAction = await dispatch(
          registerUser({ email, password, firstName, lastName })
        );
        unwrapResult(resultAction);
        history.push("/");
      } catch (error) {
        console.log("onSubmit -> resultAction.payload", resultAction.payload)
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
            NotificationManager.error(
              resultAction.payload.message,
              "Email existent",
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
        <a href="/">Back to Home</a>
      </div>
      <h2>
        Create your account or <a href="/signin">Sign in</a>
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          name="firstName"
          defaultValue={firstName}
          placeholder="Enter your first name"
          ref={register({ required: true, minLength: 2 })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {errors.firstName && errors.firstName.type === "minLength" && (
          <span className="error">Minimum 2 characters length</span>
        )}
        <FormInput
          type="text"
          name="lastName"
          defaultValue={lastName}
          placeholder="Enter your last name"
          ref={register({ required: true, minLength: 2 })}
        />
        {errors.lastName && errors.lastName.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {errors.lastName && errors.lastName.type === "minLength" && (
          <span className="error">Minimum 2 characters length</span>
        )}
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
          type="password"
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
          <a href="http://www.stackoverflow.com/">Register with Google</a>
        </MediaButton>
        <MediaButton facebook>
          <IconContext.Provider value={{ className: "icon" }}>
            <FaFacebook />
          </IconContext.Provider>
          <a href="http://www.stackoverflow.com/">Register with Facebook</a>
        </MediaButton>
      </MediaButtonGroup>
      <NotificationContainer />
    </Wrapper>
  );
};

export default Register;
