import React from "react";
import { Link } from "react-router-dom";

const links = [
    { title: "Home", url: "/" },
    { title: "Tasks", url: "/tasks" },
    { title: "About Us", url: "/about" }
];

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="container flex justify-between text-sm p-2.5">
                <nav>
                    <ul className="flex gap-x-2.5 font-semibold">
                        {links.map((link, index) => (
                            <li className="pr-2.5 hover:text-gray-600 transition-all" key={index}>
                                <Link to={link.url}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <p className="text-gray-500">Task Manager &copy; 2023</p>
            </div>
        </footer>
    );
}