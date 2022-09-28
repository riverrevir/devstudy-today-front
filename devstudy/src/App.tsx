import { Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Login from "./pages/Login/Login";
import CalendarPage from "./pages/Calendar";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import Layout from "./component/common/layouts";
import LandingPage from "./pages/Landing";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
