import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const [creds, setCreds] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: creds.email, password: creds.password })
    });
    const json = await res.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Creds")
    }
    if (json.success) {
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  }
  const onChange = (event) => {
    setCreds({ ...creds, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={creds.email} onChange={onChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={creds.password} onChange={onChange} />
          </div>
    
          <button type="submit" className="m-3 btn btn-failure" style={{ background: "#191d2b", border: "1px solid white" }}>Submit</button>
          <Link to='/createuser' className='m-3 btn btn-danger'>Be A User</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
