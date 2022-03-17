import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../services/sw-api";

const AllStarships = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starships => setStarships(starships.results))
  })

  return (
    <>
    {starships.length ?
    <div className="allships">
      {starships.map((starship) => (
        <div key={starship.index}  className="starship-card">
          <Link key={starship.index} state= {{ starship }} to='/starship' className="card-link">
            {starship.name}
          </Link><br />
        </div>
      ))}
    </div>
    :
    <div className="loading">
      <h2 className="loading">Loading Starships...</h2><br />
      <img src="https://i.imgur.com/R8bulTO.png" alt="Millennium Falcon" />
    </div>}
  </>
  )
}

export default AllStarships