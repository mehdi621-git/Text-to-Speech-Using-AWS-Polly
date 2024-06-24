import { IoMdPlayCircle } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { FaCirclePause } from "react-icons/fa6";
import styles from './footer.module.css';
import { useContext, useState } from "react";
import {context} from '../context';
const Footer=()=>{

  const {data , fetchData,liaudio,play,setplay}=useContext(context);
  
  const managePlay=(play)=>{
   

  } 
  const pauseAudio=()=>{
    if(data){
      liaudio.pause();
      setplay(!play)
    }
      
  }
  const runAudio=()=>{
    if(data){
    setplay(!play)
    liaudio.play();
    }
  }
  const downloadAudio=()=>{
    if(data){
      
     const convertTOAudio=data.AudioStream.buffer;
    const URlAudio =URL.createObjectURL(new Blob([convertTOAudio],{type : "audio/mpeg"}));
            const a=document.createElement('a');
          a.href = URlAudio;
          a.download='audio.mp3';
          a.style.display="none"
          document.body.appendChild(a);
          a.click();
          
          document.body.removeChild(a)
          URL.revokeObjectURl(URlAudio)
    }
  }
    return <>
      <div className={styles.foot}>
         
        
        
         {play ? 
          <FaCirclePause  className={styles.f} onClick={()=>{managePlay(play);pauseAudio()}} style={(fetchData==true || data==false) && { opacity:"0.5" , cursor :"default" , transform:"none"}} color={"blue"}/>
          : 
      <IoMdPlayCircle className={styles.f} style={(fetchData==true || data==false) && { opacity:"0.5" , cursor :"default" , transform:"none"}}  onClick={()=>{managePlay(play);runAudio()}} color={"blue"}  />

         }
         
        

      <MdFileDownload className={styles.f} onClick ={()=>downloadAudio()} style={(fetchData==true || data==false) && { opacity:"0.5" , cursor :"default" , transform:"none"}} color={"red"} />
      
      </div>
    </>
}
export default Footer;