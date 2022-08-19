import styled from "styled-components";  
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config';

 const Login = (props) => {
    //style
     const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
    background: linear-gradient(0.25turn,#32393c,#c1dce6);
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
  background-color: white;
  align-items: center;
  text-align: center;
 
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 300;
  color:#47cde2
;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 20%;
  border: none;
  position: center;
  background-color: teal;
  cursor: pointer;
`;
     //
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setsuccess] = useState('');
     const admin = 'txgLUSu9QCNExx05nINU4aHd5dx2';
     const chauffeur = 'U8P1NLWBGdZTmBpwp9sFIJ0mB6u1';
     const user = auth.currentUser;
     var uid;
    
      const nav=useNavigate();
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(()=>{
            setsuccess("Login Successful");
            uid = user.uid;
            console.log(user);
            console.log(uid);
            if (uid == admin) {
                nav("/dashboard");
            } else if(uid==chauffeur) {
                nav("/mission_chauffeur")
            } else {
                nav("/formulaire")
            }
            
        }).catch(error=>setError(error.message));
       
    }

    return (
        <Container>
             <Wrapper>
             {success&&<>
               
                              <div className="alert alert-success">
  <strong>{success}</strong> 
</div></>
}
            <br />
                <Title>Authentification</Title>
                <br></br>
                <div className="underline3"></div>
            <br />
                <Form action="/action_page.php" onSubmit={login}>
                    
                        <input type="email" className="form-control"  value="email" id="email" placeholder="Entrez votre email" name="email"  onChange={(e) => setEmail(e.target.value)} value={email} required></input>

                <br />
                    <Input type="password" className='form-control' required
                        placeholder="Entrez votre mot de passe"
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                    <span>
            <br></br>
              Vous ne possédez pas un compte? <Link to={"/signup"}> S'inscrire</Link>
            </span>
            <br></br>
                <Button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</Button>
            </Form>
      
            {error&&<>
  <div class="alert alert-danger">
    <strong>{error}</strong>
  </div>
        </>}
            <br/>
            </Wrapper>
           
        </Container>
    )
}


export default Login;