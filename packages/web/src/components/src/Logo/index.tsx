import logoDark from "@app/web/public/images/logo-dark.png";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import styled from "styled-components";
import { Hidden } from "@material-ui/core";
import { ThemeVariant } from "../../../components";
import { Link } from "react-router-dom";

interface Props {
  noLink?: boolean;
  small?: boolean;
}
export const altLogo = "davidkolisek";
export default function Logo() {
  const theme = useTheme();

  return (
    <StyledLink to={``}>
      <LogoText
        className={theme.palette.type === ThemeVariant.light ? "light" : "dark"}
      >
        davidkolisek
      </LogoText>
      {/* <StyledImg
            src={
              theme.palette.type === ThemeVariant.light ? logoDark : logoDark
            }
            alt={alt}
          /> */}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  && {
    text-decoration: none;
  }
`;
const LogoText = styled.span`
  && {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: -1px;
    @media (max-width: 991px) {
       font-size: 1.25rem;
       letter-spacing: -1px;
     }
    &.dark {
      color: white;
    }
    &.light {
      color: #272727;
    }
  }
`;
// const StyledImg = styled.img`
//   && {
//     height: auto;
//     max-width: 140px;
//     width: 140px;
//     transition: all ease 150ms;
//     @media (max-width: 991px) {
//       width: 110px;
//     }
//   }
// `;
