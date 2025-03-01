import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const API_URL = "https://course-api.com/react-tours-project"; // API endpoint

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch tours");
      }
      const data = await response.json();
      setTours(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  return (
    <main>
      <h1>Our Tours</h1>
      {tours.length === 0 ? (
        <p>No tours available</p>
      ) : (
        <Tours tours={tours} setTours={setTours} />
      )}
    </main>
  );
};

export default App;
