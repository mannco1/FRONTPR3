import React from "react";
import { AppBar, List, ListItem, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

  const Confirm  = (props) =>  {
  
    
    return (
      <React.Fragment>
        <AppBar position="static">
          <div style={{ textAlign: "center" }}>Confirm User Details</div>
        </AppBar>
        <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <List style={{ textAlign: "center" }}>
          <ListItem>
            <div>
              <div>First Name</div>
              <div>{props.state.firstName}</div>
            </div>
          </ListItem>
          <ListItem>
            <div>
              <div>Last Name</div>
              <div>{props.state.lastName}</div>
            </div>
          </ListItem>
          <ListItem>
            <div>
              <div>Email</div>
              <div>{props.state.email}</div>
            </div>
          </ListItem>
          <ListItem>
            <div>
              <div>Occupation</div>
              <div>{props.state.occupation}</div>
            </div>
          </ListItem>
          <ListItem>
            <div>
              <div>City</div>
              <div>{props.state.city}</div>
            </div>
          </ListItem>
          <ListItem>
            <div>
              <div>Bio</div>
              <div>{props.state.bio}</div>
            </div>
          </ListItem>
        </List>
        </div>
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


export default Confirm;
