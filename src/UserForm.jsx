/* eslint-disable default-case */
import React, { useCallback, useState } from "react";
import Form1 from './Form1'
import Form2 from "./Form2";
import Confirm from './Confirm'
import Success from './Success'

function UserForm()  {
  const [state,setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const continues = (e) => {
    e.preventDefault()
    if (state.step >= 5) return
    setState({...state, step: state.step + 1})
}

const back = (e) => {
    e.preventDefault()
    if (state.step <= 1) return
    setState({...state, step: state.step - 1})
}

const handleChange = useCallback((input) => (e) => {
    setState((prevState) => {
        return {...prevState, [input]: e.target.value}
    });
}, []);

  
    
    
    
    return (
      <div>
          {
              state.step === 1 &&
              <Form1 handleChange={handleChange} state={state} continues={continues}/>
          }
          {
              state.step === 2 &&
              <Form2 handleChange={handleChange} state={state} continues={continues} back={back}/>
          }
          {
              state.step === 3 &&
              <Confirm handleChange={handleChange} state={state} continues={continues} back={back}/>
          }
          {
              state.step === 4 &&
              <Success state={state} continues={continues} back={back}/>
          }
      </div>
  )
}

export default UserForm;