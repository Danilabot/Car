import React from 'react'
import PictersCar from '../cars/PictersCar'
import './Cars.css'
import CarData from '../date/CarsData'
import { useEffect } from 'react'
function Cars() {
  useEffect(() => {
    document.body.classList.add('backgraund')
    return () => {
      document.body.classList.remove('backgraund')
    }
  }, [])
  const images = [
    { id: '1', src: '/one.png', alt: '1', text: ' GLE Coupe' },
    { id: '2', src: '/two.png', alt: '2', text: 'GT R' },
    { src: '/3.png', alt: '3', text: 'G-Class (Gelandewagen)' },
    { src: '/4.png', alt: '4', text: 'E-Class Coupe' },
    { src: '/5.png', alt: '5', text: 'GLS' },
    { src: '/6.png', alt: '6', text: 'V-Class' },
    { src: '/7.png', alt: '7', text: 'GLS (X253)' },
    { src: '/8.png', alt: '8', text: 'E-Class Sedan' },
    { src: '/9.png', alt: '9', text: 'SLS AMG' },
    { src: '/10.png', alt: '10', text: 'S-Class' },
    { src: '/11.png', alt: '11', text: 'GLB' },
    { src: '/12.png', alt: '12', text: 'A-CLass Sedan' },
  ]

  return (
    <div className="car-grid">
      {images.map((img) => (
        <PictersCar
          key={img.id}
          id={img.id}
          src={img.src}
          alt={img.alt}
          text={img.text}
        />
      ))}
    </div>
  )
}
export default Cars
