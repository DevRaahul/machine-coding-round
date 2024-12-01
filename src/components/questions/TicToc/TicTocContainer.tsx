import React, { useState } from "react";
import Tile from "./Tile";

const TicTocContainer = () => {
  const [gameState, setGameState] = useState([" ", " ", " "]);
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1">
      {gameState?.map((dt, idx) => {
        return <Tile text={idx} />;
      })}
    </div>
  );
};

export default TicTocContainer;
