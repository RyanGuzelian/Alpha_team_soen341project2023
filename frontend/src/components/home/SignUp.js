import React, { useState } from 'react'
import './home.css'

function SignUp() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState(''); //type of profile
    const [edu, setEdu] = useState(''); //education
    const [indus, setIndus] = useState(''); //industry
    const [loc, setLoc] = useState (''); //location



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
    <div className="auth-form-container">
        <form className="signup-form"onSubmit={handleSubmit}>

        <label for="name"> Full Name </label>
        <input value={name} onChange={(e) => setName(e.target.value) } type="name" id="name" placeholder="Full Name" />

        <label for = "email" > Email </label>
        <input value={email} onChange={(e) => setEmail(e.target.value) }  type = "email" placeholder="youremail@email.com" id="email" name="email" />

        <label for = "password" > Password </label>
        <input value={pass} onChange={(e) => setPass(e.target.value) } type = "password" placeholder="*******" id="password" name="password" />

        <label for = "type" > Are you an Employer or Job-Seeker? </label>
        <input value={type} onChange={(e) => setType(e.target.value) } type = "type" placeholder="employer/job-seeker" id="type" name="type" />

        <label for = "edu" > What is your highest level of Education? </label>
        <input value={edu} onChange={(e) => setEdu(e.target.value) } type = "edu" placeholder="high school/ cegep/ university" id="edu" name="edu" />

        <label for = "indus" > What is your Industry? </label>
        <input value={indus} onChange={(e) => setIndus(e.target.value) } type = "indus" placeholder="engineering/ marketing/ accounting/.." id="indus" name="indus" />

        <label for = "loc" > What is your Location? </label>
        <input value={loc} onChange={(e) => setLoc(e.target.value) } type = "loc" placeholder="City" id="loc" name="loc" />

        <button type="submit"> Sign Up </button>
    </form>

    {/* <button onClick= {() => props.onFormSwitch('signin')} > Already have an account? Sign In here</button> */}
   </div>

    )
}

export default SignUp