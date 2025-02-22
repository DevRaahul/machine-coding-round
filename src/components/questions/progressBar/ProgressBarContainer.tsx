import { FC } from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarContainer: FC = () => {
  return (
    <>
      <ProgressBar progress={50} />
    </>
  );
};

export default ProgressBarContainer;
