import { useContext,useState } from 'react';
import styles from './loader.module.css';
import { context } from '../context';

const Loader=({progress})=>{
const {play}=useContext(context);




    return <>
    <div  className={styles.load}>
    {  <div style={{width : `${progress}%`}} className={styles.loading}></div>}
        </div>
    </>
}
export default Loader;