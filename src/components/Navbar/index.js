// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }
      return (
        <>
          {!isDarkTheme ? (
            <nav className="navbar-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="middle-items">
                <Link to="/" className="link-light">
                  <li className="list-item">Home</li>
                </Link>

                <Link to="/about" className="link-light">
                  <li className="list-item">About</li>
                </Link>
              </ul>

              <button
                className="theme-button"
                type="button"
                data-testid="theme"
                onClick={onClickToggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </nav>
          ) : (
            <nav className="navbar-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                className="website-logo"
                alt="website logo"
              />
              <ul className="middle-items">
                <Link to="/" className="link-dark">
                  <li className="list-item">Home</li>
                </Link>

                <Link to="/about" className="link-dark">
                  <li className="list-item">About</li>
                </Link>
              </ul>
              <button
                className="theme-button"
                type="button"
                data-testid="theme"
                onClick={onClickToggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
