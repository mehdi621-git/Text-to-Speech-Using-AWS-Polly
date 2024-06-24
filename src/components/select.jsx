import { context } from '../context';
import styles from './select.module.css';
import { useContext } from 'react';
const Select=()=>{
const{selection,setselection}=useContext(context);
const select=(e)=>{
    setselection(e.target.value)
   

}
    return <>
    <select className= {` ${styles.size} ${"form-select"} ${"changewidth"} `} aria-label="Default select example" onChange={(e)=>select(e)}>
  <option value="Joanna" selected>Joanna (F)</option>
  <option  value="Salli">Salli (F)</option>
  <option value="Justin">Justin (M)</option>
  <option value="Liv">Liv (M)</option>
</select>
    </>
}
export default Select;