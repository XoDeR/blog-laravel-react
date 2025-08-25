import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ArticlesPage from "./pages/ArticlesPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<ArticlesPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
