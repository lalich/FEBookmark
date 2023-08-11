import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" >
        <Route path=""/> 
        <Route path=":id" />
        <Route path="create" />
        <Route path="update"/>
        <Route path="delete"/>
    </Route>
))

export default router;