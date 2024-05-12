import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { DetailPage, MyPage, MainPage, SavePage, OriginalPage } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CustomFooter } from "./components";
import styled from "styled-components";
const queryClient = new QueryClient();
function Content() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/:id" element={<DetailPage />} />
      <Route path="/mypage/:id/save" element={<SavePage />} />
      <Route path="/mypage/:id/original" element={<OriginalPage />} />
    </Routes>
  );
}
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router>
          <Content />
        </Router>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
