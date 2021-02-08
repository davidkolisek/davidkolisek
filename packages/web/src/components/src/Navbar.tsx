import React, { ReactNode, Fragment, useState } from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";
import Logo from "./Logo";

interface Props {
  readonly children: ReactNode;
}

export function Navbar({ children }: Props) {
  return (
    <StyledAppBar position="static">
      <StyledToolbar maxWidth="xl">
          <Logo />
          <Typography variant="h6">News</Typography>
          {children}
      </StyledToolbar>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)`
  && {
    background: ${({ theme }) => theme.palette.background.light};
    display: inline-block;
    box-shadow: none;
  }
`;

const StyledToolbar = styled(Container)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    align-items: center;
  }
`;
