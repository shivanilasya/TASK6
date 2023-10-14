import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav class="navbar">
             <Link href="#" class="navbar-brand">Somisetty Shivani Lasya</Link>
            <div class="nav">
                <Link to="/home" class="nav-link">Home</Link>
                <Link to="/about" class="nav-link">About</Link>
                <Link to="/education" class="nav-link">Education</Link>
                <Link to="/projects" class="nav-link">Projects</Link>
                <Link to="/contact" class="nav-link">Contact</Link>
            </div>
        </nav>

    )
}
export default Nav;