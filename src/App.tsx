import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { ThemeProvider } from "./context/themeProvider";

function App() {
  return (
    <>
      <Auth0Provider
        domain="dev-vth3iikuf3r3fh2j.us.auth0.com"
        clientId="GfU1pcWaANJsw2c9jP7xa82EzO1FvvAy"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </Auth0Provider>
    </>
  );
}

export default App;
