import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { number } from "zod";

interface ITimerState {
  hour: number;
  min: number;
  sec: number;
}
const StopwatchContainer = () => {
  let secTimer = useRef<ReturnType<typeof setInterval>>();
  let minTimer = useRef<ReturnType<typeof setInterval>>();
  let hourTimer = useRef<ReturnType<typeof setInterval>>();

  const [time, setTime] = useState<ITimerState>({
    hour: 0,
    min: 0,
    sec: 0,
  });
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const convertMin = (userInput: number, obj: ITimerState): void => {
    let hour = Math.floor(userInput / 60);
    let min = userInput % 60;

    obj.hour = hour + time.hour;
    obj.min = min;
    setTime({ ...obj });
  };

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

      if (obj.min > 60) {
        convertMin(userInput, obj);
      }

      setTime({ ...obj });
    }

    if (name === "min" && userInput >= 60) {
      convertMin(userInput, obj);
    }
  };

  const secTimerFun = (): void => {
    secTimer.current = setInterval(() => {
      if (time.sec === 0) {
        clearInterval(secTimer.current);
        return;
      }
      setTime((prev) => {
        return {
          ...prev,
          ["sec"]: prev.sec - 1,
        };
      });
    }, 1000);
  };

  const minTimerFun = (): void => {
    minTimer.current = setInterval(() => {
      if (time.min === 0) {
        setTime((prev) => {
          return {
            ...prev,
            min: 0,
            sec: 59,
          };
        });
        clearInterval(minTimer.current);
        return;
      }
      setTime((prev) => {
        return {
          ...prev,
          ["min"]: prev.min - 1,
        };
      });
    }, 1000 * 3);
  };

  const hourTimerFun = (): void => {
    hourTimer.current = setInterval(() => {
      if (time.hour === 0) {
        setTime((prev) => {
          return {
            ...prev,
            min: 0,
            sec: 59,
          };
        });
        clearInterval(hourTimer.current);
      }
      setTime((prev) => {
        return {
          ...prev,
          ["hour"]: prev.hour - 1,
        };
      });
    }, 1000 * 2 * 2);
  };

  const startHandler = (): void => {
    if (isStarted) {
      setIsStarted(false);
      resetHandler();
    }
    const { sec, hour, min } = time;
    if (sec > 0) {
      secTimerFun();
    }

    if (min > 0) {
      minTimerFun();
    }

    if (hour > 0) {
      hourTimerFun();
    }
  };

  const resetHandler = (): void => {
    secTimer.current && clearInterval(secTimer.current);
    minTimer.current && clearInterval(minTimer.current);
    hourTimer.current && clearInterval(hourTimer.current);

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
