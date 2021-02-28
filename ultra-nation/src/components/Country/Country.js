import React from 'react';
import './Country.css';
const Country = (props) => {
      const {name, flag, population, capital, region} = props.country;
      const handleAddCountry = props.handleAddCountry;
      return (
            <div className = 'country'>
                  <img src={flag} alt="flag"/>
                  <h2>Country Name: {name}</h2>
                  <p>Population: {population}</p>
                  <p>Capital: {capital}</p>
                  <p>Region: {region}</p>
                  <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
      );
};

export default Country;