import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/board">Board</Link>
            <Link to="/test">Test</Link>
        </div>
    );
}

export default Navigation;