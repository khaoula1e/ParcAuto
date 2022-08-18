import axios from 'axios';  
import {
    useNavigate 
  } from "react-router-dom";

import React, { useState } from 'react'  


const Login=()=>{
    let navigate = useNavigate();

    const [user,setUser]=useState({CIN:'',nom:'',password:''})

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value}); 
    }


    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
        
           CIN: user.CIN,
           nom: user.nom,
           password:user.password

        }

       // console.log(sendData);

        axios.post('http://localhost/backend/login.php',sendData)
        .then((result)=>{
            if (result.data.Status === '200') { 
                window.localStorage.setItem('CIN', result.data.CIN);
                window.localStorage.setItem('nom', result.data.nom);  
                navigate(`/`);
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           
           alert('Invalid User'); 
        }
      })  
    }


    return(
        <form  onSubmit={submitForm}>
        <div className="row">
         <div className="col-md-12 text-center"><h1>Login</h1></div>
        </div>
            <div className="row">
                <div className="col-md-6">CIN</div>
                <div className="col-md-6">
                    <input type="text" name="CIN" className="form-control"
                    onChange={handleChange} 
                     />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Nom</div>
                <div className="col-md-6">
                    <input type="text" name="nom" className="form-control" 
                        onChange={handleChange} 
                    />
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password" className="form-control" 
                         onChange={handleChange} 

                    />
                </div>
            </div>

            <div className="row">
              
                <div className="col-md-12 text-center">
                  <input type="submit" name="submit"  className="btn btn-success" value="Plese Login" />
                </div>
            </div>
            </form>
    )
}

export default Login;