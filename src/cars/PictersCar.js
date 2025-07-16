import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './PictersCar.css'
import { useEffect } from 'react'

function PictersCar({ src, alt, text, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="car-item">
      <img src={src} alt="alt" className="thumbnail" onClick={openModal} />
      <p className="car-text">{text}</p>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content-wrapper">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={src} alt={alt} className="modal-content" />
            <Link to={`/car/${id}`}>
              <button>Подробнее</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default PictersCar
