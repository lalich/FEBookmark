import { useLoaderData } from "react-router-dom"
import { Form } from "react-router-dom"

function Show(props){
    const bookMark = useLoaderData()
    console.log(bookMark)
    return <div>
            <h1>{bookMark.name}</h1>

            <h2>Update {bookMark.name}</h2>
            <Form action={`/update/${bookMark._id}`} method="put">
                <input type="text" name="name" placeholder="bookmark name"/>
                <input type="text" name="url" placeholder="add ONLY the website name"/>
                <input type="submit" value="Update Bookmark"/>
            </Form>
            <h2>Delete {bookMark.name}</h2>
            <Form action={`/delete/${bookMark._id}`} method="post">
                <input type="submit" value="Delete bookmark"/>
            </Form>
            
        </div>
}

export default Show