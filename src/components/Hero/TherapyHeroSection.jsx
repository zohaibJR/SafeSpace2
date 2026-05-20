import './therapyHeroSection.css'
import Logo from '../Navbar/NavbarLogo.PNG'

function TherapyHeroSection() {
  return (
    <section className="therapyHero" id="about">
      <div className="therapyHero__banner">
        <div className="therapyHero__eyebrow">Virtual Therapy &amp; Counselling</div>

        <h1 className="therapyHero__title">
          For emotions you <br /> never truly explore
        </h1>

        <p className="therapyHero__subtitle">
          We provide virtual therapy and counselling with a{' '}
          <span>licensed clinical psychologist.</span>
        </p>

        <div className="therapyHero__buttons">
          <button className="cta-btn cta-btn--white" type="button">
            Book Free Intro Session
          </button>
          <button className="cta-btn cta-btn--ghost-white" type="button">
            Book Therapy Session
          </button>
        </div>
      </div>

      <div className="therapyHero__content">
        <div className="therapyHero__text">
          <p>
            <strong>SafeSpace</strong> is a virtual counselling and therapy
            platform that helps you manage emotions, behavioural issues, and
            past traumatic life experiences, and improve your quality of life.
          </p>

          <p>
            With our 50-minute therapy and counselling sessions, our therapist
            will explore the challenges you're facing and guide you towards
            healthier, lasting resolutions.
          </p>

          <button className="cta-btn cta-btn--primary" type="button">
            Book Therapy Session
          </button>
        </div>

        <div className="therapyHero__logoWrapper">
          <div className="therapyHero__logoRing">
            <img src={Logo} alt="SafeSpace Logo" className="therapyHero__logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TherapyHeroSection
