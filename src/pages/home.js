import { useLoaderData, Form } from 'react-router-dom'
import Bookmark from '../components/Bookmark';


const Home = (props) => {

        const data = useLoaderData()
    return data.map((item, index) => <div>{console.log(item)} </div> )
    
}


export default Home;