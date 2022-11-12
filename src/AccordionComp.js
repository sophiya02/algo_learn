import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";

function AccordionComp(props) {
  const tableData = props.data;

  return (
    <Accordion>
      <AccordionSummary
        id="dataStructuresHeader"
        aria-controls="dataStructuresContent"
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{props.name}</Typography>{" "}
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Visualiser</TableCell>
                <TableCell>Blogs</TableCell>
                <TableCell>Videos</TableCell>
                <TableCell>Questions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.visualiser__link}</TableCell>
                  <TableCell>{row.blog__link}</TableCell>
                  <TableCell>{row.video__link}</TableCell>
                  <TableCell>{row.questions__link}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionComp;
