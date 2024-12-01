interface ITile {
  text: string | number;
  changeState: any;
  index: number;
}
const Tile = (props: ITile) => {
  const { text, changeState, index } = props;

  const changeStateHandler = () => {
    changeState(index);
  };

  return (
    <div className="size-[150px] bg-slate-500 flex justify-center items-center rounded " onClick={changeStateHandler}>
      {text}
    </div>
  );
};

export default Tile;
