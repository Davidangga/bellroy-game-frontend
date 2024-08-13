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
            top: `${y * 100 + 20}px`,
            left: `${x * 100 + 20}px`
        }
        }>
            <img className="bell-img" src={bellImg} alt="bellroy destination"/>
        </div>
    )
}

export default Bell;

