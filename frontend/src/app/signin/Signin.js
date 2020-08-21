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
  const { register, handleSubmit, errors } = useForm();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    keepSessionActive: false,
  });

  let { email, password, keepSessionActive } = inputs;

  const handleChange = (e) => {
    const target = e.target;
    const value = target.name === 'keepSessionActive' ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const onSubmit = (e) => {
    console.log(inputs);
  };

  return (
    <Wrapper onChange={handleChange}>
      <div className="home">
        <a href="/">Home</a>
      </div>
      <h2>
        Sign in or <a href="#">Create your account</a>
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)} >
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
    </Wrapper>
  );
};

export default Signin;
