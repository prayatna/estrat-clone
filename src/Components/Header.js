import React from 'react';
import './Header.css';
import Logo from  './Logo';

const header = () => {
    return(
        <header className="container">
            <div className="logo">
                <Logo height = "80px" width = "185px"/>
            </div>
            <nav>
                <ul >
                    <li>
                        <a href ="#"> Home</a>
                    </li>
                    <li>
                        <a href = "#">  Consult </a>
                    </li>
                    <li>
                        <a href = "#"> Implement</a>
                    </li>
                    <li>
                        <a href = "#"> Manage</a>
                    </li>
                    <li>
                        <a href = "#"> About</a>
                    </li>
                    <li>
                        <a href = "#"> Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default header