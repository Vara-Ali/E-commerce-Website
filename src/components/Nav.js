import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Products from "./Products";
import Jewellary from "./Jewellary";

export default function Nav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="Home" index element={<Home />} />
                    <Route path="Products" element={<Products />} />
                    <Route path="Jewellary" element={<Jewellary />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}