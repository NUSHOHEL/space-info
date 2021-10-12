import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import "./App.css";
import Filter from "./component/Filter";
import NavBar from "./component/NavBar";
import SpaceCrapt from "./component/SpaceCrapt";

const App: React.FC = () => {
  const [state, setState] = useState<[]>([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);
  console.log(state);

  return (
    <div className='app'>
    <Container>
      <NavBar />
      <Filter/>
      <div className='d-flex flex-wrap justify-content-between'>
        {state.map((rocket,index) => (
          <SpaceCrapt rocket={rocket} key={index} />
        ))}
      </div>
      </Container>
    </div>
  );
};

export default App;
