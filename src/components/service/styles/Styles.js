import React from "react";
import styled, {css} from "styled-components";


export const MyFlex = styled.div`
  width: 100vw;
  position: relative;
  align-items: stretch;
  flex-direction: ${props => props.theme.dir};
  display: ${props => props.theme.dis};
  align-content: ${props => props.theme.ca};
  justify-content: ${props => props.theme.cj};
  max-width: ${props => props.theme.mw};
  align-self: ${props => props.theme.as};
`


export const MyBox = styled.div`
  background: rgba(96, 86, 154, 0.7);
  color: white;
  margin: 5vw;;
  width: ${props => props.theme.w};
  height: ${props => props.theme.h};
  border-radius: 20px;
  align-self: center;
`

export const MyHeading = styled.h2`
  font-family: "Andale Mono",serif;
  color: #ffe4c4;
  text-align: center;
  font-size: large;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const MyParagraph = styled.p`
  font-family: "Andale Mono",serif;
  text-align: left;
  padding-right: 20px ;
  padding-left: 20px;
  font-size: medium;
`

export const TitleWrapper = styled.div`
  text-align: center;
  padding: 3rem;
  position: relative;
  @media (max-width: 520px) {
    text-align: center;
    padding: 1rem;
  }
`

export const ImageWrapper = styled.div`
  text-align: center;
  padding: 3rem;
  position: relative;
  @media (max-width: 520px) {
    text-align: center;
    padding: 1rem;
  }
`

export const List = styled.ul`
  padding-left: 10px;
  font-family: "Andale Mono",serif;
`

export const ListItem = styled.li`
  font-family: "Andale Mono",serif;
  text-align: left;
  
`