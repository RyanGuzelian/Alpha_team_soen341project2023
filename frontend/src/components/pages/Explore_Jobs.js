import '../../css_files/stylejob.css'
import { useState, useEffect } from "react";

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
      // .catch((err) => {
      //   setError(err.message);
      //   setData(null);
      // })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="TestJob2">
      <h1>Explore Jobs</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data["data"]["all_Post"].map(({ id, title, company, description, location, date_posted }) => (
             < li key={id}>
              <h3>Job Title: {title}</h3>
              <h4> Company: {company}</h4>
              <h4>Job description: {description}</h4>
              <h5>Location: {location}</h5>
              <h5> Date Posted: {date_posted}</h5>
            </li>
          ))}
      </ul>
    </div>
  );
}