// import { Accordion } from "@mui/material";
import React from "react";
import AccordionComp from "./AccordionComp";
import "./Learn.css";

import { greedy, bruteForce, recursive } from "./TableData.js";

function Learn() {
  return (
    <>
      <AccordionComp name={"Brute Force"} data={bruteForce} />
      <AccordionComp name={"Greedy"} data={greedy} />
      <AccordionComp name={"Recursive"} data={recursive} />
    </>
  );
}

export default Learn;
