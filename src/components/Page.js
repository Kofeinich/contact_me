import React from "react";
import Title from "./Title";
import TelegramIcon from "./source/TelegramIcon";
import InstagramIcon from "./source/InstagramIcon";
import GitHubIcon from "./source/GitHubIcon";
import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100vh;
  ::before {
    background: repeating-linear-gradient(210deg, rgb(10, 134, 89) 40px,
    rgba(106, 243, 195, 0.53) 80px, rgb(115, 113, 113) 120px,
    rgba(238, 80, 10, 0.7) 160px, rgb(13, 169, 110) 200px,
    rgb(13, 169, 110) 240px, rgba(106, 243, 195, 0.53) 280px,
    rgb(8, 117, 80) 300px),
    repeating-linear-gradient(-210deg, rgb(8, 117, 80) 30px,
    rgba(238, 80, 10, 0.8) 60px, rgb(115, 113, 113) 90px,
    rgba(238, 80, 10, 0.7) 120px, rgba(238, 80, 10, 0.8) 150px,
    rgb(13, 169, 110) 180px, rgba(238, 80, 10, 0.8) 210px,
    rgb(8, 117, 80) 230px),
    repeating-linear-gradient(23deg, rgba(25, 77, 59, 0.75) 50px, rgba(238, 80, 10, 0.8) 100px,
    #9b9a9a 150px, rgba(238, 80, 10, 0.7) 200px, #0da96e 250px,
    #0da96e 300px, rgba(238, 80, 10, 0.8) 350px, rgba(50, 134, 103, 0.75) 370px);
    content: "";
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
    ::before {
      background:
              linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
              linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
              linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
              linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
              linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
              linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
      background-color: #131313;
      background-size: 20px 20px;
      text-align: center;
      width: 100%;
      height: 100%;
      filter: brightness(70%); 
    }
  }
`

const StyledSectionInside = styled.div`
    position: relative;
`


const StyledBoxIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  @media (max-width: 520px) {
    margin-top: 3rem;
  }
`

const StyledBox1 = styled.div`
    
`

const StyledBox2 = styled.div`
  
`

const StyledBox3 = styled.div`
    
`

const StyledBox4 = styled.div`
    
`

const StyledBox5 = styled.div`
    
`

let telegramBox = "0 0 16 16";
let tHeight = 60; let tWidth = 60;
let instagramBox = "0 0 64 64";
let iHeight = 70; let iWidth = 70;
let githubBox = "0 0 30 30";
let gHeight = 70; let gWidth = 70;

if (window.innerWidth > 520){
    tWidth = 120;
    tHeight = 120;
    gHeight = 140;
    gWidth = 140;
    iHeight = 140;
    iWidth = 140;
}


function Page(){
    return <StyledSection>
        <StyledSectionInside>
            <StyledBox1>

            </StyledBox1>
            <StyledBox2>
                <Title primary children="Kofeinich"/>
                <StyledBoxIcons>
                    <TelegramIcon viewBox={telegramBox} width={tWidth} height={tHeight} fill={"#0088cc"}/>
                    <InstagramIcon viewBox={instagramBox} width={iWidth} height={iHeight}/>
                    <GitHubIcon viewBox={githubBox} width={gWidth} height={gHeight} fill={"#414141"}/>
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