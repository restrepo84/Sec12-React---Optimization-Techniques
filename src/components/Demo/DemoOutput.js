import React from "react";
import MyParagraph from "./MyParagraph";

// import classes from './DemoOutput.module.css';

const DemoOutput = (props) => {
  return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>;
};

export default DemoOutput;
