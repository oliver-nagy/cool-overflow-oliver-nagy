import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav className="nav-bar">
                    <div className="top-bar-logo">
                        <img src="/cooloverflow-logo.png" alt="logo"></img>
                        <Link to="/" className="title"><p style={{fontSize:'18px'}}>cool<span style={{fontWeight:'bold'}}>overflow</span></p></Link>
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