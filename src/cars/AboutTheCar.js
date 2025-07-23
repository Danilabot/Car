import React from 'react'
import { useParams } from 'react-router-dom'
import CarData from '../date/CarsData'
function Gle() {
  const { id } = useParams()
  const car = CarData.find((c) => c.id === parseInt(id))
  if (!car) return <h1>NOT FIND</h1>

  return (
    <div>
      <img src={car.src} alt={car.alt} />
      <h2>{car.text}</h2>
      <h1>{car.price}</h1>
    </div>
  )
}
export default Gle
