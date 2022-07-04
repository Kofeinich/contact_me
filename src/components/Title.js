import React from 'react';
import styled from "styled-components"
import {TitleWrapper} from "./service/styles/Styles";

const StyledTitle = styled.h1`
  color: rgba(96, 86, 154);
  font-size: 168px;
  text-align: center;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-shadow: 0 1px 0 #ffe4c4, 0 2px 0 #ffe4c4,
  0 3px 0 #ffe4c4, 0 4px 0 #ffe4c4,
  0 5px 0 #ffe4c4, 0 6px 0 #ffe4c4,
  0 7px 0 #ffe4c4, 0 8px 0 #ffe4c4,
  0 9px 0 #ffe4c4, 0 10px 0 #ffe4c4,
  0 11px 0 #ffe4c4, 0 12px 0 #ffe4c4;

  :hover {
    text-shadow: 0 1px 0 #737171FF, 0 2px 0 #737171,
    0 3px 0 #737171FF, 0 4px 0 #737171FF,
    0 5px 0 #737171FF, 0 6px 0 #737171FF,
    0 7px 0 #737171FF, 0 8px 0 #737171FF,
    0 9px 0 #737171FF, 0 10px 0 #737171FF,
    0 11px 0 #737171FF, 0 12px 0 #737171FF,
    0 13px 0 #ffe4c4, 0 14px 0 #ffe4c4,
    0 15px 0 #ffe4c4, 0 16px 0 #ffe4c4,
    0 17px 0 #ffe4c4, 0 12px 0 #ffe4c4,
    0 20px 30px rgba(96, 86, 154, 0.8);
  }

  @media (max-width: 520px) {
    font-size: 90px;
    color: rgba(96, 86, 154, 0.7);
    text-shadow: 0 1px 0 #737171FF, 0 2px 0 #737171,
    0 3px 0 #737171FF, 0 4px 0 #737171FF,
    0 5px 0 #737171FF, 0 6px 0 #737171FF,
    0 7px 0 #737171FF, 0 8px 0 #737171FF,
    0 9px 0 #737171FF, 0 10px 0 #737171FF,
    0 11px 0 #737171FF, 0 12px 0 #737171FF,
    0 13px 0 #ffe4c4, 0 14px 0 #ffe4c4,
    0 15px 0 #ffe4c4, 0 16px 0 #ffe4c4,
    0 17px 0 #ffe4c4, 0 12px 0 #ffe4c4,
    0 20px 30px rgba(96, 86, 154, 0.8);
  }
`



const Title = ({children}) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    );
};

export default Title;