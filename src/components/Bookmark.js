import { Link } from "react-router-dom"

function Bookmark(props){
    return <nav className="nav">
        <Link to="/">
            <div>The BookMark Page</div>
        </Link>
    </nav>

}

export default Bookmark