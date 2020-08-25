import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

export const Button = styled.button`
  background: #F15944;
  color: white;
  font-size: 1em;
  margin: 1em;
  width: 6em;
  padding: 0.5em;
  border: 2px solid #F15944;
  border-radius: 0.25em;
  cursor: pointer;
`;

export const FormInput = styled.input`
  background-color: white;
  margin: 1em 0em;
  padding: 1em;
  border-width: 0em 0em 0.1em 0em;
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  width: 20em;
  align-self: center;

  &:focus {
    outline: none !important;
  }
`;

export const MediaButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MediaButton = styled.button`
  display: flex;
  flex-direction: row;
  align-self: center;
  background-color: ${(props) => (props.facebook ? "#0B6087" : "white")};
  border: 0.05em solid;
  padding: 0.5em;
  border-color: ${(props) =>
    props.facebook ? "rgba(7, 67, 156,0.5)" : "rgba(0, 0, 0,0.5)"};
  width: 15.5em;
  margin: 0.5em 0em;
  font-size: 1em;
  cursor: pointer;
  font-weight: bolder;
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
