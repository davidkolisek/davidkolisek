import { Box, Card, Container, Fade } from "@material-ui/core";
import React from "react";
import Logo from "../../../components/src/Logo";
import { SigninForm } from "./SigninForm";
export function Signin() {
  return (
    <Fade in={true}>
      <Container maxWidth="xl">
        <Box mb={3} textAlign="center">
          <Logo />
        </Box>
        <Card>
          <Box p={{ xs: 2, md: 3 }}>
            <SigninForm />
          </Box>
        </Card>
      </Container>
    </Fade>
  );
}
