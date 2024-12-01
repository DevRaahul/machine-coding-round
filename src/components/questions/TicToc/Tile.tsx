import React from "react";

interface ITile {
  text: string | number;
  changeState: any;
  currentPlayer: string;
  changePlayer: any;
  index: number;
}
const Tile = (props: ITile) => {
  const { text, changeState, index, changePlayer, currentPlayer } = props;

  const changeStateHandler = () => {
    changePlayer(currentPlayer === "X" ? "O" : "X");
    changeState();
  };

  return (
    <div className="size-[150px] bg-slate-700 flex justify-center items-center" onClick={changeStateHandler}>
      {text}
    </div>
  );
};

export default Tile;
