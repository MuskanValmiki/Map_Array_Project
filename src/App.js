import './App.css';
import React,{useState} from 'react';

function App(){
  let list=[{ name: 'John', age: 23 }, { name: 'Albert', age: 28 }, { name: 'Gladly', age: 35 } ]
  return(
    <>
    {
      list.map((item)=>{
        return(
          <div>
            <table>
              <th>Name</th>
              <th>Age</th>
              <tr>
            <ul>          
              <li>
             <h1>{item.name}</h1>
             </li>
             <li>
             <h1>{item.age}</h1>
             </li> 
             </ul>
             </tr>
             </table>
          </div>
        )
     
      })
    }
    </>
  )
}

export default App;
