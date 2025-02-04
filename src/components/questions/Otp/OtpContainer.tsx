import { useState } from "react";
import OtpBox from "./OtpBox";

const OtpContainer = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleKeyPress = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    let copy = [...otp];
    copy[idx] = e?.target.value;
    setOtp(copy);
  };

  return (
    <>
      <OtpBox otp={otp} handleKeyPress={handleKeyPress} />
    </>
  );
};

export default OtpContainer;
