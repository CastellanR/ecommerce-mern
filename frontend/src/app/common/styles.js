import styled from "styled-components";

export const ModalStyle = styled.div`
  left: 50%;
  right: 50%;
  position: fixed;
  z-index: 100;

  .closeIcon {
    color: #000000;
    padding: 10px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    position: absolute;
    top: 0.3rem;
    right: 0.5rem;
  }
`;
