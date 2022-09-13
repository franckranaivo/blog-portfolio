import './Navigation.css'
import { Link } from "react-router-dom";

export default function Navigation() {

    return (
        <nav>
            <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact me</Link></li>
            </ul>
        </nav>
    )
}

