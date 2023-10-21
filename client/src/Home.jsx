import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css"
import NavBar from "./NavBar";

export default function Home() {

    return (
        
        <div className="home"> 
            <NavBar/> 
            <div className="intro">
                <h1>WELCOME</h1>
                <label className="text">WAREHOUSE MANAGEMENT SYSTEM</label>
                <br/>
                <label className="text">Z - TRONIC</label>
            </div>
        </div>
    )
}