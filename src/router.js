import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import { bookMarksLoader, bookMarkLoader} from './loaders';
import App from './App';
import Index from './pages';
import Show from './pages/show';
const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={bookMarksLoader}/> 
        <Route path=":id" element={<Show/>} loader={bookMarkLoader}/>
        <Route path="create" />
        <Route path="update"/>
        <Route path="delete"/>
    </Route>
))

export default router;