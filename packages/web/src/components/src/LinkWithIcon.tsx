import React, { ReactNode } from "react";
import { Box, Link } from "@material-ui/core";
import styled from "styled-components";

interface Props {
  readonly label: ReactNode;
  readonly link: string;
  readonly icon?: ReactNode;
  readonly color?: any;
  readonly fontWeight?: string;
  readonly variant?: any;
}

export function LinkWithIcon({
  link,
  label,
  icon,
  fontWeight,
  color,
  variant,
}: Props) {
  return (
    <StyledLink
      href={link}
      target="_blank"
      rel="noopener"
      underline="none"
      component={Link}
      color={color}
      variant={variant}
    >
      <Box component="span" fontWeight={fontWeight}>
        {label}
        {icon}
      </Box>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  &&& {
    display: inline-block;
    span {
      i {
        font-size: 0.75rem;
        vertical-align: middle;
        height: auto;
        margin-left: 8px;
      }
    }
    &:hover {
      text-decoration: none;
    }
  }
`;
