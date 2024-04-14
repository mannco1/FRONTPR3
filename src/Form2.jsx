import React from "react";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

  const Form2 =(props)=>  {
  
   
    return (
      <React.Fragment>
        <AppBar position="static">
          <div style={{ textAlign: "center" }}>Enter Personal Details</div>
        </AppBar>
        <div style={{ textAlign: "center" }}>
        <TextField

          label="Occupation"
          
          onChange={props.handleChange("occupation")}
          value={props.state.occupation}
        />
        <br />
        <TextField
          label="City"
          
          onChange={props.handleChange("city")}
          value={props.state.city}
        />
        <br />
        <TextField
          label="Bio"
          
          onChange={props.handleChange("bio")}
          value={props.state.bio}
        />
        

<br />
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={props.back}
        >
          Back
        </Button>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={props.continues}
        >
          Continue
        </Button>
        </div>
       
      </React.Fragment>
    );
  }


export default Form2;
