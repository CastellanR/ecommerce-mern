import React from "react";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

import { ModalStyle } from "./styles.js";
export const Modal = (props) => {
  const closeicon = () => (
    <IconContext.Provider value={{ className: "closeIcon" }}>
      <MdClose onClick={props.closeModal} />
    </IconContext.Provider>
  );

  return (
    props.showModal && (
      <ModalStyle>
        {closeicon()}
        {props.children}
      </ModalStyle>
    )
  );
};
