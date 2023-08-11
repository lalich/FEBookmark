import { Link , useLoaderData, Form} from "react-router-dom"

function Index(props){
    const data = useLoaderData()

    return (
        <div>
            <h2>Add a Bookmark </h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="url" placeholder="url"/>
                <input type="submit" value="Create bookmark"/>
            </Form>

            {data.map((item, index) => <div key={index} className="bookmark">
            <Link to={`/${item._id}`}>
                <h1>{item.name}</h1>
            </Link> 
            
        </div>)}
        </div>
    )
}
export default Index