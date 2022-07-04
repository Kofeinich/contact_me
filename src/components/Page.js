import React from "react";
import Title from "./Title";
import TelegramIcon from "./service/functional/SvgTelegram";
import InstagramIcon from "./service/functional/SvgInstagram";
import GitHubIcon from "./service/functional/SvgGitHub";
import CustomImage from "./service/functional/CustomImage";
import {StyledSection,
    StyledBoxIcons,
    InstDiv,
    TelDiv,
    GitDiv} from "./service/styles/DefaultStyles"
import {MyBox, ImageWrapper, TitleWrapper, MyFlex, MyHeading, MyParagraph} from "./service/styles/Styles";


let dis="flex"
let cj="center"
let cjs='space-between'
let mw='1200px'
let ca=''
let dir=''
let as=''
let w='300px'

if (window.innerWidth < 1000){
    dir='column'
    as='stretch'
}
if (window.innerWidth < 1000 && window.innerWidth > 600) {
    w='450px'
}


function Page(){
    return <StyledSection>
                <MyFlex theme={{ dis: dis, dir: dir, as: as, ca: ca, cj: cj}}>
                    <MyFlex theme={{ dis: dis, dir: dir, as: as, ca: ca, cj: cj, mw: mw,}} >
                        <TitleWrapper>
                            <Title primary children="Kofeinich"/>
                        </TitleWrapper>
                        <ImageWrapper>
                            <CustomImage src="assets/profile_photo.jpg" height={250} width={250} circle border filter/>
                        </ImageWrapper>
                    </MyFlex>
                </MyFlex>
                <MyFlex theme={{ dis: dis, dir: dir, as: as, ca: ca, cj: cj}}>
                    <MyFlex theme={{ dis: dis, dir: dir, as: as, ca: ca, cj: cjs, mw: mw,}}>
                        <MyBox theme={{ w: w}}>
                            <MyHeading>
                                Skills
                            </MyHeading>
                            <MyParagraph>
                                React JS, ES6, HTML 5, CSS 3<br/>
                                Chakra UI, Skeleton, Git, <br/>
                                SSR, SSG, Axios, Redux-Saga,<br/>
                                SCRUM, Project management
                            </MyParagraph>
                        </MyBox>
                        <MyBox theme={{ w: w}}>
                            <MyHeading>
                                Contacts
                            </MyHeading>
                            <StyledBoxIcons>
                                <TelDiv>
                                    <TelegramIcon viewBox={'0 0 16 16'} width={60} height={60} fill={'#0088cc'}
                                                  onClick={() => {
                                                      window.location = 'https://t.me/FedorKonyukhoff'
                                                  }}
                                    />
                                </TelDiv>
                                <InstDiv>
                                    <InstagramIcon viewBox={'0 0 64 64'} width={78} height={78}
                                                   onClick={() => {
                                                       window.location = 'https://www.instagram.com/kofeinich/'
                                                   }}
                                    />
                                </InstDiv>
                                <GitDiv>
                                    <GitHubIcon viewBox={'0 0 30 30'} width={78} height={78} fill={'black'}
                                                onClick={() => {
                                                    window.location = 'https://github.com/Kofeinich'
                                                }}
                                    />
                                </GitDiv>
                            </StyledBoxIcons>
                        </MyBox>
                        <MyBox theme={{ w: w}}>
                            <MyHeading>
                                Additional Info
                            </MyHeading>
                            <MyParagraph>
                                React JS, ES6, HTML 5, CSS 3<br/>
                                Chakra UI, Skeleton, Git, <br/>
                                SSR, SSG, Axios, Redux-Saga,<br/>
                                SCRUM, Project management
                            </MyParagraph>
                        </MyBox>
                    </MyFlex>
                </MyFlex>
    </StyledSection>

}

export default Page