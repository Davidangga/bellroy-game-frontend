import React from "react";
import { useNavigate } from "react-router-dom";
import bellroypng from "../assets/bellroy.png";
import arrowpng from "../assets/arrow.svg";
import robotpng from "../assets/robot-background.svg";
const Home : React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="homepage">
            <nav>
                <img className="homelink" src={bellroypng} alt="bellroy icon" />
            </nav>
            <div className="content">
                <div className="homeLeftSide">
                    <img src={robotpng} alt="robot image" />
                </div>
                <div className="homeRightSide">
                    <h1>Welcome to <span>BellRoy...</span></h1>
                    <p>Roy is a delivery robot from Bellroy company responsible for delivering products to your door. 
                        There has been an issue in the server that prevent bellroy from moving, help manouver Roy to the 
                        destination and bell the door.</p>
                    <button className= "gamelink" onClick={() => {navigate("/game")}}>
                        Let's play
                        <img src={arrowpng} alt="play icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;