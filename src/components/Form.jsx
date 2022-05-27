import React, {useState, useRef, useEffect} from 'react';

export default function Form() {
  const [watch, setWatch] = useState(0)
  // const [timerId,setTimerId] = useState(0); 
  const timerId = useRef(null);
   

   const start = ()=> {
      if(!timerId.current){
        let id = setInterval(()=> {
          setWatch((prev)=> prev+1)
        },100)
       // setTimerId(id)
       timerId.current=id;
      }

   }
   const reset=()=> {
     clearInterval(timerId.current);
     setWatch(0)
    timerId.current=null;
   }

   const pause = ()=> {
      clearInterval(timerId.current)
      timerId.current=null;
   } ;

   useEffect(()=> {
     return reset ;
   }, [])

  return (

    <div>
      <h2>StopWatch</h2>
      <h1>{watch}</h1>

  <button onClick={start}>start</button>
  <button onClick={pause}>Pause</button>
  <button onClick={reset}>Reset</button>


    </div>
  )
}