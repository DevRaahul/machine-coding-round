import { useEffect, useRef, useState } from "react";
import { boxMockData } from "../../constant/constant";

const MemoryBoxGame = () => {
  const [boxData, setBoxData] = useState(boxMockData);
  const orderRef = useRef(0);
  const counterRef = useRef(0);
  const isResetCalled = useRef(false);

  useEffect(() => {
    if (counterRef.current === 0) {
      setDataCount();
    }
  }, []);

  const setDataCount = () => {
    boxMockData.forEach((dt) => {
      if (dt.isVisible) {
        counterRef.current++;
      }
    });
  };

  const reset = () => {
    const cloneData = [...boxData];
    // cloneData.sort((a, b) => b.order - a.order); to reset box in LIFO fashion
    cloneData.sort((a, b) => a.order - b.order); // to reset box in FIFO fashion

    cloneData.forEach((sortedData, i) => {
      if (sortedData.order !== -1) {
        setTimeout(() => {
          setBoxData((prev) => {
            return prev.map((dt) => {
              return dt?.id === sortedData.id ? { ...dt, isClicked: false, order: -1 } : dt;
            });
          });
        }, (i + 1) * 1000);
      }
    });

    orderRef.current = 0;
    isResetCalled.current = false;
  };

  const boxClicked = (id: number) => {
    if (isResetCalled.current) {
      return;
    }
    let cloneData = [...boxData];
    orderRef.current++;
    cloneData[id].order = cloneData[id].isClicked ? orderRef.current - 1 : orderRef.current;
    cloneData[id].isClicked = !cloneData[id].isClicked;
    setBoxData(cloneData);

    if (orderRef.current === counterRef.current) {
      isResetCalled.current = true;
      reset();
    }
  };

  return (
    <>
      <div className="h-[90vh]">
        <div className="h-full flex justify-center items-center">
          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            {boxData.map((dt, idx) => {
              return dt?.isVisible ? (
                <div
                  key={dt.id}
                  className={`size-[100px] flex justify-center items-center rounded ${
                    dt?.isClicked ? "bg-stone-600	text-slate-50" : "bg-green-700 text-slate-200	"
                  }`}
                  onClick={() => boxClicked(idx)}
                >
                  {dt.id}
                </div>
              ) : (
                <div key={dt.id}></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoryBoxGame;
