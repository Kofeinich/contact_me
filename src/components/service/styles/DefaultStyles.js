import styled from "styled-components";

export const StyledSection = styled.section`
  
  ::before {
    content: "";
    background: #f893a6;
    top: 0;
    left: 0;
    text-align: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-size: cover;
    filter: brightness(30%);
  }
  
  @media (max-width: 520px) {
    display: block;
    ::before {
      background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
      linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
      linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
      background-color: #131313;
      background-size: 20px 20px;
      text-align: center;
      width: 100vw;
      height: 100vh;
      min-height: 1325px;
      min-width: 300px;
    }
  }


  @media  screen and (min-width: 521px)  and (max-width: 1000px) {
    display: block;
    ::before {
      background-image: url("/assets/mountains-1412683.png");
      text-align: center;
      width: 100%;
      height: 100vh;
      min-height: 1700px;
    }
  }


  @media (min-width: 1000px) {
    display: block;
    ::before {
      text-align: center;
      width: 100vw;
      height: 100vh;
      min-height: 780px;
      min-width: 500px;
      background-image: url("/assets/mountains-1412683.png");
    }
  }
`

export const StyledBoxIcons = styled.div`
  display: grid;
  position: center;
  grid-template-columns: 1fr 1fr 1fr;
  
  @media (max-width: 520px) {
    margin-top: 2rem;
  }
`

export const TelDiv = styled.div`
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
`

export const InstDiv = styled.div`
  align-self: center;
  margin-bottom: 2rem;
  :hover {
    cursor: pointer;
  }
`

export const GitDiv = styled.div`
  margin: 2px;
  :hover {
    cursor: pointer;
  }
`