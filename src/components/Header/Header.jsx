import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="flex px-20 justify-between">
            <div className="header--left ">
                <h1 className="text-5xl bg-transparent"><Link to={"/"}>Franck.</Link></h1>
            </div>
            <Navigation />
        </div>
    )
}

