import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  // const style = {
  //   color: "red",
  //   backgroundColor: 'cyan'
  // }
  // const person1={
  //   name: "Ovijit karmoker",
  //   job: "Student"
  // }
  // const person2 = {
  //   name: "Sharmin Shama",
  //   job: "Data Entry"
  // }
  const products = [
    {name: 'Photoshop', price: "$99.99"},
    {name: 'Illustrator', price: "$99.99"},
    {name: 'PDF Reader', price: "$99.99"},
    {name: 'Premier Pro', price: "$299.99"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        {/* <Products name = {products[0].name} price = {products[0].price}></Products> */}
        {/* <Products product = {products[1]}></Products> */}
        <Counter></Counter>
        <Posts></Posts>
        {
          products.map(product =><Products product = {product}></Products>)
        }
        {
          friends.map(friend => <Person name = {friend} job = {job}></Person>)
        }

        {/* <Products product = {products[2]}></Products> */}

        <Person name = "Ovijit" job = "Student"></Person>
        <Person name = "Shama" job = "Data Entry"></Person>
        
        {/* <Person name = {friends[0]} job = {job[0]}></Person>
        <Person name = {friends[2]} job = {job[2]}></Person> */}
        {/* <h2 style = {style}>Name: {person1.name+" "+person1.job}</h2>
        <h2 style={{color: "pink", backgroundColor: "red"}}>Name: {person2.name+" "+person2.job}</h2> */}

        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <p>My first react app</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Products(props){
  const style = {
    border: "5px solid red",
    borderRadius: "10px",
    padding: "30px",
    margin: '10px',
    height: '300px',
    width: '300px'
  }
  const {name, price} = props.product;
  return(
    <div style = {style}>
      {/* <h3>{props.name}</h3>
      <h1 style = {{color: 'red'}}>{props.price}</h1>  1st way */}

      {/* <h3>{props.product.name}</h3>
      <h1 style = {{color: 'red'}}>{props.product.price}</h1> 2nd way */}

      <h3>{name}</h3>
      <h1 style = {{color: 'red'}}>{price}</h1> {/* 3rd way */}
    </div>
  )
}
const friends = ['Himel', 'Tinni', 'Rezaul'];
const job = ['Student', 'Graphics Designer', 'Gamer']
function Person(props){
  const style = {
    color: '#fff',
    backgroundColor: 'green',
    border: "5px solid orange",
    borderRadius: "10px",
    padding: "30px",
    margin: '10px'
  }
  return(
    <div style = {style}>
      <h1>Name: {props.name}</h1>
      {/* <h4>Job: {props.job}</h4> */}
    </div>)
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    // setCount(count + 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove = {handleIncrease}>Increase</button>
      <button onClick = { () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Posts(){
  const style = {
    color: '#fff',
    backgroundColor: 'green',
    border: "5px solid orange",
    borderRadius: "10px",
    padding: "30px",
    margin: '10px'
  }
  const[posts, setPosts] = useState([]);
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPosts(data));
  })
  return(
    <div>
      <h3>Dynamic Post: {posts.length}</h3>
      <ul>
          {
            posts.map(post => <li  style = {style}>{post.id}</li>)
          }
      </ul>
    </div>
  )
}
export default App;
