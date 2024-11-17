import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/common/Home";
import Navbar from "./components/common/Navbar";
import MemoryBoxGame from "./components/questions/MemoryBoxGame";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className=" flex justify-center items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sequence_game" element={<MemoryBoxGame />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
