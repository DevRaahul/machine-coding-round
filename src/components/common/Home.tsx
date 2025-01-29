import { useTransition } from "react";
import { questionList } from "@/constant/questionList";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button, buttonVariants } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Github } from "lucide-react";

const Home = () => {
  const [isPending, startTransition] = useTransition();

  const navigate = useNavigate();

  const navigateHandler = (path: string): void => {
    startTransition(() => {
      navigate(path);
    });
  };

  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-3 mx-24">
      {questionList.map((question) => {
        return (
          <>
            <Card key={question.id} className="m-2">
              <CardHeader>
                <CardTitle className="text-center mb-1">{question.name}</CardTitle>
                <CardDescription className="text-center mb-1">{`Tech used: ${question.techStack.join(", ")}`}</CardDescription>
              </CardHeader>
              <CardContent className="h-28 overflow-y-auto mb-1">
                <p>{question.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex gap-8">
                  <Button onClick={() => navigateHandler(question.path)}>Open</Button>
                  <Link className={buttonVariants({ variant: "outline" })} to={question.codeUrl} target="_blank">
                    <Github /> GitHub Repo
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Home;
