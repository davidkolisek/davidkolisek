import { Fade } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

export function Dashboard() {
  const history = useHistory();
  return (
    <Fade in={true}>
      <div>
      dash
      </div>
    </Fade>
  );
}
