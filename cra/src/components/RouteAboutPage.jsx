import { Link } from 'react-router-dom';

function RouteAboutPage(){
    return(
        <div>
            <h3>About Page</h3>
            <p>현재 path = /about</p>
            <Link to="/">Link to Home</Link>
        </div>
    )
}

export default RouteAboutPage;