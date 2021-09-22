import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-danger">
            <div className="container py-2">
                <Link to="/">
                    <h3 className="text-white">Wilders Book</h3>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
