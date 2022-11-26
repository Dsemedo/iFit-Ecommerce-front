import axios from 'axios';
import { useState, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function Login(){
 const [email,setEmail]  = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();
 
 async function Enviarform(e){
 e.preventDefault(); 
 const body = {email, password};
 axios.post('http://localhost:5000/signin', body).then((response) => {
    localStorage.setItem("token", response.data.token);
    navigate("/Homepage");
  }).catch((error) => {
    console.error('Erro ao fazer login');
 });
}
return (  
 <Container>  
<h1>IFit</h1>
<form onSubmit={Enviarform}>
<input type="email" required placeholder="E-mail" onChange={ (e) => setEmail(e.target.value)} value={email} />
<input type="password" required placeholder="Senha" onChange={ (e) => setPassword(e.target.value)} value={password}/>
<button onClick={Enviarform}>Entrar</button>
<h2><Link to="/signup">Primeira vez? Cadastre-se!</Link></h2>
</form>
</Container> 
)  
}


   
const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #3859aa;
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
font-family: 'Raleway', sans-serif;
img{
    padding-top: 50px;
    padding-bottom: 32px;
   
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
   justify-content:center;
}
input {
    width: 100%;
    height: 45px;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    border-radius: 5px;
  }
 
input:focus {
    outline-color: red;
  }
  input::placeholder {
    color: #000000;
    ;
  }
  button {
    width: 100%;
    height: 42px;
    border-radius: 3px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 1);
    background-color: green;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
  }
  h1{
    color: black;
    font-size: 30px;
    margin-bottom: 25px;
  }
  h2{
    color: black;
    font-size: 14px;
    margin-top: 25px;
  }
  a:link, a:visited, a:active {
    text-decoration: unset;
    color:black;
    }

`; 
    