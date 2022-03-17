import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getStarshipDetails } from "../services/sw-api"


const Starship = () => {
  const [starshipDetails, setStarshipDetails] = useState([])
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
      .then(starshipDetails => setStarshipDetails(starshipDetails))
  })

  return (
    <div>
      <h5>Name: {starshipDetails.name}</h5>
      <h5>Model: {starshipDetails.model}</h5>
      <h5>Manufacturer: {starshipDetails.manufacturer}</h5>
    </div>
  )
}

export default Starship