import { useRef, useState } from "react";
import Tile from "./Tile";
import { Redo, Undo } from "lucide-react";
import { Button } from "@/components/ui/button";

const TicTocContainer = () => {
  const winnerConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [gameState, setGameState] = useState<string[]>(new Array(9).fill(null));
  const [player, setPlayer] = useState<string>("X");
  const [winner, setWinner] = useState<string>("");

  const undoRef = useRef<any>([]);
  const redoRef = useRef<any>([]);

  const checkWinner = (gameData: string[]) => {
    winnerConditions.forEach((condition) => {
      if (
        gameData[condition[0]] === gameData[condition[1]] &&
        gameData[condition[0]] === gameData[condition[2]] &&
        gameState[condition[0]] !== null
      ) {
        setWinner(gameState[condition[0]]);
      } else {
        setWinner("");
      }
    });
  };

  const setData = (idx: number) => {
    if (gameState[idx] !== null || winner !== "") return;
    undoRef.current.push(gameState);

    setPlayer(player === "X" ? "O" : "X");
    const copyData = [...gameState];
    copyData[idx] = player;
    setGameState(copyData);
    checkWinner(copyData);
  };

  const undoHandler = () => {
    setPlayer(player === "X" ? "O" : "X");
    let data = undoRef.current.pop();
    redoRef.current.push(gameState);
    setGameState([...data]);
    checkWinner(data);
  };

  const redoHandler = () => {
    setPlayer(player === "X" ? "O" : "X");
    let data = redoRef.current.pop();
    undoRef.current.push(gameState);
    setGameState([...data]);
    checkWinner(data);
  };

  return (
    <div className="h-[90vh]">
      <div className="h-full flex justify-center items-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-1 size-['500px']">
          {gameState?.map((dt, idx) => (
            <Tile index={idx} text={dt} changeState={setData} />
          ))}
        </div>
        <div>
          <div className="text-center">
            <p>{!winner && `The Player ${player} turn.`}</p>
            <p>{winner && `The winner is Player ${winner}`}</p>
          </div>
          <Button className="m-2" onClick={undoHandler} disabled={undoRef.current.length === 0}>
            Undo
            <Undo />
          </Button>
          <Button className="m-2" onClick={redoHandler} disabled={redoRef.current.length === 0}>
            Redo
            <Redo />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicTocContainer;
