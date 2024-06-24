import { useContext, useEffect, useRef, useState } from "react"
import { context } from "../context";
import Loader from "./loader";
import Loading from "./Loading";

const Audio=()=>{
  const {data,manageAudio,play,setplay}=useContext(context);
  const [currentTime,setcurrentTime]=useState(0);
  const [duration , setduration]=useState(0);
  const [progress,setprogress]=useState(0);
  const [loading,setLoading]=useState(true);

  const audioREF=useRef();
  let URlAudio;
  
  useEffect(()=>{
    
    if(data){
      setLoading(false);
     const convertTOAudio=data.AudioStream.buffer;
    URlAudio =URL.createObjectURL(new Blob([convertTOAudio],{type : "audio/mpeg"}));
             const audio=audioREF.current;
           
               audio.src=URlAudio;
               
                setduration(audio.duration);
               audio.addEventListener("timeupdate",time);
               audio.addEventListener("loaddata",()=>{setcurrentTime(audio.duration);});
              
                
              
              
              manageAudio(audio);
             
    }
    else{
      setLoading(true);
    }


    return ()=>
        {
            URL.revokeObjectURL(URlAudio)
        }
  },[data]
     
)
const time=()=>{
  const audio=audioREF.current;
  setcurrentTime(audio.currentTime);
  setprogress((audio.currentTime/audio.duration)*100)

  if(audio.currentTime===audio.duration){
    
    setplay(false)
  }
}



    return<>
      <audio ref={audioREF}  />
      <Loader progress={progress} ></Loader>
      
          </>
}
export default Audio;
