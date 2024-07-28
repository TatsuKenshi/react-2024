import { useState, useEffect } from "react";
import Title from "./Title";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";
import localData from "./data";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [jobs, setJobs] = useState(localData);
  const [currentItem, setCurrentItem] = useState(0);

  const getJobs = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setJobs(data);
        setIsLoading(false);
        setIsError(false);
        return;
      }
      setIsError(true);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="jobs-center">
        <h2>There was an error...</h2>
      </section>
    );
  }

  return (
    <>
      <Title text="available jobs" />
      <section className="jobs-center">
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <JobInfo job={jobs[currentItem]} />
      </section>
    </>
  );
};
export default App;
