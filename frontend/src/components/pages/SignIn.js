import React, { useState, useEffect, useContext } from "react";
import { FormGroup, Button, TextField, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";
//import './home.css'

function SignIn() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const { setUser } = useContext(UserContext)

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isSubmitted) {
      const encodedEmail = encodeURIComponent(inputs.email);
      const encodedPassword = encodeURIComponent(inputs.password);
      fetch("http://localhost:9000/Login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json["status"] === "success") {
            setSnackbarMessage("Login successful!");
            setSnackbarSeverity("success")
            setUser(json["data"])
            setOpen(true);
            setTimeout(() => {
                navigate("/home");
            }, 2000)
          } else {
            setSnackbarMessage(json["message"]);
            setSnackbarSeverity("error");
            setOpen(true)
          }
        });
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <div className="auth-form-container" style={{ paddingTop: "5%" }}>
      <form className="signin-form" onSubmit={handleSubmit}>
        <FormGroup>
          {/* <label for = "email" > email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value) }  type = "email" placeholder="youremail@email.com" id="email" name="email" /> */}
          <TextField
            required
            id="email"
            label="Email"
            value={inputs.email}
            name="email"
            onChange={handleChange}
          />
          <br />
          {/* <label for = "password" > password </label>
            <input value={pass} onChange={(e) => setPass(e.target.value) } type = "password" placeholder="*******" id="password" name="password" /> */}

          <TextField
            required
            id="password"
            label="Password"
            type="password"
            value={inputs.password}
            name="password"
            onChange={handleChange}
          />
          <br />
          <Button type="submit" variant="outlined">
            {" "}
            Sign In{" "}
          </Button>
        </FormGroup>
      </form>

      {/* <button className="link-btn" onClick= {() => props.onFormSwitch('signup')} > Don't have account? Sign Up here.</button> */}
      <Snackbar
        open={open}
        severity="success"
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
  </Alert>
        </Snackbar>
    </div>
  );
}

export default SignIn;
