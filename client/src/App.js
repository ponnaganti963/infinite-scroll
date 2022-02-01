
import './App.css';
import {useEffect, useState} from "react";

import { getdata } from './functions/post';

function App() {
  const [data,setData] = useState("Hello World");
  useEffect(() =>{
    getdata()
    .then((res)=> {
      console.log(res);
      setData(res.data.data[1].username);
    })
    .catch((err)=> console.log(err))
  },[])
  return (
    <div className="App">
     {data}
    </div>
  );
}

export default App;
