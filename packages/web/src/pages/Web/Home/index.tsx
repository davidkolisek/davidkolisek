import { Box, Fade } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";

export function Home() {
  const { t } = useTranslation("common");

  return (
    <Fade in={true}>
      <Box>
        <Header />
        <Portfolio />
      </Box>
    </Fade>
  );
}
