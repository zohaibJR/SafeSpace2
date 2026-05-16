import { useState } from 'react'
import './navbar.css'
import NavbarLogo from '../Assets/LogoCropped.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    'About',
    'Our Services',
    'Our Therapists',
    'FAQ',
    'Contact',
  ]

  return (
    <header className="navbar">
      <a className="navbar__brand" href="/" aria-label="SafeSpace home">
        <img
          src={NavbarLogo}
          alt="SafeSpace Logo"
          className="navbar__logo"
        />
      </a>

      <button
        className={`navbar__toggle${menuOpen ? ' open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        className={`navbar__menu${menuOpen ? ' mobile-open' : ''}`}
        aria-label="Main navigation"
      >
        {menuItems.map((item) => (
          <a
            className="navbar__link"
            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
            key={item}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="navbar__cta">Book a Session</button>
    </header>
  )
}

export default Navbar