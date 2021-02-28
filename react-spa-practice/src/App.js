import './App.css';
import fakeData from './fakeData/fakeData.json'
import { useEffect, useState } from 'react';
import Details from './components/details/Details'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fakeData);
  }, [])
  return (
    <div className="App">
      <div className="personal-details">
        {
          fakeData.map(fakeData => <Details data = {fakeData} key={fakeData.id}></Details>)
        }
      </div>
      <div className="border"></div>
      <div>
        <h2>This is cart</h2>
      </div>
    </div>
  );
}

export default App;
