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
  width: 100vw;
  height: 15vh;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 20px;
  }
`;
