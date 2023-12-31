import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
        
  <input className="form-check-input" type="checkbox" role="switch" aria-checked="true"    onClick={props.toggleMode} id="flexSwitchCheckDisabled" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">dark mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string

}
Navbar.defaultProps = {
  title: 'hello'
}
