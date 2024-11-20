import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/common/Home";
import Navbar from "../components/common/Navbar";
import MemoryBoxGame from "../components/questions/MemoryBoxGame";
import PageNotFound from "../components/common/PageNotFound";
import LoginPage from "../components/common/LoginPage";
import ToastNotification from "../components/questions/ToastNotification/ToastNotificationContainer";
import AuthGuard from "./AuthGuard";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <div className="h-screen"> */}
        <Routes>
          <Route path="/" element={<AuthGuard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sequence_game" element={<MemoryBoxGame />} />
          <Route path="/toast" element={<ToastNotification />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
