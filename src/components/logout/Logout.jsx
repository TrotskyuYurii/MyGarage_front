import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "./../../redux/slice/mainSlice";

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const LogoutFunction = () => {
        dispatch(logOut( ));
        navigate("/register");
    };




  return (
    <div>
        <button onClick={LogoutFunction}>Logout</button>
    </div>
  )
}

export default Logout