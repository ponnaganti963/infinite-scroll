
import './App.css';
import {useEffect, useState} from "react";
import Post from "./components/Post";
import Endalert from "./components/Endalert";
import { getdata } from './functions/post';

function App() {
  const [data,setData] = useState([]);
  const [skip,setSkip] = useState(0);
  const [isEnd,setisEnd] = useState(false);
  useEffect(() =>{
    getdata(skip)
    .then((res)=> {
      if (res.data.data.length === 0){ 
        setisEnd(true);
        return;
      }
      setData([...data,...res.data.data]);
    })
    .catch((err)=> console.log(err))
  },[skip]);


  const handleScroll = (e) => { 
    const { offsetHeight, scrollTop, scrollHeight } = e.target;

    if(offsetHeight + scrollTop >= scrollHeight) {
      setSkip(data?.length);
      console.log('asdsad');
    }
  }
  return (
    <div className="min-h-screen mt-8">
     <div className="text-center mb-14">
       <h1 className="text-4xl">MERN</h1>
       <h1 className="text-3xl text-accent italic">Infinite Scroll</h1>
     </div>
     <div className="h-screen overflow-auto snap-mandatory snap-y" onScroll={handleScroll}>
       {
         data?.map((post)=> (
           <Post key={post._id} {...post} />
         ))
       }
      <Post/>
       
     </div>
       {
         isEnd && <Endalert/>
       }

    </div>
  );
}

export default App;
