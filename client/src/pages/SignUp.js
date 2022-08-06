import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function SignUp() {
  //styling
  const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
    background: linear-gradient(0.25turn,#093B8D,#93F2F8);
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 55%;
  padding: 20px;
  background-color: white;
  margin-top: 40px;
  
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 300;
  margin-top: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Field = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  
`;

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 15px 20px;
  background-color: #e5a775;
  color: black;
  text-decoration: solid;
  cursor: pointer;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: 280px;
  font-family: "Oleo Script", cursive;
  height: 70px;
  transform: rotate(-0.07deg);
`;

const Linki = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-left: 300px;
`;
// working
  const initialValues = {
    CIN: "",
    nom: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    CIN: Yup.string().min(3).max(15).required(),
    nom: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <h1 className='Title'>Créer votre compte</h1>
          <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='align-self-stretch'>
         
          <ErrorMessage name="CIN" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="CIN"
            placeholder="CIN"
          />
          
          <ErrorMessage name="nom" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="nom"
            placeholder="Nom d'utilisateur"
          />
          
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Mot de passe"
          />

          <Button type="submit">S'inscrire</Button>
          <h1 className='Title2'>Vous possédez déjà un compte?</h1>
          <Link to="/login"><Linki >Connectez-vous</Linki></Link>
        </Form>
      </Formik>
        </Wrapper>
        
      </Container>
      
    </div>
  );
}

export default SignUp;