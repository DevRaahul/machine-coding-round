import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/common/Home";
import Navbar from "./components/common/Navbar";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
