import React from "react";
import { useNavigate } from "react-router-dom";
import bellroypng from "../assets/bellroy.png";
import arrowpng from "../assets/arrow.svg";
import robotpng from "../assets/robot-background.svg";
import styles from "./home.module.scss";
const Home : React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.homePage}>
            <nav>
                <img className={styles.homelink} src={bellroypng} alt="bellroy icon" onClick={() => navigate("/")}/>
            </nav>
            <div className={styles.content}>
                <div className={styles.homeLeftSide}>
                    <img src={robotpng} alt="robot image" />
                </div>
                <div className= {styles.homeRightSide}>
                    <h1>Welcome to <span>BellRoy...</span></h1>
                    <p>Roy is a delivery robot from Bellroy company responsible for delivering products to your door. 
                        There has been an issue in the server that prevent bellroy from moving, help manouver Roy to the 
                        destination and bell the door.</p>
                    <button className= {styles.gamelink} onClick={() => {navigate("/game")}}>
                        Let's play
                        <img src={arrowpng} alt="play icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;