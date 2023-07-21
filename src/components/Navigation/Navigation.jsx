import { Link } from "react-router-dom";

export default function Navigation() {

    return (
        <nav>
            <ul className='flex space-x-7'>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact me</Link></li>
            </ul>
        </nav>
    )
}

