import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CalendarPage, LandingPage } from "./pages";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path=":year">
          <Route path=":month" element={<CalendarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
