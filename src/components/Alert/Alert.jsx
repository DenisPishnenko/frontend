import React from "react";
import { Alert } from "@material-ui/lab";

const ShowAlert = (value, message) => {
  return (
    <>
      <Alert severity={value}>{message}</Alert>
    </>
  );
};

export default ShowAlert;
