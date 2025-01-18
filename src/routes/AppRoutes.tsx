import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/common/Home";
import Navbar from "../components/common/Navbar";
import MemoryBoxGame from "../components/questions/MemoryBox/MemoryBoxGame";
import PageNotFound from "../components/common/PageNotFound";
import LoginPage from "../components/common/LoginPage";
import ToastNotification from "../components/questions/ToastNotification/ToastNotificationContainer";
import TicTocContainer from "@/components/questions/TicToc/TicTocContainer";
import FileManagerContainer from "../components/questions/FileManager/FileManagerContainer";
import ProgressBarContainer from "../components/questions/progressBar/ProgressBarContainer";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex items-center justify-center">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sequence_game" element={<MemoryBoxGame />} />
            <Route path="/toast" element={<ToastNotification />} />
            <Route path="/tictoc" element={<TicTocContainer />} />
            <Route path="/progressBar" element={<ProgressBarContainer />} />
            <Route path="/explorer" element={<FileManagerContainer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
