import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[games, setGames] = useState([]);
  useEffect(() => {
    fetch('https://www.cheapshark.com/api/1.0/deals?storeID=3&upperPrice=15')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          friends.map(friend => <MyFriends name = {friend}></MyFriends>)
        }
        <ChangeStates></ChangeStates>
        {
          products.map(product => <ProductDetails name = {product.name} key = {product.id} price = {product.price}></ProductDetails>)
        }
        {
          games.map(game => <Games name = {game.title} key= {game.gameID} price = {game.salePrice} img = {game.thumb}></Games>)
        }
      </header>
    </div>
  );
}
const friends = ["Himel", "Rezaul", "Tinni", "Deep"];
function MyFriends (props) {
  const style = {
    backgroundColor: "#fff",
    color: "#000",
    border: "5px solid #ff4757",
    borderRadius: '10px',
    margin: "30px",
    padding: "20px"
  }
  return(
    <div style = {style}>
      <h2>{props.name} is my friend.</h2>
    </div>
  )
}

const products = [
  {name: "Hat e kolom e JavaScript", price: "320/-", id: "1"},
  {name: "Habluder Jonno Programming", price: "200/-", id: "2"},
  {name: "Sound Box", price: "1500/-", id: "3"},
  {name: "Mobile", price: "27000/-", id: "4"}
];
function ProductDetails (props){
  const style = {
    border: "5px solid #3742fa",
    borderRadius: "8px",
    backgroundColor: "#747d8c",
    color: "#2ed573",
    margin: "20px",
    padding: "20px"
  }
  return(
    <div style = {style}>
      <h1>Product name: {props.name}</h1>
      <h5>Product price: <span style = {{color: "red"}}>{props.price}</span></h5>
    </div>
  )
}
function ChangeStates (){
  let [movies, setMovies] = useState(0);
  const increase = () => {
    setMovies(movies + 1);
  }
  const style = {
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#2ed573",
    borderRadius: "10px",
    fontSize: "18px",
    marginRight: "5px"
  }
  return(
    <div>
      <h3>I see total {movies} movies</h3>
      <button onClick = {increase} style = {style}>Increase</button>
      <button onClick = { () => setMovies(movies - 1)} style = {style}>Decrease</button>
    </div>
  )
}

function Games (props) {
  const imgStyle = {
    height: "300px",
    width: "600px"
  }
  const style = {
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#2ed573",
    borderRadius: "10px",
    margin: "5px",
    width: "600px",
    display: "grid"
  }
  return (
    <div style = {style}>
      <img src={props.img} alt="Game Image" style = {imgStyle} />
      <h2>Games Title: {props.name} </h2>
      <h4>Sell Price: <span style = {{color: "orange"}}>{props.price}</span></h4>
    </div>
  )
}

export default App;