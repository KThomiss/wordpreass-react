import Layout from "./components/layout/Layout";
import { AuthProvider } from "./context/AuthContext";
import "./styles/styles.css";

function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

export default App;
