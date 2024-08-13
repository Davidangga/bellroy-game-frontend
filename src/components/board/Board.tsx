import React from 'react';
import Robot from '../robot/Robot';
import Bell from '../bell/Bell';

interface BoardProps {
    robotPos : {
        x: number;
        y: number;
    };
    bellPos : {
        x: number;
        y: number;
    };
    direction : string;

}

const Grid: React.FC<BoardProps> = ({robotPos, bellPos, direction}) => {
  const gridSize = 5;
  const grid : null[][] = Array(gridSize).fill(Array(gridSize).fill(null));

  return (
    <div style={{
        position: 'relative',
    display: 'grid',
      width: `${gridSize * 100}px`,
      height: `${gridSize * 100}px`,
      gridTemplateColumns: `repeat(${gridSize}, 100px)`,
      gridTemplateRows: `repeat(${gridSize}, 100px)`,
    }}>
      {grid.map((row, rowIndex) => (
        row.map((_, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} style={{ border: '2px solid black', borderRadius: "15px", margin: "2px"}} />
        ))
      ))}
      <Robot x={robotPos.x} y={robotPos.y} direction={direction} />
      <Bell x={bellPos.x} y={bellPos.y} />
    </div>
  );
};

export default Grid;
