import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  Grid,
  Hidden,
  Link,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  readonly title: string;
  readonly url: string;
}

export default function Footer() {
  const { t } = useTranslation("common");
  const footerLinks = [
    {
      title: t("footer.cookies"),
      url: ''
    },
  ];
  return (
    <Wrapper className="footer">
      <Box py={{ xs: 3, md: 3, lg: 3 }}>
        <Container maxWidth="xl">
          <Grid container alignItems="center">
            {/* <Grid item xs={12} md={12} lg={12}>
              <FooterBit>
                <Box mb={2}>
                  <Typography
                    variant="body2"
                    component="span"
                    className="footer-text"
                  >
                    <strong>{t("footer.navigation")}</strong>
                  </Typography>
                </Box>
                <ul>
                  {footerLinks.map(({ title, url }: Props) => (
                    <li key={title}>
                      <StyledLink to={url} component={RouterLink}>
                        <Typography variant="body2" className="footer-text">
                          {title}
                        </Typography>
                      </StyledLink>
                    </li>
                  ))}
                </ul>
              </FooterBit>
            </Grid> */}
            <Grid item xs={12} md={12} lg={12}>
              <CopyrightWrapper
                width="100%"
                textAlign={{ xs: "center", md: "center" }}
                pt={{ xs: 1, md: 0 }}
              >
                <Typography
                  variant="body2"
                  component="span"
                  className="footer-text"
                >
                  Copyright &copy; 2019 – {new Date().getFullYear()} davidkolisek |
          {' '}{t("footer.allRights")}
                </Typography>
              </CopyrightWrapper>
              {/* <FooterBit width="100%" textAlign={{ xs: "left", md: "center" }}>
                <ul>
                  {footerLinks.map(({ title, url }: Props) => (
                    <li key={title}>
                      <StyledLink to={url} component={RouterLink}>
                        <Typography variant="body2" className="footer-text">
                          {title}
                        </Typography>
                      </StyledLink>
                    </li>
                  ))}
                </ul>
              </FooterBit> */}
            </Grid>
            <Hidden mdDown>
              <Grid item lg={4} md={12} sm={12} xs={12}></Grid>
            </Hidden>
            <Grid item lg={2} md={3} sm={6} xs={12}></Grid>
          </Grid>
        </Container>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  &&& {
    position: relative;
    z-index: 3;
    background-color: ${({ theme }) => theme.palette.background.footer};
    .footer-text {
      color: ${({ theme }) => theme.palette.text.footer};
    }
    @media (max-width: 991px) {
      //padding-bottom: 5rem;
    }
  }
`;

const FooterBit = styled(Box)`
  &&& {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        margin-right: 24px;
        margin-bottom: 8px;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          left: -0.8rem;
          width: 2px;
          height: 100%;
          top: 0;
          bottom: 0;
          background: ${({ theme }) => theme.palette.text.footer};
          @media (max-width: 768px) {
            display: none;
          }
        }
        @media (max-width: 768px) {
          display: block;
          margin: 6px 0;
        }
        .footer-text {
          font-weight: 800;
        }
        &:first-child {
          &:before {
            display: none;
          }
        }
      }
    }
  }
`;

const CopyrightWrapper = styled(Box)`
  &&& {
    @media (max-width: 768px) {
      //border-top: 1px solid #35455a;
    }
  }
`;

const StyledLink = styled(Link)`
  &&& {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
