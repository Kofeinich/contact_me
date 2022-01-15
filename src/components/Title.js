import React from 'react';
import styled from "styled-components"

const StyledTitle = styled.h1`
  color: rgba(238, 80, 10, 0.7);
  margin-top: 150px;
  font-size: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc,
  0 3px 0 #ccc, 0 4px 0 #ccc,
  0 5px 0 #ccc, 0 6px 0 #ccc,
  0 7px 0 #ccc, 0 8px 0 #ccc,
  0 9px 0 #ccc, 0 10px 0 #ccc,
  0 11px 0 #ccc, 0 12px 0 #ccc;

  @media (max-width: 520px) {
    font-size: 80px;
    margin-top: 100px;
  }

  :hover {
    text-shadow: 0 1px 0 #737171FF, 0 2px 0 #737171,
    0 3px 0 #737171FF, 0 4px 0 #737171FF,
    0 5px 0 #737171FF, 0 6px 0 #737171FF,
    0 7px 0 #737171FF, 0 8px 0 #737171FF,
    0 9px 0 #737171FF, 0 10px 0 #737171FF,
    0 11px 0 #737171FF, 0 12px 0 #737171FF,
    0 13px 0 #ccc, 0 14px 0 #ccc,
    0 15px 0 #ccc, 0 16px 0 #ccc,
    0 17px 0 #ccc, 0 12px 0 #ccc,
    0 20px 30px rgba(238, 80, 10, 0.80);
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