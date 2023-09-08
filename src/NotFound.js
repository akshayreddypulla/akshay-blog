import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry, Page not found</h2>
            <Link to="/">Click to go to Home Page</Link>
        </div>
     );
}

export default NotFound;
 