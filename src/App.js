import muscleImage from './images/muscle.png';
import meditationImage from './images/meditation.png';
import cardioImage from './images/cardio.png';
import nutritionImage from './images/nutrition.png';
import runningGirlImage from './images/running-girl.png';
import jumpingGirlImage from './images/jump-girl.png';
import jasonImage from './images/jason.png';
import monicaImage from './images/monica.png';
import jhonsonImage from './images/jhonson.png';
import girlWithChildImage from './images/girl-with-child.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__bar">
          <p className="header__logo"></p>
          <div className="header__nav">
            <p className="header__home">Home</p>
            <p className="header__training">Training</p>
            <p className="header__contact">Contact</p>
          </div>
          <p className="header__button"></p>
        </div>

        <div className="header__content">
          <p className="header__heading">Fitness Club</p>
          <h1 className="header__title">Sweat, Smile And Repeat</h1>
          <p className="header__description">A gym is a club, building, or large room, usually 
          containing special equipment, 
          where people go to</p>
          <div className="header__submit-buttons">
            <button className="header__join-button">Join now</button>
            <button className="header__info-button">Know more</button>
          </div>
          <div className="header__background"></div>
          <button className="header__play-button">
            <p className="header__triangle">▲</p>
          </button>
        </div>
      </header>

      <section className="services">
        <p className="services__heading">Our Services</p>
        <h1 className="services__title">Awesome Packages That
         We Offer For Our Clients</h1>
          <ul className="services__table">
            <li className="services__back">
              <img src={meditationImage} alt="Meditation" className="services__image"/>
              <h3 className="table__title">Meditation Programme</h3>
            </li>
            <li className="services__back">
              <img src={muscleImage} alt="Muscle building" className="services__image" />
              <h3 className="table__title">Muscle Building</h3>
            </li>
            <li className="services__back">
              <img src={cardioImage} alt="Cardio" className="services__image" />
              <h3 className="table__title">Cardio Programme</h3>
            </li>
            <li className="services__back">
              <img src={nutritionImage} alt="Nutrition" className="services__image" />
              <h3 className="table__title">Nutrition Supports</h3>
            </li>
          </ul>
      </section>

      <section className="health">
        <img src={runningGirlImage} alt="бегущая девушка" className="health__image"/>
        <div className="health__wrapper">
          <p className="health__heading">Health Benefits</p>
          <h1 className="health__title">Physical Exercise Gives
          Your Body The Wings</h1>
          <p className="health__description">Physical activity and 
          exercise can have immediate and long-term health benefits. 
          Most importantly, regular activity can improve your quality of life.
          Exercise can improve your health and reduce the risk of </p>
          <button className="health__button">Learn more</button>
        </div>
      </section>

      <section className="moods">
        <div className="moods__wrapper">
          <p className="moods__heading">Improve Moods</p>
          <h1 className="moods__title">Makes You More Active 
          And Improve Moods</h1>
          <p className="moods__description">Physical activity and 
          exercise can have immediate and long-term health benefits. 
          Most importantly, regular activity can improve your quality of life.
          Exercise can improve your health and reduce the risk of </p>
          <button className="moods__button">Learn more</button>
        </div>
        <img src={jumpingGirlImage} alt="бегущая девушка" className="moods__image"/>
      </section>

      <section className="instructors">
      <p className="instructors__heading">Our Instructors</p>
        <h2 className="instructors__title">Meet Our Extreamly 
        Talented Trainers</h2>
          <ul className="instructors__table">
            <li className="instructors__back">
              <img src={jasonImage} alt="Jason Holder" className="instructors__image"/>
              <h3 className="instructors__table_title">Jason Holder</h3>
              <p className="instructors__table_subtitle">Cardio Expert</p>
            </li>
            <li className="instructors__back">
              <img src={monicaImage} alt="Monica Sellesa" className="instructors__image" />
              <h3 className="instructors__table_title">Monica Sellesa</h3>
              <p className="instructors__table_subtitle">Nutrition Expert</p>
            </li>
            <li className="instructors__back">
              <img src={jhonsonImage} alt="Jhonson Russoe" className="instructors__image" />
              <h3 className="instructors__table_title">Jhonson Russoe</h3>
              <p className="instructors__table_subtitle">Meditation Expert</p>
            </li>
            <p className="instructors__arrow arrow"></p>
          </ul>
      </section>

      <section className="about">
        <img src={girlWithChildImage} alt="girl with child" />
        <div className="about__wrapper">
          <h3 className="about__heading">Testimonial</h3>
          <p className="about__title">That’s What Our 
          Super Client Says</p>

          <div className="about__feedback">
          <p className="about__text">“Gale is an amazing trainer as well as a great person. 
          She is so flexible when it comes to my crazy work schedule and makes sure to always fit me in. 
          Every day she pushes me harder towards my goals.”
          </p>
          <p className="about__name">Jessica Parker</p>
          <div className="about__wrap">
            <p className="about__from">Mariland, USA</p>
            <p className="about__arrow arrow"></p>
          </div>
        </div>
        </div>
      </section>

      <section className="subscribe">
        <h2 className="subscribe__title">Subscribe Our Fitness Articles</h2>
        <p className="subscribe__description">Physical activity is defined
        as any bodily movement produced by skeletal muscles 
        that results in energy expenditure</p>
        <div className="subscribe__wrapper">
          <input type="email" className="subscribe__input" placeholder="Type Your Email Address"/>
          <button className="subscribe__button">Subscribe</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__wrap">
        <div className="footer__gym">
          <div className="footer__wrapper">
            <p className="footer__logo"></p>
            <p className="footer__heading">Golds Gym</p>
          </div>
          <p className="footer__text">A Modified Fitness Club that 
          provide fitness & nutrition related services to 
          improve your health</p>
          <ul className="footer__social">
            <li className="footer__facebook"></li>
            <li className="footer__twitter"></li>
            <li className="footer__google"></li>
            <li className="footer__linkedIn"></li>
          </ul>
        </div>

        <div className="footer__info">
          <p className="footer__title">Resources</p>
          <ul className="footer__links">
            <li className="footer__link">Features</li>
            <li className="footer__link">Pricing</li>
            <li className="footer__link">Activity</li>
            <li className="footer__link">Instructors</li>
          </ul>
        </div>

        <div className="footer__info">
          <p className="footer__title">About</p>
          <ul className="footer__links">
            <li className="footer__link">Blogs</li>
            <li className="footer__link">FAQs</li>
            <li className="footer__link">Policy</li>
            <li className="footer__link">Contact</li>
          </ul>
        </div>

        <div className="footer__info">
          <p className="footer__title">Helpful Links</p>
          <ul className="footer__links">
            <li className="footer__link">Articles</li>
            <li className="footer__link">Nutritions</li>
            <li className="footer__link">Meditation</li>
            <li className="footer__link">Services</li>
          </ul>
        </div>
        </div>
      </footer>

      
    </div>
  );
}

export default App;
