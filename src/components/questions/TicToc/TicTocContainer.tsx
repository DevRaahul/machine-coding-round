import React, { useState } from "react";
import Tile from "./Tile";

const TicTocContainer = () => {
  const [gameState, setGameState] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  return (
    <div className="h-[90vh]">
      <div className="h-full flex justify-center items-center">
        <div className="grid grid-cols-3 pagrid-rows-3 gap-1 size-['500px']">
          {gameState?.map((dt, idx) => (
            <Tile index={idx} text={dt} changeState={setGameState} currentPlayer={player} changePlayer={setPlayer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicTocContainer;
