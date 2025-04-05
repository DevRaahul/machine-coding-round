import { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";

const StepFormContainer = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      {step === 1 && <FormOne />}
      {step === 2 && <FormTwo />}
    </>
  );
};

export default StepFormContainer;
