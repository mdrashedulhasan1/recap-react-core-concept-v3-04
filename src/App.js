import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <PointCount></PointCount>
      <Users></Users>
      <MyComponent brand='Apple' price='$5000'></MyComponent>
      <MyComponent brand='Microsoft' price='$4500'></MyComponent>
      <MyComponent brand='Google' price='$4000'></MyComponent>
    </div>
  );
}


function MyComponent(props) {
  const style = {
    backgroundColor: 'yellow',
    border: '2px solid red',
    margin: '20px',
    padding: '40px'
  }
  return (
    <div style={style}>
      <h1>Brand Name:{props.brand}</h1>
      <h2>Price:{props.price}</h2>
    </div>
  )
}

function PointCount(props) {
  const [point, setPoint] = useState(0);
  const handleIncreasePoint = () => {
    setPoint(point + 1);
  }
  const handleDecreasePoint = () => {
    setPoint(point - 1);
  }
  const style = {
    backgroundColor: 'red',
    border: '2px solid green',
    margin: '20px',
    padding: '40px',
    borderRadius: '50px'
  }
  return (
    <div style={style}>
      <h1>Total Point:{point}</h1>
      <button onClick={handleIncreasePoint}>Increase Point</button>
      <button onClick={handleDecreasePoint}>Decrease Point</button>
    </div>
  )
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      {
        users.map(user => <User key={user.id} name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  const style = {
    backgroundColor: 'gray',
    border: '2px solid blue',
    margin: '20px',
    padding: '40px',
    borderRadius: '50px'
  }
  return(
    <div style={style}>
        <h1>User Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
    </div>
  )
}

export default App;
