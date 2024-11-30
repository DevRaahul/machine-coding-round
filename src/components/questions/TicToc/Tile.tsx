import React from "react";

interface ITile {
  text: string | number;
}
const Tile = (props: ITile) => {
  return <div className="size-[200px] bg-slate-700 flex justify-center items-center">{props.text}</div>;
};

export default Tile;
