import React from "react";
// import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

const SpaceCrapt = ({ rocket }: { rocket: {} }) => {
  console.log(rocket);
  
  return (
    <div className='card mb-3' style={{ width: "300px", height: "200px" }}>
      <img src='...' className='card-img-top' alt='...'></img>
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href='https://facebook.com' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default SpaceCrapt;
