import { Outlet } from "react-router-dom";
import Bookmark from "./components/Bookmark";
import Home from "./pages/home";
import "./index.css";


const App = () => {
  return (
    <div className="title">
        <h1> Bookmark App</h1>
        <Outlet/>

        
    </div>
  );
}

export default App;