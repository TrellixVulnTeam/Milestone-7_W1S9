import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import SelectedCountry from './components/Country/Selected Country/SelectedCountry';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err));
  }, [])

const handleAddCountry = (country) => {
  const newCountry = [...selectedCountry, country];
  setSelectedCountry(newCountry);
}

  return (
    <div className="App">
        <div>
          <h3>Country Added: {selectedCountry.length}</h3>
          <SelectedCountry selectedCountry = {selectedCountry}></SelectedCountry>
        </div>
        <div className="countries">
          {
            countries.map(country => <Country country = {country} key={country.numericCode} handleAddCountry={handleAddCountry}></Country>)
          }
        </div>
    </div>
  );
}

export default App;
