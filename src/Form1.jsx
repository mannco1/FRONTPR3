import React from "react";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowForward";


const Form1 =(props)=>  {
  
    
    return (
      <React.Fragment>
        <AppBar position="static">
          <div style={{ textAlign: "center" }}>Enter User Details</div>
        </AppBar>
        <div style={{ textAlign: "center" }}>
          <TextField
            label="First Name"
            onChange={props.handleChange("firstName")}
            value={props.state.firstName}
          />
          <br />
          <TextField
            label="Last Name"
            onChange={props.handleChange("lastName")}
            value={props.state.lastName}
          />
          <br />
          <TextField
            label="Email"
            onChange={props.handleChange("email")}
            value={props.state.email}
          />
<br/>
<Button
          variant="contained"
          endIcon={<ArrowBackIcon />}
          onClick={props.continues}
        >
          Continue
        </Button>

        </div>
      </React.Fragment>
    );
  }


export default Form1;
