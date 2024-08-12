import React, { useState, useEffect } from 'react';
import Robot from '../robot/Robot';
import Board from '../board/Board';

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'] as const;
type Direction = typeof directions[number];

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 5),
  y: Math.floor(Math.random() * 5),
});


const getFinishLine = (startPos: { x: number, y: number }) => {
    let finishPos;
    do {
      finishPos = getRandomPosition();
    } while (finishPos.x === startPos.x && finishPos.y === startPos.y);
    return finishPos;
  };

const Game: React.FC = () => {
  const [position, setPosition] = useState(getRandomPosition());
  const [finishPos, setFinishPos] = useState(getFinishLine(position));
  const [direction, setDirection] = useState<Direction>('EAST');
  const [isFinish, setIsFinish] = useState(false);

  const moveForward = () => {
    setPosition((prev) => {
      const newPos = { ...prev };
      if (direction === 'NORTH' && newPos.y > 0) newPos.y -= 1;
      if (direction === 'EAST' && newPos.x < 4) newPos.x += 1;
      if (direction === 'SOUTH' && newPos.y < 4) newPos.y += 1;
      if (direction === 'WEST' && newPos.x > 0) newPos.x -= 1;
      return newPos;
    });
  };

  const reset = () => {
    setPosition(getRandomPosition());
    setDirection('NORTH');
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Space':
        moveForward();
        break;
      case 'ArrowLeft':
        setDirection("WEST");
        break;
      case 'ArrowRight':
        setDirection("EAST");
        break;
      case 'ArrowUp':
        setDirection("NORTH");
        break;
    case 'ArrowDown':
        setDirection("SOUTH");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Board />
      <Robot x={position.x} y={position.y} direction={direction} />
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setDirection("NORTH")}>↑</button>
        <button onClick={() => setDirection("WEST")}>←</button>
        <button onClick={() => setDirection("EAST")}>→</button>
        <button onClick={() => setDirection("SOUTH")}>↓</button>
        <button onClick={moveForward}>Space</button>
      </div>
    </div>
  );
};

export default Game;
