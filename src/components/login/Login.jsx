import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "./../../redux/slice/mainSlice";

import css from './login.module.css'



const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const loginUser = () => {
    dispatch(logIn( ));
    navigate("/home");
  };


  return (
    <div className={css.wrapper}>
      <h1>Login</h1>
      <p>Enter your credentials</p>
      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default LoginPage