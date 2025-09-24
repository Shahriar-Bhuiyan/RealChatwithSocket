import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const Home = lazy(() => import("./pages/Home"));

const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/chat"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
