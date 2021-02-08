import React from "react";
import styled from "styled-components";
import { Typography, Link } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";
import { Link as RouterLink } from "react-router-dom";

export default function CookieBar() {
  const { t } = useTranslation("common");

  return (
    <StyledCookie>
      <CookieConsent
        style={{
          background: "#272727",
          color: "#fff",
          display: "block",
          position: "fixed",
          zIndex: "10030",
          left: "1rem",
        }}
        buttonStyle={{
          background: "#009de5",
          fontSize: "12px",
          color: "#fff",
          minWidth: "78px",
        }}
        buttonText={t("cookiesBar.approve")}
      >
        <Typography variant="body2">
          {t("cookiesBar.p1")}{" "}
          <Link component={RouterLink} to="">
            {t("cookiesBar.p2")}
          </Link>
          . {t("cookiesBar.p3")}.
        </Typography>
      </CookieConsent>
    </StyledCookie>
  );
}

const StyledCookie = styled.div`
  .CookieConsent {
    max-width: 500px;
    padding: 10px;
    animation-name: fadeInUp;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: 750ms;
    font-size: 14px;
    border-radius: 7px;
    bottom: 1rem !important;
    @media (max-width: 991px) {
      border-radius: 0;
      padding: 0;
      width: 100%; 
    }
    @media (max-width: 767px) {
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      max-width: unset;
      width: 100%;
      border-radius: 0;
      padding: 0;
    }
    button {
      padding: 7px 0;
      margin: 0 15px 15px !important;
      @media (max-width: 767px) {
        position: relative;
        bottom: 0;
        right: 0;
      }
    }
    img {
      @media (max-width: 767px) {
        display: none;
      }
    }
    a {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(-10%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
