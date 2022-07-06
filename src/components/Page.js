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
import {MyBox, ImageWrapper, TitleWrapper, MyFlex, MyHeading, MyParagraph, List, ListItem,} from "./service/styles/Styles";


let dis="flex"
let cj="center"
let cjs='space-between'
let mw='1200px'
let ca=''
let dir=''
let as=''
let w='300px'
let h='250px'
let h2='175px'

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
                        <MyBox theme={{ w: w, h: h}}>
                            <MyHeading>
                                Skills
                            </MyHeading>
                            <MyParagraph>
                                <List>
                                    <ListItem>
                                        React JS, ES6, HTML5, CSS3
                                    </ListItem>
                                    <ListItem>
                                        Styled Components, Chakra UI, Skeleton
                                    </ListItem>
                                    <ListItem>
                                        Axios, Redux-Saga, SSG (Gatsby JS), SSR (Next JS)
                                    </ListItem>
                                    <ListItem>
                                        Git, PM, Scrum, English (B2)
                                    </ListItem>
                                </List>
                            </MyParagraph>
                        </MyBox>
                        <MyBox theme={{ w: w, h: h2}}>
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
                        <MyBox theme={{ w: w, h: h}}>
                            <MyHeading>
                                Additional Info
                            </MyHeading>
                            <MyParagraph>
                                <List>
                                    <ListItem>
                                        I am a 4th year student at ITMO University
                                    </ListItem>
                                    <ListItem>
                                        Rollerblading and snowboarding
                                    </ListItem>
                                    <ListItem>
                                        Travelling and cats lover
                                    </ListItem>
                                    😎🙏🐵🌎🧳🎿
                                </List>
                            </MyParagraph>
                        </MyBox>
                    </MyFlex>
                </MyFlex>
    </StyledSection>

}

export default Page