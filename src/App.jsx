import { useMemo } from 'react';

const services = [
  {
    title: 'Охрана и сопровождение',
    description: 'Обеспечение безопасности персон, объектов и перевозок в условиях повышенного риска.',
  },
  {
    title: 'Разведка и аналитика',
    description: 'Сбор и проверка данных для своевременной оценки угроз и выработки решений.',
  },
  {
    title: 'Подготовка команд',
    description: 'Практическое обучение персонала тактике, выживанию и кризисному реагированию.',
  },
  {
    title: 'Техническая поддержка',
    description: 'Оснащение миссий оборудованием связи, наблюдения и мобильной инфраструктурой.',
  },
];

export default function App() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
    window.alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <>
      <header>
        <div className="container header-content">
          <div className="logo-container">
            <img
              src="https://storage.imgbly.com/imgbly/GkfTwhjVa4.png"
              alt="Логотип Autumn Arms"
              className="logo-img"
            />
            <div className="logo">AUTUMN ARMS</div>
          </div>
          <nav aria-label="Основная навигация">
            <ul>
              <li><a href="#home">Главная</a></li>
              <li><a href="#about">О компании</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <h1>AUTUMN ARMS</h1>
          <p>Точность. Надёжность. Безопасность.</p>
          <a href="#contact" className="btn">Связаться с нами</a>
        </section>

        <section className="about" id="about">
          <div className="container">
            <h2 className="section-title">О нас</h2>
            <div className="about-content">
              <div className="about-text">
                <h3>Кто мы</h3>
                <p>
                  Autumn Arms — команда специалистов по безопасности и сопровождению,
                  ориентированная на защиту людей, процессов и инфраструктуры.
                </p>
                <p>
                  Мы сочетаем опыт полевой работы, современные технологии и чёткие регламенты,
                  чтобы снижать риски и обеспечивать стабильность в сложных условиях.
                </p>
              </div>
              <div className="about-image" role="img" aria-label="Команда Autumn Arms на выездной задаче" />
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <h2 className="section-title">Наши услуги</h2>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <h2 className="section-title">Контакты</h2>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Ваше имя</label>
                  <input id="name" type="text" placeholder="Введите имя" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Ваш email</label>
                  <input id="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Сообщение</label>
                  <textarea id="message" rows="5" placeholder="Опишите ваш запрос" required />
                </div>
                <button type="submit" className="btn">Отправить</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <p>© {currentYear} Autumn Arms. Все права защищены.</p>
          <p>Точность. Надёжность. Безопасность.</p>
        </div>
      </footer>
    </>
  );
}
