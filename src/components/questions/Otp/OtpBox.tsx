import { useTheme } from "@/context/themeProvider";
import React, { FC, useState } from "react";

interface IOtp {
  otpFields: number;
}
const OtpBox: FC<IOtp> = ({ otpFields }) => {
  const [otp, setOtp] = useState(new Array(otpFields).fill(null));
  const { theme } = useTheme();

  const handleKeyPress = (e: React.KeyboardEvent, idx: number) => {
    if (otp[idx] !== null) return;
    console.log(e);
  };

  return (
    <div className="flex gap-5">
      {otp.map((dt, idx) => {
        return (
          <>
            <input
              id={`input-${idx}`}
              key={`input-${idx}`}
              className={`size-10 border border-black rounded-md text-center ${
                theme === "light" ? "border-black text-black" : "border-white text-black"
              }`}
              pattern="[0-9]+"
              value={dt}
              onKeyDown={(e) => handleKeyPress(e, idx)}
              maxLength={1}
            />
          </>
        );
      })}
    </div>
  );
};

export default OtpBox;
