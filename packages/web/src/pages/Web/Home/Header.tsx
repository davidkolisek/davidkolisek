import { Box, Container, Fade, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { altLogo } from "src/components/src/Logo";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

export function Header() {
  const history = useHistory();
  return ( 
    <Wrapper alignItems="center" justifyContent="center" display="flex" py={6} textAlign="center">
      <Container maxWidth="xl">
        <Box>
          <Photo
            src="https://media-exp1.licdn.com/dms/image/C4D03AQF4VmRJRFF65A/profile-displayphoto-shrink_800_800/0/1578394287274?e=1617840000&v=beta&t=2VsXfXppXBnGAOdq7M_TL0TwWSWNd41FFI1dYIjLDZM"
            alt={altLogo}
          />
        </Box>
        <Box mt={2}>
          <SocialList>
            <li>
              <a
                href="https://github.com/davidkolisek"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="mailto:kolisek.david@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <EmailIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/d%C3%A1vid-kol%C3%ADsek-73048011a/"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon />
              </a>
            </li>
          </SocialList>
        </Box>
        <Box pt={3} pb={1}>
          <Typography component="h1" variant="h1" color="textPrimary">
            davidkolisek
          </Typography>
          <Typography component="p" variant="body1" color="textPrimary">
            Frontend Developer
          </Typography>
        </Box>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  min-height: 33vh;
`;

const Photo = styled.img`
  width: 6rem;
  border-radius: 99px;
  border: 2px dashed ${({ theme }) => theme.palette.text.secondary};
`;

const SocialList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    display: inline-block;
    &:hover {
      a {
        opacity: 1;
        transition: all ease 150ms;
      }
    }
    a {
      color: ${({ theme }) => theme.palette.text.social};
      opacity: 0.6;
      transition: all ease 150ms;
      svg {
        font-size: 1.5rem;
      }
    }
    &:last-child {
      a {
      }
    }
  }
`;
