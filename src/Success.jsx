

import React from "react";
import { AppBar, Typography } from "@mui/material";


const Success  =(props)=>  {
  
    return (
      <React.Fragment>
        <AppBar position="static">
          <Typography variant="h6">Success</Typography>
        </AppBar>
        <div style={{ textAlign: "center" }}>
        
          <h2>Thank You For Your Registration</h2>
          <br />
          <p>You will get an email with further instructions for Login</p>
          </div>
        
      </React.Fragment>
    );
  
}

export default Success;
