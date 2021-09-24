import { Link } from 'react-router-dom';

function RouteHomePage(){
    return(
        <div>
            <h3>Home</h3>
            <p>현재 path = /</p>
            <Link to="/about">Link to About</Link>
        </div>
    )
}

export default RouteHomePage;