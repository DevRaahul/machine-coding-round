import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";

const StepFormContainer = () => {
  const [step, setStep] = useState<number>(1);

  const backButton = <Button onClick={() => setStep(step - 1)}>Back</Button>;
  const forwardButton = <Button onClick={() => setStep(step + 1)}>{step === 2 ? "Submit" : "Next"}</Button>;

  return (
    <div>
      <div>
        {step === 1 && <FormOne />}
        {step === 2 && <FormTwo />}
        <>
          {backButton}
          {forwardButton}
        </>
      </div>
    </div>
  );
};

export default StepFormContainer;
