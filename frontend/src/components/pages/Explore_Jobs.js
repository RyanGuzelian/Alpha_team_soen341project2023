
import { useState, useEffect } from "react";
import { Typography, FormLabel, Box } from '@mui/material';
import { BoxProps } from "@mui/system";

export default function Explore_Jobs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/Posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }

  return (

    <Typography>
     
    <div className="TestJob2">
      <h1>Explore Jobs</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        { data &&
          data["data"]["all_Post"].map(({ id, title, company, description, location, date_posted }) => (
          < li key={id}>
               
      <div style={{ width: '100%' }}>
    <Box sx={{
          display: 'block',
          flexWrap: 'nowrap',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 'full',
          borderRadius: 1,
        }} >
          <Item>
          <h3>Job Title: {title}</h3>
          <h4> Company: {company}</h4>
          <h4>Job description: {description}</h4>
          <h5>Location: {location}</h5>
          <h5> Date Posted: {date_posted}</h5>

          </Item>
        


    </Box>
                </div>

             
            </li>
          ))}
      </ul>
    </div>
    </Typography>

    
  );
}