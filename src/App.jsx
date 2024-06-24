
import Footer from "./components/footer";
import Header from "./components/header";
import TextArea from "./components/textarea";
import Loader from "./components/loader";
import Audio from "./components/audio"
import Root from "./context.jsx"
import Loading from "./components/Loading"
import Select from "./components/select.jsx";
import Texti from "./components/text.jsx";
const App=()=>{
  
return <>

<Root>
  <Header></Header>
  <Texti></Texti>
  
  <Loading></Loading>
  
  <TextArea>
 
  </TextArea>
  <Audio></Audio>
  <Footer></Footer>
 

 

  </Root>
  </>
}
export default App;