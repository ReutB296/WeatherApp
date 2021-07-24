import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {
    Link,
  } from "react-router-dom";
  


export function Header() {
    return(
        <nav class="navbar navbar-light bg-light">
             <form class="container-fluid justify-content-start">
                <Link to="/Home">
                     <button class="btn btn-outline-success me-2">Home</button>
                </Link>
                <Link to="/Favorites">
                     <button class="btn btn-outline-success me-2">Favorites</button>
                </Link>
            </form>
        </nav>
    )
}

// onClick={() => window.history.pushState({},"Home","/Home" )}