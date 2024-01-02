import {useState, useEffect} from 'react';

function App2() {
    const [age, setAge] = useState(0);

  const changeAge = () => {
    setAge(prompt("What Is Your Age?"));
  }

  useEffect(changeAge, []);

  return (
    <div className="app">
      {/* <h1 style={{textAlign: "center"}}>Homepage</h1>
      <p>Mario is {age} years old!</p>
      <input placeholder='enter your pincode' value={age}></input>
      <button onClick={changeAge}>Change Age</button> */}
      
    </div>
  )
}

export default App2