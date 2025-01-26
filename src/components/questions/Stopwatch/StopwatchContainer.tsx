import { useEffect, useRef, useState } from "react";
import Stopwatch from "./Stopwatch";

interface ITimerState {
  hour: number;
  min: number;
  sec: number;
  [key: string]: number;
}
const StopwatchContainer = () => {
  let timerRef = useRef<ReturnType<typeof setInterval>>();

  const [time, setTime] = useState<ITimerState>({
    hour: 0,
    min: 0,
    sec: 0,
  });
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    if (isStarted) {
      //Start timer
      if (time.sec === 0 && time.min === 0 && time.hour === 0) {
        return;
      }
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          let copyTime = { ...prev };

          copyTime.sec--;
          if (copyTime.sec < 0) {
            copyTime.min--;
            copyTime.sec = 59;
          }
          if (copyTime.min < 0) {
            copyTime.hour--;
            copyTime.min = 59;
          }

          if (copyTime.hour < 0) {
            clearInterval(timerRef.current);
            alert("Timeout completed ...!");
            setIsStarted(!isStarted);
            return { hour: 0, min: 0, sec: 0 };
          }
          return copyTime;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isStarted]);

  const setTimeHandler = (eve: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = eve.target;

    const regex = /^[0-9]*$/;
    if (!regex.test(value)) {
      return;
    }

    const userInput: number = parseInt(value, 10) || 0;

    let timeClone: ITimerState = { ...time };
    timeClone[name] = userInput;

    timeClone.min = timeClone.min + Math.floor(timeClone.sec / 60);
    timeClone.sec = timeClone.sec % 60;

    timeClone.hour = timeClone.hour + Math.floor(timeClone.min / 60);
    timeClone.min = timeClone.min % 60;

    setTime(timeClone);
  };

  const startHandler = (): void => {
    setIsStarted(!isStarted);
  };

  const resetHandler = (): void => {
    timerRef.current && clearInterval(timerRef.current);

    setIsStarted(false);
    setTime({
      hour: 0,
      min: 0,
      sec: 0,
    });
  };

  return <Stopwatch time={time} resetHandler={resetHandler} startHandler={startHandler} setTimeHandler={setTimeHandler} isStarted={isStarted} />;
};

export default StopwatchContainer;
