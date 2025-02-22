interface IProgressBar {
  progress: number;
}

const ProgressBar: React.FC<IProgressBar> = ({ progress }) => {
  let progressClass = `translate-x-[-${progress}%] `;

  return (
    <>
      <div className="w-72 h-5 border border-gray-500 rounded-md relative overflow-hidden">
        <div className={`absolute size-full bg-green-600  text-right`}>inner div</div>
      </div>
    </>
  );
};

export default ProgressBar;
