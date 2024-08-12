import { Routes, Route } from "react-router-dom";

import Login from './components/login/Login'
import WelcomePage from './components/welcomePage/WelcomePage'
import NotFoundPage from './components/notFoundPage/NotFoundPage'
import './App.css'

function App() {


  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
