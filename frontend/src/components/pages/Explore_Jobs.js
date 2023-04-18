import { useState, useEffect, useContext } from "react";
import { Typography, FormLabel, Box, Button } from "@mui/material";
import { BoxProps } from "@mui/system";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

export default function Explore_Jobs() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  async function fetchCompanyName(companyId) {
    const response = await fetch(`http://localhost:9000/Users/Users/${companyId}`);
    const companyData = await response.json();
    console.log(companyData)
    return companyData.data.user.company;
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:9000/Posts`);
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }

        const actualData = await response.json();

        const jobsWithCompanyNames = await Promise.all(
          actualData.data.all_Post.map(async (job) => {
            const companyName = await fetchCompanyName(job.company);
            return { ...job, companyName };
          })
        );

        setData({
          data: {
            all_Post: jobsWithCompanyNames,
          },
        });
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const deleteJob = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:9000/Posts/deletePost/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Error deleting job: ${response.status}`);
      }

      // Refresh job postings after deletion
      setData({
        ...data,
        data: {
          ...data.data,
          all_Post: data.data.all_Post.filter((job) => job._id !== id),
        },
      });
    } catch (error) {
      console.error("Error deleting job:", error);
      // Handle the error as needed
    }
  };

  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.100",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
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
          {data &&
            data["data"]["all_Post"].map(
              ({ _id, title, companyName, description, location, date_posted }) => (
                <li key={_id}>
                  <div style={{ width: "100%" }}>
                    <Box
                      sx={{
                        display: "block",
                        flexWrap: "nowrap",
                        p: 1,
                        m: 1,
                        bgcolor: "background.paper",
                        maxWidth: "full",
                        borderRadius: 1,
                      }}
                    >
                      <Item>
                        {/* <h3><a href={`localhost:9000/post?id=${id}`}>Job Title: {title}</a></h3> */}
                        <Link to={{ pathname: `/post/${_id}` }}>
                          Job Title: {title}
                        </Link>
                        <h4> Company: {companyName}</h4>
                        <h4>Job description: {description}</h4>
                        <h5>Location: {location}</h5>
                        <h5> Date Posted: {date_posted}</h5>

                        {user["User_type"] === "admin" ? (
                          <>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => deleteJob(_id)}
                            >
                              {" "}
                              DELETE{" "}
                            </Button>
                          </>
                        ) : (
                          <></>
                        )}
                      </Item>
                    </Box>
                  </div>
                </li>
              )
            )}
        </ul>
      </div>
    </Typography>
  );
}
