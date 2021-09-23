import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-red-400 py-2">
            <div className="container mx-auto">
                <Link to="/">
                    <h3 className="text-2xl text-white">Wilders Book</h3>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
