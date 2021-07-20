import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export function  Header() {
    return(
        <nav class="navbar navbar-light bg-light">
             <form class="container-fluid justify-content-start">
             <button class="btn btn-outline-success me-2">Home</button>>
            <button class="btn btn-outline-success me-2">Favorites</button>
            </form>
        </nav>
    )
}