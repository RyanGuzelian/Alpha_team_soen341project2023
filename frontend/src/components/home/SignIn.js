import React, { useState } from 'react'
import './home.css'

function SignIn() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return(
        <div className="auth-form-container">

        <form className="signin-form"onSubmit={handleSubmit}>
            <label for = "email" > email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value) }  type = "email" placeholder="youremail@email.com" id="email" name="email" />

            <label for = "password" > password </label>
            <input value={pass} onChange={(e) => setPass(e.target.value) } type = "password" placeholder="*******" id="password" name="password" />

            <button type="submit"> Sign In </button>
        </form>

        {/* <button className="link-btn" onClick= {() => props.onFormSwitch('signup')} > Don't have account? Sign Up here.</button> */}
        
        </div>
    )
}

export default SignIn
