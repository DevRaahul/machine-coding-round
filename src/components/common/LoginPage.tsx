import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Form } from "../ui/form";

const LoginPage = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div className="h-full flex justify-center items-center flex-col">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your email below to login into your account.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <Form>

            </Form> */}
              <Input placeholder="Username or email" />
              <Input placeholder="Username or email" />
            </CardContent>
            <CardFooter>
              <Button className="w-full">Login</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
