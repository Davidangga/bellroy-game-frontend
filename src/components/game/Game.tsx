import React, { useState, useEffect } from "react";
import Board from "../board/Board";
import bellroypng from "../../assets/bellroy.png";
import packagepng from "../../assets/package.svg";
import { useNavigate } from "react-router-dom";
import styles from "./game.module.scss";

const directions = ["NORTH", "EAST", "SOUTH", "WEST"] as const;
type Direction = (typeof directions)[number];

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 5),
  y: Math.floor(Math.random() * 5),
});

const getFinishLine = (startPos: { x: number; y: number }) => {
  let finishPos;
  do {
    finishPos = getRandomPosition();
  } while (finishPos.x === startPos.x && finishPos.y === startPos.y);
  return finishPos;
};

const Game: React.FC = () => {
  const [position, setPosition] = useState(getRandomPosition());
  const [finishPos, setFinishPos] = useState(getFinishLine(position));
  const [direction, setDirection] = useState<Direction>("EAST");
  const [count, setCount] = useState(0);
  const [activeBtn, setActiveBtn] = useState<Direction | null | "Space">(null);
  const navigate = useNavigate();
  const resetPos = () => {
    setPosition(getRandomPosition());
    setFinishPos(getFinishLine(position));
    setDirection("EAST");
  };

  const moveForward = () => {
    setPosition((prev) => {
      const newPos = { ...prev };
      if (direction === "NORTH" && newPos.y > 0) newPos.y -= 1;
      if (direction === "EAST" && newPos.x < 4) newPos.x += 1;
      if (direction === "SOUTH" && newPos.y < 4) newPos.y += 1;
      if (direction === "WEST" && newPos.x > 0) newPos.x -= 1;
      return newPos;
    });
  };

  useEffect(() => {
    if (position.x === finishPos.x && position.y === finishPos.y) {
      console.log("tt");
      resetPos();
      setCount((prev) => (prev += 1));
    }
  }, [position]);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case " ":
        event.preventDefault();
        moveForward();
        setActiveBtn("Space");
        break;
      case "ArrowLeft":
        setDirection("WEST");
        setActiveBtn("WEST");
        break;
      case "ArrowRight":
        setDirection("EAST");
        setActiveBtn("EAST");
        break;
      case "ArrowUp":
        setDirection("NORTH");
        setActiveBtn("NORTH");

        break;
      case "ArrowDown":
        setDirection("SOUTH");
        setActiveBtn("SOUTH");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction, position, finishPos]);

  useEffect(() => {
    if (activeBtn) {
      const timeout = setTimeout(() => setActiveBtn(null), 200);
      return () => clearTimeout(timeout);
    }
  }, [activeBtn]);

  return (
    <div className={styles.gamePage}>
      <nav>
        <img className={styles.homelink} src={bellroypng} alt="bellroy icon" onClick={() => navigate("/")}/>
      </nav>
      <div className={styles.content}>
        <p>
            <span>Hint: </span>Use keyboard or control panel to move Roy, delivered
            as many packages possible.
        </p>

        <Board robotPos={position} bellPos={finishPos} direction={direction} />

        <div className={styles.controlPanel}>
            <p>Game Controls</p>
            <button
            onClick={() => setDirection("NORTH")}
            style={{ backgroundColor: activeBtn === "NORTH" ? "#E89672" : "" }}
            >
            ↑
            </button>
            <button
            onClick={() => setDirection("WEST")}
            style={{ backgroundColor: activeBtn === "WEST" ? "#E89672" : "" }}
            >
            ←
            </button>
            <button
            onClick={() => setDirection("EAST")}
            style={{ backgroundColor: activeBtn === "EAST" ? "#E89672" : "" }}
            >
            →
            </button>
            <button
            onClick={() => setDirection("SOUTH")}
            style={{ backgroundColor: activeBtn === "SOUTH" ? "#E89672" : "" }}
            >
            ↓
            </button>
            <button
            onClick={moveForward}
            style={{ backgroundColor: activeBtn === "Space" ? "#E89672" : "" }}
            >
            Space
            </button>
        </div>
        <div className={styles.count}>
            <img src={packagepng} alt="package"/> Delivered: {count}
        </div>
      </div>
    </div>
  );
};

export default Game;
