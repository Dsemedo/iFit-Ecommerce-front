import styled from "styled-components";
import { Color2 } from "../assets/Colors";
import LogoutButton from "../assets/Images/Vector.svg";

export default function Header() {
  function logout() {
    axios
      .delete(`https://ifit-ecommerce.onrender.com/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        navigate("/");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  return (
    <Head>
      <h1>iFit</h1>
      <h2>a marmita fitness do momento</h2>
      <Logout src={LogoutButton} alt="LogoutButton" onClick={() => logout()}/>
    </Head>
  );
}

const Head = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 15vh;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;

  h1 {
    font-family: "Dancing Script", cursive;
    color: ${Color2};
    font-style: normal;
    font-size: 50px;
    font-weight: 700;
  }

  h2 {
    font-family: "Raleway", sans-serif;
    color: ${Color2};
    font-style: normal;
    font-size: 20px;
    font-weight: 400;
  }
`;

const Logout = styled.img`
  position: absolute;
  right: calc(50vw - 180px);
  top: 4vh;
`;
