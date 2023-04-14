import { React, useState, useEffect, useContext } from "react";
import { Button, Typography, Snackbar, Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import UserContext from "../../UserContext";

const Individual_Job = () => {
  const { user } = useContext(UserContext)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applied, setApplied] = useState(false);
  const { postId } = useParams();

  const [open, setOpen] = useState(false);
  
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");


  const[inputs, setInputs] = useState({
    userId: user["_id"],
    postId: postId
  })
  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:9000/Posts/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
  
      if (!response.ok) {
        setSnackbarMessage("Error applying")
        setSnackbarSeverity("error")
        setOpen(true);
      } else {
        setApplied(true);
        setSnackbarMessage("Applied successfully!")
        setSnackbarSeverity("success")
        setOpen(true);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error applying to the post:", error);
      // Handle the error as needed
    }
  }

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    fetch(`http://localhost:9000/Users/Concordia548/Posts/${postId}`)
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
      });
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, []);

  return (
    <div>
      <Typography>
        <div className="IndvJob2">
          {/* {loading && <div>A moment please...</div>} */}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <ul>
            {data && (
              <li>
                <h1>Job Title: {data["data"]["myPost"].title}</h1>
                <h4> Company: {data["data"]["myPost"].company}</h4>
                <h4>Job description: {data["data"]["myPost"].description}</h4>
                <h5>Location: {data["data"]["myPost"].location}</h5>
                <h5> Date Posted: {data["data"]["myPost"].date_posted}</h5>
              </li>
            )}
          </ul>
        </div>
      </Typography>

      <Button onClick={handleClick}>Apply</Button>
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
};

export default Individual_Job;
