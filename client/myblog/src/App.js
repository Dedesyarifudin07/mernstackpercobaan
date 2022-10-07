import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/santri').
    then(response => response.json().
    then(data => setData(data)))
  },[])
  return (
    <div>
      {
        data.map(item => {
          return <ul key={item._id}>
            <li>{item.name} </li>
            <li>{item.nohp}</li>
            <li>{item.email}</li>
          </ul> 
        })
      }
    </div>
  )
    
}

export default App;
