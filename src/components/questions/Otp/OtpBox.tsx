import { useTheme } from "@/context/themeProvider";
import { FC, useState } from "react";

interface IOtp {
  otpFields: number;
}
const OtpBox: FC<IOtp> = ({ otpFields }) => {
  const [otp, setOtp] = useState(new Array(otpFields).fill(null));
  const { theme } = useTheme();

  return (
    <div className="flex gap-5">
      {otp.map((dt, idx) => {
        return (
          <>
            <input
              className={`size-10 border border-black rounded-md flex justify-center items-center ${
                theme === "light" ? "border-black text-black" : "border-white text-black"
              }`}
            >
              {dt}
            </input>
          </>
        );
      })}
    </div>
  );
};

export default OtpBox;
