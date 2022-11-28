import styled from "styled-components";

export default function Header() {
  return (
    <Head>
      <h1>iFit</h1>
      <h2>a marmita fitness do momento</h2>
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
    color: black;
    font-style: normal;
    font-size: 50px;
    font-weight: 700;
  }

  h2 {
    font-family: "Raleway", sans-serif;
    color: black;
    font-style: normal;
    font-size: 20px;
    font-weight: 400;
  }
`;
