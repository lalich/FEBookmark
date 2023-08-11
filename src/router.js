import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import { bookMarksLoader } from './loaders';
import { createAction, updateAction, deleteAction } from './actions'
import App from './App';
import Index from './pages';
import Home from './pages/home';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={bookMarksLoader}/> 
        <Route path=":id" element={<Home/>} loader={bookMarksLoader} />
        <Route path="create" action={createAction} />
        <Route path="update/:id" aciton={updateAction} />
        <Route path="delete/:id" action={deleteAction} />
    </Route>
))

export default router;