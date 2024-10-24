
import './Hero.css';
const Hero = () => {
  return (
    <>
      <section className="coments">
        <div className="container">
           <h2>Что меня ждет впереди</h2>
          <div className="wrapper">
           
            <div className="blok">
              <img src="https://abbos29.github.io/dream/img/icon1.png" alt="" />
              <h3>Свободное время</h3>
              <p>Мне нужно свободное время на семью и самое настоящее</p>
            </div>
            <div className="blok">
              <img src="https://abbos29.github.io/dream/img/icon2.png" alt="" />
              <h3>Яркие путешествия</h3>
              <p>Работать откуда угодно - что может быть лучше?</p>
            </div>
            <div className="blok">
              <img src="https://abbos29.github.io/dream/img/icon3.png" alt="" />
              <h3>Создание ценности</h3>
              <p>Нет ничего сильнее, чем жить не просто так, создавая ценность</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
