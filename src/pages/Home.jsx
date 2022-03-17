import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-image">
      <div>
        <div className="starship-btn-div">
          <Link className="starship-btn" to="/starships">Take me to my Starships!</Link>
        </div>
      </div>
    </div>
  )
}

export default Home