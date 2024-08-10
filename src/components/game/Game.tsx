import React, { useState, useEffect } from 'react';
import Robot from '../robot/Robot';
import Board from '../board/Board';

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'] as const;
type Direction = typeof directions[number];

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 5),
  y: Math.floor(Math.random() * 5),
});

const Game: React.FC = () => {
  const [position, setPosition] = useState(getRandomPosition());
  const [direction, setDirection] = useState<Direction>('NORTH');

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

  const rotateLeft = () => {
    setDirection((prev) => directions[(directions.indexOf(prev) + 3) % 4]);
  };

  const rotateRight = () => {
    setDirection((prev) => directions[(directions.indexOf(prev) + 1) % 4]);
  };

  const reset = () => {
    setPosition(getRandomPosition());
    setDirection('NORTH');
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        moveForward();
        break;
      case 'ArrowLeft':
        rotateLeft();
        break;
      case 'ArrowRight':
        rotateRight();
        break;
      case 'r':
        reset();
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
        <button onClick={moveForward}>Move Forward (↑)</button>
        <button onClick={rotateLeft}>Rotate Left (←)</button>
        <button onClick={rotateRight}>Rotate Right (→)</button>
        <button onClick={reset}>Reset (R)</button>
      </div>
    </div>
  );
};

export default Game;
