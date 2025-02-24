import { FC, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarContainer: FC = () => {
  const [loadTime, setTime] = useState<number>(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setTime((prev) => (prev <= 99 ? prev + 1 : 100));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <ProgressBar progress={loadTime} />
    </>
  );
};

export default ProgressBarContainer;
