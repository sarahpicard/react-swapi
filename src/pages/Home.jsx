import image from "../starship.jpeg"

const Home = () => {
  return (
    <div className="background" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>

    </div>
  )
}

export default Home