import {React, useState, useEffect} from 'react'
import {Button, Typography} from "@mui/material"

const Individual_Job = ()=>{

    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/Users/Concordia548/Posts/Test10-179/`)
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



    return(
        <div>
            <Typography>
            <div className="IndvJob2">
     
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data["data"]["myPost"]["_id","title","description","location","candidates"].map(({ id, title, company, description, location, date_posted }) => (
             <li key={id}>
              <h1>Job Title: {title}</h1>
              <h4> Company: {company}</h4>
              <h4>Job description: {description}</h4>
              <h5>Location: {location}</h5>
              <h5> Date Posted: {date_posted}</h5>
             </li>
              
            
          ))}
          

      </ul>
    </div>
            </Typography>


            <Button>Apply</Button>
        </div>
    );
}


export default Individual_Job
