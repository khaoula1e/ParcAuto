import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../firebase-config'
import {fs} from '../firebase-config' 
import { useState } from 'react'
import styled from "styled-components";  





const Signup = () => {
   const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;
  const Button = styled.button`
  border: none;
  position: center;
  margin-right: 100px;
  cursor: pointer;
`;
  const Title = styled.h1`
  font-size: 44px;
  font-weight: 300;
  color:#39A477
;
`;
  const history=useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const[ success,setsuccess]=useState('');
   


    const handlesignup=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            console.log(cred);
            fs.collection('users').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setsuccess('sign up succesfull');
                setName('');
                setEmail('');
                setPassword('');
                setError('');
               
            }).catch(error=> setError(error.message));
        }).catch(error => setError(error.message));
     //   console.log(name,email,password);
        
    }
  return (
    <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        {success&&<>
          <div className="alert alert-success">
  <strong>{success}</strong> 
</div>
        <br></br>
        </>}
  <form action="/action_page.php" onSubmit={handlesignup}>
      <Title>Créer un compte</Title>
      <hr></hr>
  <div className="mb-3 mt-3">
  <label for="name" className="form-label">Nom et Prénom:</label>
    <input type="text" className="form-control"  value="name"id="name" placeholder="Entrez votre nom" name="Full name" required onChange={(e) => setName(e.target.value)} value={name}></input>
  </div>
  <div className='mb-3 mt-3'>
  <label for="email" className="form-label">Email:</label>
    <input type="email" className="form-control"  value="email" id="email" placeholder="Entrez votre email" name="email"  onChange={(e) => setEmail(e.target.value)} value={email} required></input>
  </div>
  <div className="mb-3 mt-3" >
    <label for="pwd" className="form-label">Mot de passe:</label>
    <input type="password" className="form-control" value="psw" id="pwd" placeholder="Entrez votre mot de passe" name="pswd" required onChange={(e) => setPassword(e.target.value)} value={password}></input>
  </div>
  <div className=" mb-3 mt-3">
   <div className="btn-box">
            <span> Vous avez déjà un compte?  </span>
            <Link to={'/login'}> Connectez-vous</Link>
            <br></br>
       <Button type="submit" className=" btn btn-success float-md-end ">Sign Up</Button>

   </div>
  </div>
 
</form>
{error&&<>
  <div class="alert alert-danger">
    <strong>{error}</strong>
  </div>
        <br></br>
        </>}
    </div>
  )
}

export default Signup;