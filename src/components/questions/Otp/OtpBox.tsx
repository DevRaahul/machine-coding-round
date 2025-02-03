import { FC, useRef } from "react";
import { useTheme } from "@/context/themeProvider";

interface IOtp {
  otp: number[] | [];
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => void;
  otpBoxRef: React.RefObject<HTMLInputElement[]>;
}

const OtpBox: FC<IOtp> = ({ otp, handleKeyPress, otpBoxRef }) => {
  const { theme } = useTheme();

  const handleUserEvent = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (isNaN(parseInt(e.key))) return;
    handleKeyPress(e, idx);
  };

  return (
    <div className="flex gap-5">
      {otp.map((dt, idx) => {
        return (
          <>
            <input
              ref={(currentInput: HTMLInputElement) => (otpBoxRef.current[idx] = currentInput)}
              key={`input-${idx}`}
              className={`size-10 border border-black rounded-md text-center ${
                theme === "light" ? "border-black text-black" : "border-white text-black"
              }`}
              value={dt}
              onKeyDown={(e) => handleUserEvent(e, idx)}
              maxLength={1}
            />
          </>
        );
      })}
    </div>
  );
};

export default OtpBox;
