import { useContext, useState, useEffect } from "react";
import UserContext from "../../UserContext";
import { List, ListItem, ListItemText } from "@mui/material";

const Interviews = () => {
  const { user } = useContext(UserContext);

  const [interviews, setInterviews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && user.interviews) {
      setLoading(true);
      Promise.all(
        user.interviews.map((id) =>
          fetch(`http://localhost:9000/Posts/getPost/${id}`)
        )
      )
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then(async (interviewData) => {
          const interviewsWithCompanies = [];
          for (const data of interviewData) {
            const interview = data.data.myPost;
            const companyId = interview.company;
            const companyResponse = await fetch(
              `http://localhost:9000/Users/Users/${companyId}`
            );
            const companyData = await companyResponse.json();
            const company = companyData.data.user;
            interviewsWithCompanies.push({ ...interview, company });
          }
          setInterviews(interviewsWithCompanies);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setInterviews(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{`Error fetching data: ${error}`}</div>}
      {interviews && (
        <List>
          {interviews.map((interview) => (
            <ListItem key={interview["_id"]}>
              <ListItemText
                primary={`You have been selected for an interview for the posting ${interview["title"]}. Please contact the employer by email at ${interview.company.email}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default Interviews;
