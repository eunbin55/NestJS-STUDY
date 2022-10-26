import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Login from "./pages/Login";
import Test from "./pages/Test";

function Router(props: any) {
    return (
        <BrowserRouter>
            <Navigation />
            <br/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/board" element={<Board />} />
                <Route path="/login" element={<Login />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;