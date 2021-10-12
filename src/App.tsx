import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import "./App.css";
import Filter from "./component/Filter";
import NavBar from "./component/NavBar";
import SpaceCrapt from "./component/SpaceCrapt";
import { incrementByAmount,filter } from "./store/counterSlice";
import { RootState } from "./store/store";


const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => {
      dispatch(filter("Success"))
      });
  }, [dispatch]);
  console.log(count);

  return (
    <div className='app'>
      <Container>
        <NavBar />
        <Filter />
        <div className='d-flex flex-wrap justify-content-between'>
          {count.map((rocket, index) => (
            <SpaceCrapt rocket={rocket} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default App;
