import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main/Main";
import NotFound from "./page/NotFound/NotFound";
import GlobalStyle from "GlobalStyle";
import "./common.scss";
function App() {
  console.log();
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
