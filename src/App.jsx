import Tours from "./Tours";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const [tours, setTours] = useState("");
  // Stop Loading after 5 sec

  const removeTour = (id) => {
    const filterTours = tours.filter((tour) => tour["id"] !== id);
    setTours(filterTours);
  };

  const getData = async () => {
    setIsloading(true);
    try {
      const response = await fetch(url);
      const responseToJson = await response.json();
      setTours(responseToJson);
    } catch (error) {
      console.error(error);
    }
    setIsloading(false);
  };

  useEffect(() => {
    // getData();
  }, []);

  // Show is Loading at the start
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={getData}>
          refresh
        </button>
      </div>
    );
  }

  // After 5 sec render the Tour components
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
