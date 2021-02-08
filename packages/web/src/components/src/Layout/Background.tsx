import React from "react";
import styled from "styled-components";
import bg from "@app/web/public/bg.jpg";

export function Background() {
  return (
    <Bg>
      {/* <img src={bg} alt={bg} /> */}
    </Bg>
  );
}

const Bg = styled.div`
  /* &:before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    @media (max-width: 768px) {
      background: rgba(55, 56, 103.1);
    }
  } */
  background-color: ${({ theme }) => theme.palette.background.light};
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  top: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
