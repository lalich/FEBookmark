import { Link , useLoaderData, Form} from "react-router-dom"

function Index(props){
    const data = useLoaderData()
    const path = "https://vercel.com/dashboard"
    return (
        <div>
            <h2>Add a Bookmark</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="url"  placeholder="ONLY the website name"required/>
                <input type="submit" value="Create bookmark"/>
            </Form>
            {data.map((item, index) => <div key={index} className="bookmark">

            <h1><a href={`https://${item.url}.com`}>{item.name}</a></h1>
            <Link to={`/${item._id}`}>
                <h3>edit {item.name}</h3>
            </Link> 
            
        </div>)}
        </div>
    )
}
export default Index