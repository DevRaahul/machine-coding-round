import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthGuard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("login");
    }
    if (isLoading) {
      navigate("/loading");
    }
  }, []);
  return <Outlet />;
};

export default AuthGuard;
