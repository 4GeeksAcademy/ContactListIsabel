import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { Form } from "../component/form";

export const Demo = () => {

  return (
    <div className="container w-50 p-3">
      <Form />
      <p className="d-flex justify-content-center">
        <strong>Add contact</strong>
      </p>
    </div>
  );
};
