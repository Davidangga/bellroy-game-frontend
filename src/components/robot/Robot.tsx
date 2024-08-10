import React from "react";

interface RobotProps {
    x: number;
    y: number;
    direction: string;
}

const Robot: React.FC<RobotProps> = ({x, y, direction}) => {
    return (
        <div className="robot" style={{
            top: `${y * 100}px`,
            left: `${x * 100}px`,
            transform: `rotate(${direction === 'NORTH' ? 0 : direction === 'EAST' ? 90 : direction === 'SOUTH' ? 180 : 270}deg)`
        }
        }>
            <img className="robot-img" src="./../../assets/robot.svg" alt="bellroy robot"/>
        </div>
    )
}

export default Robot;

