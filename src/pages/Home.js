import React from 'react'
import './Home.css'
function Home() {
  const cars = [
    { id: 1, name: 'Запись на сервис', image: 'icona1.png' },

    { id: 2, name: 'Автомобили с пробегом', image: 'icona2.png' },
    { id: 3, name: 'Дилер ', image: 'icona3.png' },
  ]
  return (
    <div className="content">
      <div className="home-page">
        <div className="container">
          <h2 className="home-title">ВСЕ МЕНЯЕТСЯ. ЦЕННОСТИ ОСТАЮТСЯ.</h2>
          <div id="myModal" class="modalDany">
            <div id="caption"></div>
          </div>
        </div>
      </div>
      <p>ВАШ Mersedes</p>
      <h1> ВЫБЕРИТЕ ДЛЯ СЕБЯ</h1>
      <div className="catalog-car">
        {cars.map((car) => (
          <div key={car.id} className="catalog-item">
            <img src={car.image} />
            <h1>{car.name}</h1>
            <button style={{ cursor: 'pointer' }}>Подробнее</button>
          </div>
        ))}
      </div>
      <div className="full">
        <div className="text-probeg">
          <p>Автомобили с пробегом</p>
          <h1>Mersedes с пробегом в наличии</h1>
          <button
            style={{
              color: ' rgba(255, 255, 255, 0.86)',
              fontSize: '25px',
              background: 'none',
              border: '7px solid rgba(189, 189, 189, 0.91)',
              cursor: 'pointer',
            }}
          >
            Узнать больше
          </button>
        </div>
      </div>
      <div className="solon">
        <img src="solon.jpg" height={'500px'} />
        <div style={{ textAlign: 'left', marginLeft: '30px' }}>
          <p>магазин аксессуаров Mersedes</p>
          <h1>Открой для себя мир Аксессуаров Mersedes</h1>
          <p>
            Оригинальные аксессуары для вашей семьи и вашего автомобиля
            Mercedes.
          </p>
          <button
            style={{
              height: '50px',
              width: '350px',

              cursor: 'pointer',
            }}
          >
            Перейти в магазин
          </button>
        </div>
      </div>
    </div>
  )
}
export default Home
