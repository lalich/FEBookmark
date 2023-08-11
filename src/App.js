import { Outlet } from "react-router-dom";
import Bookmark from "./components/Bookmark";
import Home from "./pages/home";


const App = () => {
  return (
    <div className="App">
        The BookMark FE
        <Bookmark/>
        <Outlet/>
       
        
    </div>
  );
}

export default App;