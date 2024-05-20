import React, { createContext, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import {
  DetailPage,
  MyPage,
  MainPage,
  SavePage,
  OriginalPage,
  WipPage,
} from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useServiceStatus } from "./api";

const queryClient = new QueryClient();
const ServiceStatusContext = createContext(null);

export const useServiceStatusContext = () => useContext(ServiceStatusContext);

export const ServiceStatusProvider = ({ children }: any) => {
  const { data, isLoading, isError } = useServiceStatus();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isError && data?.serviceState === "preparing") {
      navigate("/wip");
    }
  }, [data, isLoading, isError, navigate]);

  if (isLoading) return <div style={{ textAlign: "center" }}>Loading...</div>;
  if (isError) return <div>Error loading service status</div>;

  return (
    <ServiceStatusContext.Provider value={data}>
      {children}
    </ServiceStatusContext.Provider>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router>
          <ServiceStatusProvider>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/:id" element={<DetailPage />} />
              <Route path="/mypage/:id/save" element={<SavePage />} />
              <Route path="/mypage/:id/original" element={<OriginalPage />} />
              <Route path="/wip" element={<WipPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ServiceStatusProvider>
        </Router>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
