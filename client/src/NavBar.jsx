import React from "react";
import { Link } from "react-router-dom"; 
import './Navbar.css';

function NavBar() {

    return ( 
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid"> 
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/laptop">Laptops</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/television">TeleVision</a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

