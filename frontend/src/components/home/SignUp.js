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
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState(""); //type of profile
  const [edu, setEdu] = useState(""); //education
  const [indus, setIndus] = useState(""); //industry
  const [loc, setLoc] = useState(""); //location

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
    console.log(type);
  };

  return (
    <div className="auth-form-container" style={{ paddingTop: "5%" }}>
      <form className="signup-form" onSubmit={handleSubmit}>
        <FormGroup>
          {/* <label for="name"> Full Name </label>
        <input value={name} onChange={(e) => setName(e.target.value) } type="name" id="name" placeholder="Full Name" /> */}
          <TextField required id="name" onChange={handleChange} value={inputs.name} name="name" label="Name" />
          <br />

          {/* <label for = "email" > Email </label>
        <input value={email} onChange={(e) => setEmail(e.target.value) }  type = "email" placeholder="youremail@email.com" id="email" name="email" /> */}
          <TextField required id="email" onChange={handleChange} value={inputs.email} name="email" label="Email" />
          <br />

          {/* <label for = "password" > Password </label>
        <input value={pass} onChange={(e) => setPass(e.target.value) } type = "password" placeholder="*******" id="password" name="password" /> */}

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
          {/* <label for = "type" > Are you an Employer or Job-Seeker? </label>
        <select name="types" id="types" onChange={(e) => setType(e.target.value)}>
            <option value="seeker">Job Seeker</option>
            <option value="employer">Employer</option>
        </select> */}
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

          {/* <label for = "edu" > What is your highest level of Education? </label>
        <select name="education" id="education" onChange={(e) => setEdu(e.target.value)}>
            <option value="highschool">High School</option>
            <option value="college">College</option>
            <option value="university">University</option>
        </select> */}
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

          {/* <label for = "indus" > What is your Industry? </label>
        <input value={indus} onChange={(e) => setIndus(e.target.value) } type = "indus" placeholder="engineering/ marketing/ accounting/.." id="indus" name="indus" /> */}

          <TextField
            required
            id="location"
            onChange={handleChange}
            value={inputs.location}
            name="location"
            label="Location"
          />
          <br />
          {/* <label for = "loc" > What is your Location? </label>
        <input value={loc} onChange={(e) => setLoc(e.target.value) } type = "loc" placeholder="City" id="loc" name="loc" /> */}

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
      {/* <button onClick= {() => props.onFormSwitch('signin')} > Already have an account? Sign In here</button> */}
    </div>
  );
}

export default SignUp;
