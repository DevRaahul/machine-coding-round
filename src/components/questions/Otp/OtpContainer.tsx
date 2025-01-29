import { FC, useState } from "react";

interface IOtp {
  otpFields: number;
}
const OtpContainer: FC<IOtp> = ({ otpFields = 6 }) => {
  const [otp, setOtp] = useState(new Array());
  return <div>OtpContainer</div>;
};

export default OtpContainer;
