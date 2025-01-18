import { FC, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);
  return (
    <>
      <div className="h-[90vh]">
        <div className="h-full flex justify-center items-center flex-col">
          {isLoading ? (
            <>
              <LoadingScreen />
            </>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-normal">Login</CardTitle>
                <CardDescription>Enter your email below to login into your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
