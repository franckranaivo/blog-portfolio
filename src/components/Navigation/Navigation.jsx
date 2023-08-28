import { Link } from "react-router-dom";

export default function Navigation() {

    return (
        <nav>
            <ul className={'flex space-x-7'}>
                <li className={'text-xl hover:text-rose-500'}><Link to="/">Home</Link></li>
                <li className={'text-xl hover:text-rose-500'}><Link to="/blog">Blog</Link></li>
                <li className={'text-xl hover:text-rose-500'}><Link to="/contact">Contact me</Link></li>
            </ul>
        </nav>
    )
}

