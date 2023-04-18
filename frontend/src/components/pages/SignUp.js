import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Snackbar} from "@mui/material";
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
  Paper
} from "@mui/material";
import {useTheme} from "../theme/ThemeProvider";

function SignUp() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    User_type: "",

    //userType: "",
    //education: "",
    //industry: "",
    //location: "",
    ///////////
    lastname: "",
    company: "",
    // _id: "",
    phone: "",
    // CV: "",
    // applied: [],
  });

  const { currentTheme } = useTheme();
  const textColor = currentTheme === 'light' ? 'black' : 'white';

  const navigate = useNavigate();
  const [postable, setPostable] = useState(false);
  const [open, setOpen] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (inputs.User_type === "employer") {
      setIsEmployer(true);
    } else {
      setIsEmployer(false);
    }
  }, [inputs]);

  

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.password.length < 8){
      setOpen(true);
    } else {
      setPostable(true);
    }
  };

  useEffect(() => {
    if (postable) {
      fetch("http://localhost:9000/Signup", {
        // Enter your IP address here

        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs), // body data type must match "Content-Type" header
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json["status"] === "success") {
            navigate("/home");
          }
        });
      setPostable(false);
    }
  });

  return (

    
    <div className="auth-form-container" style={{ paddingTop: "5%" }}>
      <form className="signup-form" onSubmit={handleSubmit}>
        <FormGroup>

        
          <FormControl 
            required
            onChange={handleChange}
            value={inputs.User_type}
          >
            
            <FormLabel   id="User_type">User Type
            </FormLabel>
            

            
            <RadioGroup   name="User_type">
            
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
          
          

          {isEmployer ? (
            <>

              <Paper style={{ color : textColor }}>
              <TextField
                required
                id="company"
                onChange={handleChange}
                value={inputs.company}
                name="company"
                label="Company Name"
              />
              <br />
              </Paper>
              
            </>
          ) : (
            <>
              <Paper style={{ color : textColor }}>
              <TextField
                required
                id="name"
                onChange={handleChange}
                value={inputs.name}
                name="name"
                label="Name"
              />
              <br />
              </Paper>

              <Paper style={{ color : textColor }}>
              <TextField
                required
                id="lastName"
                onChange={handleChange}
                value={inputs.lastName}
                name="lastName"
                label="Last Name"
              />
              <br />
              </Paper>
            </>
          )}
           <Paper style={{ color : textColor }}>
          <TextField
            required
            id="email"
            onChange={handleChange}
            value={inputs.email}
            name="email"
            label="Email"
          />
          <br />
          </Paper>

          <Paper style={{ color : textColor }}>
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
          </Paper>
 
          <Paper style={{ color : textColor }}>
          <TextField
            id="phone"
            onChange={handleChange}
            value={inputs.phone}
            name="phone"
            label="Phone Number"
          />
          <br />
          </Paper>
          {/* <FormControl required name="education" onChange={handleChange} value={inputs.education}>
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
          </FormControl> */}
          <br />

          {/* <TextField
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
          <br /> */}
          <Button type="submit" variant="outlined">
            Sign Up
          </Button>
        </FormGroup>
      </form>
      <br />
      <Button href="/signin"> Already have an Account? Sign In</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Password needs to have a minimum length of 8 characters"
      />
    </div>
    
  );
}

export default SignUp;
