import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import PostPage from "./components/dashboard/posts/PostPage";
import AddPost from "./components/dashboard/posts/AddPost";
import EditPost from "./components/dashboard/posts/EditPost";
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
          <Route path="/dashboard/posts" element={<PostPage />}></Route>
          <Route path="/dashboard/posts/add" element={<AddPost />}></Route>
          <Route path="/dashboard/posts/edit/:id" element={<EditPost />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
