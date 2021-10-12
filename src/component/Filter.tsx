/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Filter = () => {
  return (
    <div className='d-flex'>
      <label htmlFor='cars'>Choose a car:</label>
      <select name='cars' id='cars'>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
        <option value='opel'>Opel</option>
      </select>
      <label htmlFor='cars'>Choose a car:</label>
      <select name='cars' id='cars'>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
      </select>
      <label htmlFor='cars'>Choose a car:</label>
      <select name='cars' id='cars'>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
      </select>
    </div>
  );
};

export default Filter;
