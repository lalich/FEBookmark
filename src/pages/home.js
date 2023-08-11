import { useLoaderData, Form } from 'react-router-dom'
import Bookmark from '../components/Bookmark';


const Home = (props) => {

        const data = useLoaderData()
        /// Testing
        console.log("yoooo here")
        console.log(data)
        console.log("yoooo here")
        ////
   
    return data.map((item, index) => <div>{console.log(item)} </div> )
    
}


export default Home;