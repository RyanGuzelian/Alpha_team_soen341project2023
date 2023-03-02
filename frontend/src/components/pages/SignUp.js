import React, { useState } from "react";
//import './home.css'
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  FormGroup,
  Button,
} from "@mui/material";

function SignUp() {


  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
    education: "",
    industry: "",
    location: "",
  });

  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-form-container" style={{ paddingTop: "5%" }}>
      <form className="signup-form" onSubmit={handleSubmit}>
        <FormGroup>
          
          <TextField required id="name" onChange={handleChange} value={inputs.name} name="name" label="Name" />
          <br />

          
          <TextField required id="email" onChange={handleChange} value={inputs.email} name="email" label="Email" />
          <br />

          <TextField
            required
            id="password"
            value={inputs.password}
            onChange={handleChange}
            label="Password"
            type="password"
            name="password"
          />
          <br />
        
          <FormControl required name="userType" onChange={handleChange} value={inputs.userType}>
            <FormLabel id="userType">User Type</FormLabel>
            <RadioGroup>
              <FormControlLabel
                value="seeker"
                control={<Radio />}
                label="Job Seeker"
              />
              <FormControlLabel
                value="employer"
                control={<Radio />}
                label="Employer"
              />
            </RadioGroup>
          </FormControl>
          <br />
          <FormControl required name="education" onChange={handleChange} value={inputs.education}>
            <FormLabel id="education">Highest level of education</FormLabel>
            <RadioGroup>
              <FormControlLabel
                value="highschool"
                control={<Radio />}
                label="High School"
              />
              <FormControlLabel
                value="college"
                control={<Radio />}
                label="College"
              />
              <FormControlLabel
                value="university"
                control={<Radio />}
                label="University"
              />
            </RadioGroup>
          </FormControl>
          <br />

         
          <TextField
            required
            id="location"
            onChange={handleChange}
            value={inputs.location}
            name="location"
            label="Location"
          />
          <br />
          <TextField
            required
            id="industry"
            onChange={handleChange}
            value={inputs.industry}
            name="industry"
            label="Industry"
          />
          <br />
          <Button type="submit" variant="outlined">
            Sign Up
          </Button>
        </FormGroup>
      </form>
      <br />
      <Button href="/signin"> Already have an Account? Sign In</Button>
    </div>
    
  );
}

export default SignUp;