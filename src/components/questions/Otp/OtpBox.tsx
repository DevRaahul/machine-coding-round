import { FC, useRef } from "react";
import { useTheme } from "@/context/themeProvider";

interface IOtp {
  otp: number[] | [];
  handleKeyPress: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
}

const OtpBox: FC<IOtp> = ({ otp, handleKeyPress }) => {
  const { theme } = useTheme();
  const otpBoxRef = useRef<HTMLInputElement[]>([]);

  const handleUserEvent = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    if (isNaN(parseInt(e.target.value))) return;
    handleKeyPress(e, idx);
    if (idx < 5) {
      otpBoxRef.current[idx + 1].focus();
    }
  };

  return (
    <div className="flex gap-5">
      {otp.map((dt, idx) => {
        return (
          <>
            <input
              ref={(currentInput: HTMLInputElement) => (otpBoxRef.current[idx] = currentInput)}
              placeholder={`ip-${idx}`}
              key={`ip-${idx + 1}`}
              className={`size-10 border border-black rounded-md text-center ${
                theme === "light" ? "border-black text-black" : "border-white text-black"
              }`}
              value={dt}
              onChange={(e) => handleUserEvent(e, idx)}
              maxLength={1}
            />
          </>
        );
      })}
    </div>
  );
};

export default OtpBox;
