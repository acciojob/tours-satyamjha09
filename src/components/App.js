import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching tours:", error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      {tours.length === 0 ? (
        <div className="no-tours">
          <h2>No tours left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  );
}

export default App;
