import RouteHeader  from "./components/RouteHeader";
import RouteHomePage from "./components/RouterHomePage";
import RouteAboutPage from "./components/RouteAboutPage";

import {Route} from 'react-router-dom';

function App(){
    return(
        <div>
            <RouteHeader />
            <Route exact path="/" component={RouteHomePage} />
            <Route exaxt path="/about" component={RouteAboutPage} />
        </div>
    )
}


export default App;