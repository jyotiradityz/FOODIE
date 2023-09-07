import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ "background": "#191d2b", 'color': "#00d9ff" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" style={{ 'color': "#00d9ff" }} to="/">FOODIE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{ 'color': "#00d9ff" }} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{ 'color': "#00d9ff" }}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
