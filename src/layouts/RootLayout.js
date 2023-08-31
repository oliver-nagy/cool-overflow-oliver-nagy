import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav className="nav-bar">
                    <div className="top-bar-logo">
                        <Link to="/" className="title"><h1>Cooloverflow</h1></Link>
                    </div>
                    <div className="navigation">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/questions">Questions</NavLink>
                        <NavLink to="/help">Help</NavLink>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..."/>
                    </div>
                    </div>
                </nav>
            </header>
            <main className="content-container">
                <Outlet/>
            </main>
        </div>
    );
}

export default RootLayout;