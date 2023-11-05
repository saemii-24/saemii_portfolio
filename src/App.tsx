import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main/Main";
import Sub from "page/Sub/Sub";
import NotFound from "./page/NotFound/NotFound";
import GlobalStyle from "GlobalStyle";
import "./common.scss";
import ScrollToTop from "./ScrollToTop";

function App() {
  console.log();
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project/:id" element={<Sub />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
