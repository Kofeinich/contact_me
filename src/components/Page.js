import React from "react";
import Title from "./Title";
import TelegramIcon from "./source/TelegramIcon";
import InstagramIcon from "./source/InstagramIcon";
import GitHubIcon from "./source/GitHubIcon";
import styled from "styled-components";
import CustomImage from "./source/Image";
import SVGForME from "./source/SVGForME";


const StyledSection = styled.section`
  box-sizing: border-box;
  
  ::before {
    content: "";
    background: #f893a6;
    top: 0;
    left: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    filter: brightness(50%);
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
      width: 100%;
      height: 100vh;
      min-height: 750px;
      min-width: 300px;
    }
  }


  @media  screen and (min-width: 521px)  and (max-width: 1200px) {
    display: block;
    ::before {
      background-image: url("/assets/mountains-1412683.png");
      text-align: center;
      width: 100%;
      height: 100vh;
      min-height: 1000px;
      min-width: 500px;
    }
  }


  @media (min-width: 1201px) {
    display: block;
    ::before {
      text-align: center;
      width: 100%;
      height: 100vh;
      min-height: 1100px;
      min-width: 500px;
      background-image: url("/assets/mountains-1412683.png");
    }
  }
`

const StyledSectionInside = styled.div`
    position: relative;
`

const StyledImageMe = styled.div`
  @media (max-width: 520px){
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  
  @media screen and (max-width: 1200px)  and (min-width: 521px) {
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
  
  @media (min-width: 1201px){
    margin-top: 8rem;
    margin-bottom: 4rem;
  }
`

const StyledBox2 = styled.div`
  @media (max-width: 520px) {
    text-align: center;
    padding: 1rem;
  }
  @media (min-width: 521px) {
    text-align: center;
    padding: 3rem;
    position: relative;
    z-index: 100;
  }
`

const StyledBoxIcons = styled.div`
  display: grid;
  position: center;
  grid-template-columns: 1fr 1fr 1fr;
  
  @media (max-width: 520px) {
    margin-top: 2rem;
  }
`

const TelDiv = styled.div`
  margin-top: 10px;
`

const InstDiv = styled.div`
  align-self: center;
  margin-bottom: 2rem;
`

const GitDiv = styled.div`
   margin: 2px; 
`

const StyledBox1 = styled.div`
  @media (max-width: 520px) {
    display: none;
  }
`

const StyledBox3 = styled.div`
  @media (max-width: 520px) {
    display: none;
  }
`

const StyledBox4 = styled.div`
  @media (max-width: 520px) {
    display: none;
  }
`

const StyledBox5 = styled.div`
  @media (max-width: 520px) {
    display: none;
  }
`



let telegramBox = "0 0 16 16";
let tHeight = 60; let tWidth = 60;
let instagramBox = "0 0 64 64";
let iHeight = 78; let iWidth = 78;
let githubBox = "0 0 30 30";
let gHeight = 78; let gWidth = 78;
let photoWidth = 250;
let photoHeight = 250;

if (window.innerWidth > 520){
    tWidth = 120;
    tHeight = 120;
    gHeight = 140;
    gWidth = 140;
    iHeight = 140;
    iWidth = 140;
}

if (window.innerWidth > 1200){
    photoHeight = 350;
    photoWidth = 350;
}

let backgroundSVG = <></>

if (document.documentElement.clientWidth > 1200){
    backgroundSVG = <SVGForME/>
}
else {
    backgroundSVG = <></>
}

const myBackgroundSVG = styled.div`
  top: 0;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 10;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
`


function Page(){
    return <StyledSection>
        <StyledSectionInside>
            <StyledBox2>
                <Title primary children="Kofeinich"/>
                <StyledImageMe>
                    <CustomImage src="assets/profile_photo.jpg" height={photoHeight} width={photoWidth} circle border filter/>
                </StyledImageMe>
                <StyledBoxIcons>
                    <TelDiv>
                        <TelegramIcon viewBox={telegramBox} width={tWidth} height={tHeight} fill={"#0088cc"}
                                      onClick={() => {
                                          window.location = 'https://t.me/FedorKonyukhoff'
                                      }}
                        />
                    </TelDiv>
                    <InstDiv>
                        <InstagramIcon viewBox={instagramBox} width={iWidth} height={iHeight}
                                       onClick={() => {
                                           window.location = 'https://www.instagram.com/kofeinich/'
                                       }}
                        />
                    </InstDiv>
                    <GitDiv>
                        <GitHubIcon viewBox={githubBox} width={gWidth} height={gHeight} fill={"#414141"}
                                    onClick={() => {
                                        window.location = 'https://github.com/Kofeinich'
                                    }}
                        />
                    </GitDiv>
                </StyledBoxIcons>
            </StyledBox2>
            <StyledBox3>
            </StyledBox3>
            <StyledBox4>
            </StyledBox4>
            <StyledBox5>
            </StyledBox5>
        </StyledSectionInside>
    </StyledSection>

}

export default Page