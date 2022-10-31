import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/board">Board</Link>
            </li>
            {/* <li>
                <Link to="/test">Test</Link>
            </li> */}
        </div>
    );
}

export default Navigation;