import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTours(data);
        setIsLoading(false);
        return;
      }
      setIsError(true);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <div className="title">
          <h2>There was an error...</h2>
        </div>
      </main>
    );
  }

  if (tours.length < 1) {
    return (
      <main>
        <div className="title">
          <h2>No tours to display...</h2>
          <button
            className="btn"
            onClick={() => {
              fetchTours();
            }}
          >
            refetch
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} setTours={setTours} fetchTours={fetchTours} />
    </main>
  );
};
export default App;
