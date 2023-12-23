import Tours from "./Tours";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const [tours, setTour] = useState("");

  // Stop Loading after 5 sec
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 5000);

    const getData = async () => {
      const response = await fetch(url);
      const responseToJson = await response.json();
      setTour(responseToJson);
    };

    // getData();
  }, []);

  // Show is Loading at the start
  if (isLoading) {
    return <Loading />;
  }
  // After 5 sec render the Tour components
  return (
    <div>
      <h2>Our Tours</h2>
      {tours.map((tour) => {
        const { id, image, info, name, price } = tour;
        return (
          <Tours key={id} image={image} info={info} name={name} price={price} />
        );
      })}
    </div>
  );
};
export default App;
