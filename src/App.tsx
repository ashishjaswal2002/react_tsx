
import { useCallback, useState } from 'react'
import {useEffect} from 'react';

function App() {
  const [count,setCount] = useState< number >(0);

  const [users,setUsers] = useState< [] | null>(null);
  
  useEffect(()=>{
    console.log('Mounting');
    
  },[users]);
 console.log('i am 2 Seeing tou')  

 //Callback
const addTwo = useCallback(()=>setCount(prev=>prev+1),[]);

  return (
    <div className="App">
    <h1> Hello Mom 👩</h1>
    <button onClick={addTwo}>Add</button>
    </div>
  )
}
export default App
