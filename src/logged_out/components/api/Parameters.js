import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const createData = (parameter, type, description) => {
  return { parameter, type, description };
};

const colorizeRows = [
  createData(
    "img",
    "String, File",
    "Source image file. Accepts all common image formats as well as image urls. Image size currently limited to 20MP per image due to computational cost."
  ),
  createData("format", "String", "Choose if output is PNG or JPEG"),
  createData(
    "ImageAI-api-key",
    "String",
    "The API key which needs to be provided in the ImageAI-api-key request header."
  ),
];

const artRows = [
  createData(
    "img",
    "String, File",
    "Source image file. Accepts all common image formats as well as image urls. Image size currently limited to 20MP per image due to computational cost."
  ),
  createData("format", "String", "Choose if output is PNG or JPEG"),
  createData(
    "style",
    "String",
    "Choose from 6 different styles  (la_muse, rain_princess, scream, udnie, wave, wreck)"
  ),
  createData(
    "ImageAI-api-key",
    "String",
    "The API key which needs to be provided in the ImageAI-api-key request header."
  ),
];

const classificationRows = [
  createData(
    "img",
    "String, File",
    "Source image file. Accepts all common image formats as well as image urls. Image size currently limited to 20MP per image due to computational cost."
  ),
  createData(
    "ImageAI-api-key",
    "String",
    "The API key which needs to be provided in the ImageAI-api-key request header."
  ),
];

const profileRows = [
  createData("first_name", "String", "User's first name."),
  createData("last_name", "String", "User's last name."),
  createData("username", "String", "User's sign up username."),
  createData("email", "String", "User's sign up e-mail."),
  createData(
    "key",
    "String",
    "The API key which needs to be provided in the ImageAI-api-key request header."
  ),
  createData("limit", "Integer", "Number of available credits left."),
  createData(
    "subscribed",
    "Boolean",
    "Whether the user is subscrited to the premium service or not."
  ),
];

const Parameters = ({ method }) => {
  const classes = useStyles();
  let rows = [];
  if (method === "deep-art") {
    rows = artRows;
  } else if (method === "classify") {
    rows = classificationRows;
  } else if (method === "profile") {
    rows = profileRows;
  } else {
    rows = colorizeRows;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Parameter</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.parameter}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Parameters;
