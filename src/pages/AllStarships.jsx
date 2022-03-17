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
    <h1>All Starships</h1>
    {starships.length ?
    <div>
      {starships.map((starship) => (
        <div key={starship.index}>
          <Link key={starship.index} state= {{ starship }} to='/starship'>
            {starship.name}
          </Link><br />
        </div>
      ))}
    </div>
    :
    <>
      <h2>Loading Starships...</h2>
    </>}
  </>
  )
}

export default AllStarships