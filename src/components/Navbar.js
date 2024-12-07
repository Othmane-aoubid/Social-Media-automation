import React from 'react';

const Navbar = () => {
    return (
        <header className="header" style={{ backgroundColor: "white", color: "black" }}>
                <h1>SocialAI</h1>
                <nav>
                    <ul>
                        <li><a href="#features" style={{color: "black" }}>Features</a></li>
                        <li><a href="#register" style={{color: "black" }}>Register</a></li>
                        <li><a href="#login" style={{color: "black" }}>Login</a></li>
                    </ul>
                </nav>
            </header>
    );
};

export default Navbar;
