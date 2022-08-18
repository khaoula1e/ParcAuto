import { useState } from "react";
import axios from 'axios'
import{useNavigate} from 'react-router-dom';
 
const Register=(props)=>{

    let history = useNavigate(); // Use for Navigate on Previous
    const [data, setData]=useState({
        CIN:"",
        nom:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value }); 

        //console.log(data)
    }
   
    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
            CIN:data.CIN,
            nom:data.nom,
            password:data.password

        }

        console.log(sendData);

        axios.post('http://localhost/backend/insert.php',sendData)
        .then((result)=>{
            if (result.data.Status == 'Invalid') { 
          alert('Invalid User');  
            }
        else  {
           history(`/signin`);
        }
      })  
    }

    return(
        <div className="main-box">
        <form  onSubmit={submitForm}>
        <div className="row">
         <div className="col-md-12 text-center"><h1>Register</h1></div>
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
              
                <div className="col-md-12 text-cener">
                    <input type="submit" name="submit" value="Register" className="btn btn-success" />
                </div>
            </div>
            </form>
        </div>
    )
}

export default Register;