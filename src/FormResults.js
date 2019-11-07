import React from "react";
import { ListItemSecondaryAction } from "@material-ui/core";
export default function FormResults(props) {
//console.log(props);
var values = props.location.state;
return <p> {values.firstName} {values.lastName} </p>;
}