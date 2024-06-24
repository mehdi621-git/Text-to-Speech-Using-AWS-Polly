import { useContext } from "react"
import { context } from "../context"


const Loading=()=>{
    const {fetchData}=useContext(context)
    return <>{
        fetchData &&
        <div className={`${"loadingg"} ${"spinner-grow"}`} role="status">
    <span class="visually-hidden">Loading...</span>
  </div>}</>

}
export default Loading