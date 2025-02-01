import { Skeleton } from "../ui/skeleton";

const LoadingScreen = () => {
  return (
    <>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
        <Skeleton className="rounded-lg size-[300px]"></Skeleton>
        <Skeleton className="rounded-lg size-[300px]"></Skeleton>
        <Skeleton className="rounded-lg size-[300px]"></Skeleton>
        <Skeleton className="rounded-lg size-[300px]"></Skeleton>
        <Skeleton className="rounded-lg size-[300px]"></Skeleton>
        <Skeleton className="rounded-lg size-[300px]"></Skeleton>
      </div>
    </>
  );
};

export default LoadingScreen;
