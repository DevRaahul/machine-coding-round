import { Button } from "@/components/ui/button";
import { FC } from "react";

interface ITimerState {
  hour: number;
  min: number;
  sec: number;
}

interface IStopwatch {
  time: ITimerState;
  setTimeHandler: (eve: React.ChangeEvent<HTMLInputElement>) => void;
  startHandler: () => void;
  resetHandler: () => void;
  isStarted: boolean;
}

const Stopwatch: FC<IStopwatch> = ({ time, setTimeHandler, startHandler, resetHandler, isStarted }) => {
  return (
    <div className="text-center">
      <h2>Timer App</h2>
      <input
        className="text-center p-4 h-16 w-16 m-4 text-black border border-black rounded-sm"
        type="text"
        placeholder="HH"
        name="hour"
        value={time.hour}
        onChange={(e) => setTimeHandler(e)}
        disabled={isStarted}
      />{" "}
      :
      <input
        className="text-center p-4 h-16 w-16 m-4 text-black border border-black rounded-sm"
        type="text"
        placeholder="MM"
        name="min"
        value={time.min}
        onChange={(e) => setTimeHandler(e)}
        disabled={isStarted}
      />{" "}
      :
      <input
        className="text-center p-4 h-16 w-16 m-4 text-black border border-black rounded-sm"
        type="text"
        placeholder="SS"
        name="sec"
        value={time.sec}
        onChange={(e) => setTimeHandler(e)}
        disabled={isStarted}
      />
      <div className="flex justify-between">
        <Button onClick={() => startHandler()}>{isStarted ? "Pause" : "Start"}</Button>
        <Button onClick={() => resetHandler()}>Reset</Button>
      </div>
    </div>
  );
};

export default Stopwatch;
