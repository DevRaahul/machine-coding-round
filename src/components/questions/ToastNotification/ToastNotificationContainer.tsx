import { Button } from "../../ui/button";

const ToastNotificationContainer = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div className="h-full flex justify-around items-center gap-2">
          <div>
            <Button className="mr-1">Success</Button>
            <Button className="mr-1">Info</Button>
            <Button className="mr-1">Error</Button>
            <Button>Warning</Button>
          </div>
          <div>toaster div</div>
        </div>
      </div>
    </>
  );
};

export default ToastNotificationContainer;
