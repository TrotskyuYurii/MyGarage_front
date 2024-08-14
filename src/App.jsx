import { Routes, Route } from "react-router-dom";

import { AnimatedBackground } from 'animated-backgrounds';

import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import LoginPage from "./components/login/Login";
import LogoutPage from "./components/logout/Logout";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Home from "./components/Home/Home.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.wrapper}>
      <AnimatedBackground animationName="cosmicDust" />
      
       <header className={css.header}>
        <Navigation />
      </header>


      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
