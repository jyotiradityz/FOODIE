import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer clasName="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top cursor-hover">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </Link>  
          <span className="text-muted">© 2k23 <b>FOODIE</b>, Jyotiraditya</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer