import css from "./home.module.css"


const Home = () => {

  const PingPong = () => {
    console.log("PingPong")
  }


  return (
    <div className={css.wrapper}>
      <div>Home</div>
      <button className={css.button} onClick={PingPong}>PingPong</button>
      </div>
  )
}

export default Home