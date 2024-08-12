import React from "react";
import robotImg from "../../assets/robot.svg";
interface RobotProps {
    x: number;
    y: number;
    direction: string;
}

const Robot: React.FC<RobotProps> = ({x, y, direction}) => {
    return (
        <div className="robot" style={{
            border: "1px solid black",
            position: 'absolute',
            height: '50px',
            top: `${y * 100 + 50}px`,
            left: `${x * 100}px`,
            transform: `rotate(${direction === 'NORTH' ? 270 : direction === 'EAST' ? 0 : direction === 'SOUTH' ? 90 : 180}deg)`
        }
        }>
            <img className="robot-img" src={robotImg} alt="bellroy robot"/>
        </div>
    )
}

export default Robot;

