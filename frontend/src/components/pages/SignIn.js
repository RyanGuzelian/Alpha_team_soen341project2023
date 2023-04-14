import React, { useState, useEffect, useContext } from "react";
import {
  FormGroup,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";


function SignIn() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const { setUser } = useContext(UserContext);
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
            setSnackbarSeverity("success");
            setUser(json["data"]["userExist"]);
            localStorage.setItem(
              "user",
              JSON.stringify(json["data"]["userExist"])
            );
            console.log(json["data"]["userExist"]);
            setOpen(true);
            setTimeout(() => {
              navigate("/postJob");
            }, 2000);
          } else {
            setSnackbarMessage(json["message"]);
            setSnackbarSeverity("error");
            setOpen(true);
          }
        });
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <div
      className="auth-form-container"
     
    >
      <form className="signin-form" onSubmit={handleSubmit}>
        <FormGroup>
          <TextField
            required
            id="email"
            label="Email"
            value={inputs.email}
            name="email"
            onChange={handleChange}
          />
          <br />
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
      <Snackbar
        open={open}
        severity="success"
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SignIn;
