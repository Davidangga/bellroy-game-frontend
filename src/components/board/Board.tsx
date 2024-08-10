import React from 'react';

const Grid: React.FC = () => {
  const gridSize = 5;
  const grid = Array(gridSize).fill(Array(gridSize).fill(null));

  return (
    <div style={{
      position: 'relative',
      width: `${gridSize * 100}px`,
      height: `${gridSize * 100}px`,
      border: '1px solid black',
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 100px)`,
      gridTemplateRows: `repeat(${gridSize}, 100px)`,
    }}>
      {grid.map((row, rowIndex) => (
        row.map((_, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} style={{ border: '1px solid gray' }} />
        ))
      ))}
    </div>
  );
};

export default Grid;
