import React, { useState, useEffect, useContext } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';

const CompanyPosts = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:9000/Posts/company/${user["_id"]}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData["data"]["posts"]);
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

  console.log(data)
  return (
    <div>
      <h1>My Posts</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{`Error fetching data: ${error}`}</div>}
      <List>
        {data &&
          data.map((post) => (
            <ListItem key={post._id}>
              <ListItemText primary={post.title} />
              <Button
                component={Link}
                to={`/postdetails/${post["_id"]}`}
                variant="contained"
              >
                Manage Post
              </Button>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default CompanyPosts;
