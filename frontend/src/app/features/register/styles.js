import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  label {
    margin: 1em 0em;
  }

  .error {
    color: #bf1650;
  }

  .error::before {
    display: inline;
    content: "⚠ ";
  }

  .home {
    margin: 0.2rem 0rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background: #f15944;
  color: white;
  margin: 2em 0em 0.5em 0em;
  width: 30%;
  padding: 0.5em;
  font-size: 0.8em;
  border: 2px solid #f15944;
  border-radius: 0.25em;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 50%;
    font-size: 1em;
  }
  @media (max-width: 1024px) {
  }
`;

export const FormInput = styled.input`
  background-color: white;
  margin: 1em 0em;
  padding: 1em;
  border-width: 0em 0em 0.1em 0em;
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  width: 75%;
  align-self: center;

  &:focus {
    outline: none !important;
  }
`;

export const MediaButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MediaButton = styled.button`
  display: flex;
  flex-direction: row;
  align-self: center;
  background-color: ${(props) => (props.facebook ? "#0B6087" : "white")};
  border: 0.05em solid;
  padding: 0.5em;
  margin-top: 1em;
  border-color: ${(props) =>
    props.facebook ? "rgba(7, 67, 156,0.5)" : "rgba(0, 0, 0,0.5)"};
  width: 60%;
  cursor: pointer;
  font-weight: bolder;
  font-size: 0.8em;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 1em;
  }
  @media (max-width: 1024px) {
  }

  .icon {
    color: ${(props) => (props.facebook ? "white" : "")};
    font-size: 1.3em;
    margin: 0em 0.5em 0 0.5em;
    align-self: center;
  }
  a {
    text-decoration: none !important;
    color: ${(props) => (props.facebook ? "white" : "black")};
    align-self: center;
  }

  &:hover {
    background-color: ${(props) =>
      props.facebook ? "white" : "rgba(229, 236, 240, 0.986)"};
    a {
      text-decoration: none !important;
      color: ${(props) => (props.facebook ? "#0B6087" : "black")};
    }
    .icon {
      color: ${(props) => (props.facebook ? "#0B6087" : "")};
    }
  }
`;
