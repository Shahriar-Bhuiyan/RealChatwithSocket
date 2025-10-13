import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useState } from "react";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// import { LayoutLoaders } from "./components/layout/Loaders";





const Home = lazy(() => import("./pages/Home"));

const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;

function App() {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<LayoutLoaders/>}> */}
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          <Route
            path="/login"
            element={
              <ProtectedRoute user={!user} redirect="/">
                <Login />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
