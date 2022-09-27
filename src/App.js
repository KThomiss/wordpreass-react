import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashBoardPage";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout></Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
