import React from "react";
import "./HeaderComponent.css";

const HeaderComponent = ({ blackHeader }) => {
    return (
        <header className={`header-main${blackHeader ? "-black" : ""}`}>
            <nav className="header-nav">
                <a href="/"><img width="100" className="netflix_logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="netflix_logo" /></a>
                <img width="40" className="netflix_user_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_user_logo" />
            </nav>
        </header>
    );
};

export default HeaderComponent;
