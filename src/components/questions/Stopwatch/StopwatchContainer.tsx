import { useState } from "react";
import { Button } from "@/components/ui/button";
import { number } from "zod";

interface ITimerState {
  hour: number;
  min: number;
  sec: number;
}
const StopwatchContainer = () => {
  let secTimer: ReturnType<typeof setInterval>;
  let minTimer: ReturnType<typeof setInterval>;
  let hourTimer: ReturnType<typeof setInterval>;

  const [time, setTime] = useState<ITimerState>({
    hour: 0,
    min: 0,
    sec: 0,
  });
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const setTimeHandler = (eve: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = eve.target;

    const regex = /^[0-9]*$/;
    if (!regex.test(value)) {
      return;
    }

    const userInput: number = parseInt(value) || 0;

    let obj = {
      hour: 0,
      min: 0,
      sec: 0,
    };

    setTime((prev) => {
      return {
        ...prev,
        [name]: userInput,
      };
    });

    if (name === "sec" && userInput >= 60) {
      let min = Math.floor(userInput / 60);
      let actualSec = userInput % 60;

      obj.min = min + time.min;
      obj.sec = actualSec;
      setTime({ ...obj });
    }

    if (name === "min" && userInput >= 60) {
      let hour = Math.floor(userInput / 60);
      let min = userInput % 60;

      obj.hour = hour + time.hour;
      obj.min = min;
      setTime({ ...obj });
    }
  };

  const secTimerFun = (): void => {
    secTimer = setInterval(() => {
      setTime((prev) => {
        if (prev.sec === 0) {
          clearInterval(secTimer);
        }
        return {
          ...prev,
          ["sec"]: prev.sec - 1,
        };
      });
    }, 1000);
  };

  const minTimerFun = (): void => {
    minTimer = setInterval(() => {
      setTime((prev) => {
        if (prev.min === 1) {
          setTime((prev) => {
            return {
              ...prev,
              min: 0,
              sec: 59,
            };
          });
          secTimerFun();
          clearInterval(minTimer);
        }
        return {
          ...prev,
          ["min"]: prev.min - 1,
        };
      });
    }, 1000 * 60);
  };

  const hourTimerFun = (): void => {
    hourTimer = setInterval(() => {
      setTime((prev) => {
        if (prev.hour === 1) clearInterval(hourTimer);
        return {
          ...prev,
          ["hour"]: prev.min - 1,
        };
      });
    }, 1000 * 60 * 60);
  };

  const startHandler = (): void => {
    if (isStarted) {
      setIsStarted(false);
      resetHandler();
    }

    for (let [, value] of Object.entries(time)) {
      if (value > 0) {
        setIsStarted(true);
        if (time.sec > 0) {
          secTimerFun();
        }

        if (time.min > 0) {
          minTimerFun();
        }

        if (time.hour > 0) {
          hourTimerFun();
        }
        break;
      }
    }
  };

  const resetHandler = (): void => {
    secTimer && clearInterval(secTimer);
    minTimer && clearInterval(minTimer);
    hourTimer && clearInterval(hourTimer);

    setIsStarted(false);
    setTime({
      hour: 0,
      min: 0,
      sec: 0,
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
        pattern="[0-9]*"
      />{" "}
      :
      <input
        className="text-center p-4 h-16 w-16 m-4 text-black border border-black rounded-sm"
        type="text"
        placeholder="MM"
        name="min"
        value={time.min}
        onChange={setTimeHandler}
        pattern="[0-9]*"
      />{" "}
      :
      <input
        className="text-center p-4 h-16 w-16 m-4 text-black border border-black rounded-sm"
        type="text"
        placeholder="SS"
        name="sec"
        value={time.sec}
        onChange={setTimeHandler}
        pattern="[0-9]*"
      />
      <div className="flex justify-between">
        <Button onClick={startHandler}>{isStarted ? "Pause" : "Start"}</Button>
        <Button onClick={resetHandler}>Reset</Button>
      </div>
    </div>
  );
};

export default StopwatchContainer;
