import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
