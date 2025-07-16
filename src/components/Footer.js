function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3>Выбор и покупка</h3>
          <a href="#">Модельный ряд</a>
          <a href="#">Тест-драйв</a>
          <a href="#">Автомобили с пробегом</a>
          <a href="#">Mercedes Premium Selection</a>
          <a href="#">Финансовые сервисы</a>
          <a href="#">Корпоративные продажи</a>
        </div>
        <div style={styles.column}>
          <h3>Сервис и аксессуары</h3>
          <a href="#">Запись на сервис</a>
          <a href="#">Магазин Аксессуаров</a>
          <a href="#">Программа помощи на дорогах</a>
          <a href="#">Lifestyle</a>
        </div>
        <div style={styles.column}>
          <h3>Компания</h3>
          <a href="#">Контакты</a>
          <a href="#">Обратная связь</a>
          <a href="#">FAQ</a>
          <a href="#">Дилерская сеть</a>
          <a href="#">Стать партнером</a>
        </div>
        <div style={styles.column}>
          <h3>Группа Mercedes</h3>
          <a href="#">Mercedes.com</a>
          <a href="#">Mercedes Driving Experience</a>
          <a href="#">Mercedes Motorrad</a>
          <a href="#">MINI</a>
          <a href="#">Brand Experience Centre</a>
          <a href="#">Mercedes Excellence Club</a>
        </div>
      </div>
      <div style={styles.bottom}>
        <span>© Mercedes AG 2025</span>
        <div>
          <a href="#">Контакты</a>
          <a href="#">Copyright</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#f8f8f8',
    padding: '40px 60px',
    fontSize: '14px',
    color: '#333',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    minWidth: '200px',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '40px',
    borderTop: '1px solid #ccc',
    paddingTop: '20px',
  },
}

export default Footer
