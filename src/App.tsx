import "./App.css";
import AppRoutes from "./AppRoutes";
import { ThemeProvider } from "./context/themeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
