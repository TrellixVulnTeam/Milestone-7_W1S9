import React from 'react';

const SelectedCountry = (props) => {
      const addedCountry = props.selectedCountry;
      console.log(addedCountry);
      // let totalPopulations = 0;
      // for (let i = 0; i <addedCountry.length; i++) {
      //       const country = addedCountry[i];
      //       totalPopulations = totalPopulations + country.populations;
      // }
      const totalPopulation = addedCountry.reduce( (sum, country) => sum + country.population, 0);
      return (
            <div>
                  <h2>This is cart: {addedCountry.length}</h2>
                  <h2>Total population: {totalPopulation}</h2>
            </div>
      );
};

export default SelectedCountry;