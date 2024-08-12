import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Login from "./components/login/Login";
import WelcomePage from "./components/welcomePage/WelcomePage";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.wrapper}>
       <header className={css.header}>
        <Navigation />
      </header>

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
