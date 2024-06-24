import { createContext, useEffect, useRef, useState } from "react";
import AWS from 'aws-sdk';

export const context = createContext();

AWS.config.update({
  
  accessKeyId: import.meta.env.VITE_APP_CLIENTID,
  secretAccessKey: import.meta.env.VITE_APP_SECRETKEY,
  region: import.meta.env.VITE_APP_REGION,
 
});
const polly=new AWS.Polly();

const Root = ({ children }) => {
  //const [request, setrequest] = useState("");
  //console.log(request);
  const [data,setdata]=useState("");
  const [liaudio,setliaudio]=useState();
  const [Loading,setLoading]=useState(true);
  const [play,setplay]=useState(false);
  const [fetchData,setfetchdata]=useState(false);
  const [selection,setselection]=useState('Joanna')
  
   const toSpeech=(request)=>{
    console.log(selection)
    setfetchdata(true);
    polly.synthesizeSpeech({
        Text : request,
        OutputFormat:'mp3',
        VoiceId: selection,
        
    },
    (error,data1)=>{
      setfetchdata(false);
        if(error){
            console.log(error + "occured");
        }
        else{
            console.log(data1)
            setdata(data1);
            console.log(data)
        }
    }
)

  }
  const manageAudio=(adii)=>{
          setliaudio(adii);
  }

  
  return (
    <>
      <context.Provider value={{  toSpeech,data,manageAudio,liaudio , setLoading,Loading,play,setplay,fetchData,selection,setselection}}>{children}</context.Provider>
    </>
  );
};
export default Root;
