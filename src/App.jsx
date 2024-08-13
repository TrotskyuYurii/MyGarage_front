import { Routes, Route } from "react-router-dom";

import { AnimatedBackground } from 'animated-backgrounds';

import Navigation from "./components/Navigation/Navigation";
import SignUp from "./components/SignUp/SignUp";
import LoginPage from "./components/login/Login";
import WelcomePage from "./components/WelcomePage/WelcomePage";
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
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
