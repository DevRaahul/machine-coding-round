interface IProgressBar {
  progress: number;
}

const ProgressBar: React.FC<IProgressBar> = ({ progress }) => {
  console.log(progress);
  return (
    <>
      <div className="w-72 h-8 border border-gray-500 rounded-md relative overflow-hidden">
        <div
          className="flex justify-st items-center absolute size-full bg-green-600  text-right"
          style={{ transform: `translateX(${progress - 100}%)` }}
        >
          {`${progress}%`}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
