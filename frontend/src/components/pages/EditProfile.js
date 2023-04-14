import React, { useState } from 'react';
import '../../css_files/home.css';
import { Button, FormLabel, TextField, Typography } from '@mui/material';
import { useTheme } from '../theme/ThemeProvider';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [num, setNumber] = useState('');
  const [adrs, setAdrs] = useState('');
  const [edu, setEdu] = useState('');

  const { currentTheme } = useTheme();
  const textColor = currentTheme === 'light' ? 'black' : 'white';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div style={{ color: textColor }}>
      <Typography>
        <h2>Edit Profile Page</h2>
      </Typography>
      <div className="auth-form-container">
        <form className="edit_profile" onSubmit={handleSubmit}>
          <FormLabel htmlFor="name"> Full Name </FormLabel>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            id="name"
            placeholder="Full Name"
            style={{ color: textColor }}
          />

          <FormLabel htmlFor="num"> Phone Number </FormLabel>
          <TextField
            value={num}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="xxx-xxx-xxxx"
            id="number"
            name="number"
            style={{ color: textColor }}
          />

          <FormLabel htmlFor="adrs"> Address </FormLabel>
          <TextField
            value={adrs}
            onChange={(e) => setAdrs(e.target.value)}
            type="adrs"
            placeholder="Please put your current address"
            id="adrs"
            name="adrs"
            style={{ color: textColor }}
          />

          <FormLabel htmlFor="edu"> Education </FormLabel>
          <TextField
            value={edu}
            onChange={(e) => setEdu(e.target.value)}
            type="edu"
            placeholder="Please put your current level of education"
            id="edu"
            name="edu"
            style={{ color: textColor }}
          />

          <Button type="submit"> Submit Changes </Button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
