import { useDispatch } from "react-redux"; 
import {pingpongtest} from "../../redux/utilites/operation"
import css from "./home.module.css"


const Home = () => {

  const dispatch = useDispatch(); 
  
  const PingPong = () => {
    dispatch(pingpongtest());    
  }


  return (
    <div className={css.wrapper}>
      <div>Home</div>
      <button className={css.button} onClick={PingPong}>PingPong</button>
      </div>
  )
}

export default Home