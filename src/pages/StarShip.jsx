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
    <div className="detail-card">
      <h5 className="prop">Name: {starshipDetails.name}</h5>
      <h5 className="prop">Model: {starshipDetails.model}</h5>
      <h5 className="prop">Manufacturer: {starshipDetails.manufacturer}</h5>
    </div>
  )
}

export default Starship