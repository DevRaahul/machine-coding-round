import { Button } from "../../ui/button";

const ToastNotificationContainer = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div className="h-full flex justify-center items-center gap-2">
          <Button variant={"outline"}>Success</Button>
          <Button variant={"outline"}>Info</Button>
          <Button variant={"outline"}>Error</Button>
          <Button variant={"outline"}>Warning</Button>
        </div>
      </div>
    </>
  );
};

export default ToastNotificationContainer;
