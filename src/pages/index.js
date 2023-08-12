import { Link , useLoaderData, Form} from "react-router-dom"
import { deleteAction } from "../actions"
import "../App.css"
function Index(props){
    const data = useLoaderData()
    return (
        <div className="Home">
            <div className="crtfrm">
            <h2>Add a Bookmark</h2>
            <Form className="form" action="/create" method="post">
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="url"  placeholder="ONLY the website name"required/>
                <input type="submit" value="Create bookmark"/>
            </Form>
            </div>
            <div id="main">
                {data.map((item, index) => <div id="crtfrm" key={index} className="bookmark">

                <h1><a href={`https://${item.url}.com`}>{item.name}</a></h1>
                <Link to={`/${item._id}`}>
                    <button className="edit">Edit {item.name}</button> 
                </Link> 
                    <Form action={`/delete/${item._id}`} method="post">
                    <input className="delete" type="submit" value="X"/>
                </Form>  
                </div>)}
            </div>
        </div>
    )
}
export default Index