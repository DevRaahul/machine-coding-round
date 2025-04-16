import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/common/Home";
import Navbar from "../components/common/Navbar";

const MemoryBoxGame = React.lazy(() => import("../components/questions/MemoryBox/MemoryBoxGame"));
const PageNotFound = React.lazy(() => import("../components/common/PageNotFound"));
const LoginPage = React.lazy(() => import("../components/common/LoginPage"));
const ToastNotification = React.lazy(() => import("../components/questions/ToastNotification/ToastNotificationContainer"));
const TicTocContainer = React.lazy(() => import("../components/questions/TicToc/TicTocContainer"));
const FileManagerContainer = React.lazy(() => import("../components/questions/FileManager/FileManagerContainer"));
const ProgressBarContainer = React.lazy(() => import("../components/questions/progressBar/ProgressBarContainer"));
const StopwatchContainer = React.lazy(() => import("../components/questions/Stopwatch/StopwatchContainer"));
const OtpContainer = React.lazy(() => import("../components/questions/Otp/OtpContainer"));
const SearchBoxContainer = React.lazy(() => import("../components/questions/SearchBox/SearchBoxContainer"));
const FileExplorerContainer = React.lazy(() => import("../components/questions/FileExplorer/FileExplorerContainer"));

const AppRoutes: FC = () => {
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
            <Route path="/fileManager" element={<FileExplorerContainer />} />
            <Route path="/stopwatch" element={<StopwatchContainer />} />
            <Route path="/otp" element={<OtpContainer />} />
            <Route path="/search" element={<SearchBoxContainer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
