import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    console.log('loggin out');
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ "background": "#191d2b", 'color': "#00d9ff" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" style={{ 'color': "#00d9ff" }} to="/">FOODIE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page" style={{ 'color': "#00d9ff" }} to="/login">Home</Link>
              </li>
              {/* {(localStorage.getItem("authToken")) ?
                <li className='nav-item'>
                  <Link className="nav-link active fs-5 " aria-current="page" to="/" style={{ 'color': "#00d9ff" }}>My Orderes</Link>
                </li>
                : ""} */}
            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex ms-auto'>
                <Link className="btn bg-white  mx-1" to="/login" style={{ 'color': "#00d9ff" }}>Login</Link>
                <Link className="btn bg-white  mx-1" to="/createuser" style={{ 'color': "#00d9ff" }}>SignUp</Link>
              </div>
              :
              <div>
                <div className='btn bg-white mx-2 fs-5' style={{ 'color': "#00d9ff" }}>
                  MyCart
                </div>
                <div className='btn bg-white mx-2 fs-5' style={{ 'color': "red" }} onClick={localStorage.removeItem("authToken")}>
                  Logout
                </div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar