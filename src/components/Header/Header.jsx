import Navigation from "../Navigation/Navigation";
import "./Header.css";
import {Link} from "react-router-dom";

export default function Header() {
//  const [count, setCount] = useState(0)

    return (
        <div className="header">
            <div className="header--left">
                <h1 className="title"><Link to={"/"}>Franck.</Link></h1>
            </div>
            <div className="header--right">
                <Navigation />
            </div>
        </div>
    )
}

