// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const pageContainerClass = isDarkTheme
        ? 'page-content-container dark-theme-page'
        : 'page-content-container'

      const notFoundHeadingClass = isDarkTheme
        ? 'page-heading dark-theme-heading'
        : 'page-heading'

      const notFoundDescription = isDarkTheme
        ? 'not-found-description-dark'
        : 'not-found-description'

      return (
        <>
          <div className="not-found-container">
            <Navbar />
            <div className={pageContainerClass}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                className="not-found-image"
                alt="not found"
              />
              <h1 className={notFoundHeadingClass}>Lost Your Way ?</h1>
              <p className={notFoundDescription}>
                We cannot seem to find the page you are looking for
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
