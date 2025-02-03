import { useRef, useState } from "react";
import OtpBox from "./OtpBox";

const OtpContainer = () => {
  const [otp, setOtp] = useState(new Array(6).fill(null));
  const otpBoxRef = useRef<HTMLInputElement[]>([]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    let copy = [...otp];
    copy[idx] = e?.key;
    console.log(e);
    console.log(copy);
    setOtp(copy);
    if (idx < 5) {
      otpBoxRef.current[idx + 1].focus();
    }
  };

  return (
    <>
      <OtpBox otp={otp} handleKeyPress={handleKeyPress} otpBoxRef={otpBoxRef} />
    </>
  );
};

export default OtpContainer;
