import { useContext, useRef } from 'react';
import styles from './textarea.module.css';
import { context } from '../context';

import Select from './select'
const TextArea=()=>{
    const { toSpeech }=useContext(context);
   const prompt = useRef();
   const takeval=()=>{
      if(prompt.current.value && prompt.current.value!=""){
         const newprompt = prompt.current.value;
      
      
      toSpeech(newprompt);
   }
      
   }
    return <>
    <div className={styles.main}>
        <div className={styles.load}></div>
        <Select></Select>
     <textarea name="text" id="1" className={styles.tarea} 
        ref={prompt} placeholder='Type Thought to Speech'
     />
     <button onClick={takeval } className={styles.button}>Convert to Speech</button>
     </div>
    </>
}
export default TextArea;