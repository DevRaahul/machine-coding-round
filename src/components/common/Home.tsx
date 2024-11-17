import { questionList } from "@/constant/questionList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const Home = () => {
  const navigateHandler = (path: string): void => {
    console.log(path);
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {questionList.map((question) => {
        return (
          <>
            <Card className="m-2">
              <CardHeader>
                <CardTitle className="text-center mb-1">{question.name}</CardTitle>
                <CardDescription className="text-center mb-1">{question.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigateHandler(question.path)}>Open</Button>
              </CardContent>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Home;
