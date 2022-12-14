import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Color1, Color2, Color3 } from "../../assets/Colors";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function Enviarform(e) {
    e.preventDefault();
    const body = { name, email, phone, password };
    axios
      .post("https://ifit-ecommerce.onrender.com/signup", body)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao fazer login");
      });
  }
  return (
    <Container>
      <h1>IFit</h1>
      <form onSubmit={Enviarform}>
        <input
          type="name"
          required
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          required
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="phone"
          required
          placeholder="DDD+Celular"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          type="password"
          required
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={Enviarform}>Cadastrar</button>
        <h2>
          <Link to="/">Já tem uma conta?</Link>
        </h2>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Color1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "'Raleway', sans-serif";

  img {
    padding-top: 50px;
    padding-bottom: 32px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 100%;
    height: 45px;
    border: 1px solid #d4d4d4;
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
  }
  button {
    width: 100%;
    height: 42px;
    border-radius: 3px;
    margin-top: 20px;
    color: ${Color2};
    background-color: ${Color3};
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
  }
  h1 {
    font-family: "Dancing Script", cursive;
    color: ${Color2};
    font-style: normal;
    font-size: 100px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  h2 {
    color: black;
    font-size: 14px;
    margin-top: 25px;
  }
  a:link,
  a:visited,
  a:active {
    text-decoration: unset;
    color: black;
    font-size: 15px;
    font-style: italic;
  }
`;
