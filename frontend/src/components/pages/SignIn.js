import React, { useState } from 'react'
import { FormGroup, Button, TextField } from '@mui/material';
//import './home.css'

function SignIn() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name] : e.target.value
        }))
      }


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="auth-form-container" style={{paddingTop: "5%"}}>

        <form className="signin-form"onSubmit={handleSubmit}>
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
                <br/>
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
        <br/>
            <Button type="submit" variant="outlined"> Sign In </Button>
            </FormGroup>
        </form>

        {/* <button className="link-btn" onClick= {() => props.onFormSwitch('signup')} > Don't have account? Sign Up here.</button> */}
        
        </div>
    )
}

export default SignIn