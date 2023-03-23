import "./App.css";
import { useEffect, useState } from "react";
import DigimonList from "./components/DigimonList";

import Logo from "./components/Logo";

function App() {
  // useState set to null bc at the beginning there is nothing to state(will be updated with setDigimon)
  const [digimon, setDigimon] = useState(null);

  // useEffect always needs an arrow function & an empty array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://digimon-api.vercel.app/api/digimon"
        );
        // the response returns a response obj,then parse the data with .json() to turn it into data
        const data = await response.json();
        // cuts down the API data (splice) to a more manageable amount
        const digidata = data.splice(0, 27);
        console.log(digidata);
        // updates the digimon state (line 7) with the digidata that was fetched from the API
        setDigimon(digidata);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Logo />
      {/* 'digimon &&' must be passed here because at first the state is set to null. when he data is set to state, it will rerender and pass the data down */}
      {digimon && <DigimonList digidata={digimon} />}
    </div>
  );
}

export default App;
