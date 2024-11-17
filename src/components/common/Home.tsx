import { questionList } from "@/constant/questionList";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = (path: string): void => {
    navigate(path);
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {questionList.map((question) => {
        return (
          <>
            <Card className="m-2">
              <CardHeader>
                <CardTitle className="text-center mb-1">{question.name}</CardTitle>
                <CardDescription className="text-center mb-1">{`Tech used: ${question.techStack.join(", ")}`}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{question.description}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => navigateHandler(question.path)}>Open</Button>
              </CardFooter>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Home;
