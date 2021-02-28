import React from "react";
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Details = (props) => {
  console.log(props.data);
  const { name, img, gender, email, position, salary } = props.data;
  return (
    <div className="person">
      <div className="image">
        <img src={img} alt="Person img" />
      </div>
      <div className="person-details">
        <h1>Name: {name}</h1>
        <p>Gender: {gender}</p>
        <p>Email: {email}</p>
        <p>Position: {position}</p>
        <p>Salary: {salary}</p>
        <button className = 'button'> <span className = "icon"><FontAwesomeIcon icon={faPlus}/></span>Hire</button>
      </div>
    </div>
  );
};

export default Details;
