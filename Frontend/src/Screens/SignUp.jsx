import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const SignUp = () => {
    const notify = () => toast("Registered!");
    const [creds,setCreds]=useState({name:"",email:"",password:"",geolocation:"",})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res=await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json' 
            },
            body:JSON.stringify({name:creds.name,email:creds.email,password:creds.password,location:creds.geolocation})
        });
        const json=await res.json();
        console.log(json);
        if(!json.success){
            alert("Enter Valid Creds")
        }
        if(json.success){
        }
    }
    const onChange=(event)=>{
        setCreds({...creds,[event.target.name]:event.target.value})
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>

            <input type="text" className="form-control" name='name' value={creds.name} onChange={onChange}/>

                    </div> 
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

            <input type="email" className="form-control" name='email' value={creds.email} onChange={onChange}/>

                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

            <input type="password" className="form-control" name='password' value={creds.password} onChange={onChange}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Address</label>

            <input type="text" className="form-control" name='geolocation' value={creds.geolocation} onChange={onChange}/>

                    </div>
                    <button type="submit"  className="m-3 btn btn-failure" style={{background:"#191d2b",border:"1px solid white"}} onClick={notify}>Submit</button>
                    <Link to='/login' className='m-3 btn btn-danger'>Already a User</Link>
                </form>
            </div>
        </> 
    )
}

export default SignUp
