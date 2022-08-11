import React from 'react'
import PropTypes from 'prop-types'


export default function  Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <div className="navbar-brand">
      {props.title}
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="nav-link active"  >
            Home
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/Nik-git1" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
    onClick={props.toggle}
  />
  <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault" >
    Enable {props.mode==='dark'?'light':'dark'} mode
  </label>
</div>

     
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string}

Navbar.defaultProps={
    title: "Set Title Here"
}