import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import { bookMarksLoader } from './loaders';
import App from './App';
import Index from './pages';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={bookMarksLoader}/> 
        <Route path=":id" />
        <Route path="create" />
        <Route path="update"/>
        <Route path="delete"/>
    </Route>
))

export default router;