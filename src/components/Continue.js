import React from "react";
import { ButtonPanel } from "../Content/Quiz/styling";
import Button from "./Button";

export const Continue = ({ index, setIndex, setAnswer }) => (
  <ButtonPanel>
    <Button onClick={() => setIndex(index + 1)}>Continue</Button>
    <Button onClick={() => setAnswer("")}>
      Go Back <span>&#8592;</span>
    </Button>
  </ButtonPanel>
);

export default Continue;
