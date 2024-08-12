import React from "react";
import bellImg from "../../assets/bell.svg";
interface BellProps {
    x: number;
    y: number;
}

const Bell: React.FC<BellProps> = ({x, y}) => {
    return (
        <div className="robot" style={{
            position: 'absolute',
            height: '50px',
            top: `${y * 100 + 50}px`,
            left: `${x * 100}px`
        }
        }>
            <img className="bell-img" src={bellImg} alt="bellroy destination"/>
        </div>
    )
}

export default Bell;

