import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BoardDetail } from "./components/BoardDetail";
import Navigation from "./components/Navigation";
import Board from "./pages/Board";
import { BoardCreate } from "./pages/BoardCreate";
import { BoardUpdate } from "./pages/BoardUpdate";
import Login from "./pages/Login";
// import Test from "./pages/Test";

function Router(props) {
  return (
    <BrowserRouter>
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:boardNum" element={<BoardDetail />} />
        <Route path="/boardCreate" element={<BoardCreate />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/detail/:boardNum/update" element={<BoardUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
