import React, { useState } from "react";
import Tile from "./Tile";

const TicTocContainer = () => {
  const [gameState, setGameState] = useState(new Array(new Array(9).fill(null)));
  return (
    <div className="flex justify-center items-center">
      {gameState?.map((dt, idx) => {
        return <Tile />;
      })}
    </div>
  );
};

export default TicTocContainer;
