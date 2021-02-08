import React, { ReactNode, Fragment } from "react";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";

interface Props {
  readonly label?: any;
  readonly children: ReactNode;
  readonly display?: string;
}

export function Bit({ label, children, display }: Props) {
  return (
    <Fragment>
      {label! && (
        <Box display={display} component="span" pr={1} mb={.5}>
          <Title variant="body2">{label}</Title>
        </Box>
      )}
      <Box display={display} component="span">
        <Typography color="textSecondary" variant="subtitle1">
          {children}
        </Typography>
      </Box>
    </Fragment>
  );
}

const Title = styled(Typography)`
  ${({ theme }) => `
  && {
    color: ${theme.palette.text.secondary};
    display: inline-block;
  }
`}
`;
