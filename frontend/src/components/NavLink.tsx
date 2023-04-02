import { Link } from "react-router-dom";

import { NavLinkInterface } from "../interfaces/NavLink.interface";

export default function NavLink(props: NavLinkInterface) {
    return (
        <li className="font-semibold hover:text-gray-500 hover:border-gray-500 transition-all duration-300 ml-5 px-1 py-4 border-b border-white origin-left-bottom">
            <Link to={props.link}>{props.title}</Link>
        </li>
    )
}