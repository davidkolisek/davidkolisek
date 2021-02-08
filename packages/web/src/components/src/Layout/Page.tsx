import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export function Page({ children }: Props) {
  return <Styled>{children}</Styled>;
}

const Styled = styled.div`
  && {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.palette.background.default};
    position: relative;
    display: flex;
    flex: 1;
    min-height: 100%;
  }
`;
