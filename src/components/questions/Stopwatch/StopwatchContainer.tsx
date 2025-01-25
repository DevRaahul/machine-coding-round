import { useState } from "react";
import { Button } from "@/components/ui/button";
import { number } from "zod";

interface ITimerState {
  hour: number;
  min: number;
  sec: number;
}
const StopwatchContainer = () => {
  const [time, setTime] = useState<ITimerState>({
    hour: 0,
    min: 0,
    sec: 0,
  });

  const setTimeHandler = (eve: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = eve.target;
    let obj = {
      hour: 0,
      min: 0,
      sec: 0,
    };

    if (name === "sec" && parseInt(value) >= 60) {
      let seconds = parseInt(value);
      let min = Math.floor(seconds / 60);
      let actualSec = seconds % 60;

      obj["min"] = min;
      obj["sec"] = actualSec;

      setTime((prev) => {
        return {
          ...prev,
          ...obj,
        };
      });
    }

    if (name === "min") {
    }
    if (name === "hour") {
    }

    setTime((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="text-center">
      <h2>Timer App</h2>
      <input
        className="text-center p-4 h-16 w-16 m-4 text-black border border-black rounded-sm"
        type="text"
        placeholder="HH"
        name="hour"
        value={time.hour}
        onChange={setTimeHandler}
      />{" "}
      :
      <input
        className="text-center p-4 h-16 w-16 m-4 text-black border border-black rounded-sm"
        type="text"
        placeholder="MM"
        name="min"
        value={time.min}
        onChange={setTimeHandler}
      />{" "}
      :
      <input
        className="text-center p-4 h-16 w-16 m-4 text-black border border-black rounded-sm"
        type="text"
        placeholder="SS"
        name="sec"
        value={time.sec}
        onChange={setTimeHandler}
      />
      <div className="flex justify-between">
        <Button>Pause</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
};

export default StopwatchContainer;
