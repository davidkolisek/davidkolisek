import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import WebIcon from "@material-ui/icons/Web";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export function Portfolio() {
  const { t } = useTranslation("common");
  const sites = [
    {
      name: t("static.ceko.title"),
      url: "http://www.ceko.sk/",
      desc: t("static.ceko.desc"),
    },
    {
      name: t("static.prayogi.title"),
      url: "https://www.prayogi.sk/",
      desc: t("static.prayogi.desc"),
    },
    {
      name: t("static.villa.title"),
      url: "https://villaperledelamer.netlify.app/",
      desc: t("static.villa.desc"),
    },
  ];

  const react = [
    {
      name: t("react.vedr.title"),
      url: "https://www.vedr.sk/",
      desc: t("react.vedr.desc"),
    },
    {
      name: t("react.smallBang.title"),
      url: "https://smallbang.netlify.app/",
      desc: t("react.smallBang.desc"),
    },
    {
      name: t("react.prayogi.title"),
      url:
        "https://5f2c3d5d67743e0813a841be--trusting-noether-620b6c.netlify.app/dashboard",
      desc: t("react.prayogi.desc"),
    },
  ];

  const angular = [
    {
      name: t("angular.mymatch.title"),
      url: "https://mymatch-2017.firebaseapp.com/",
      desc: t("angular.mymatch.desc"),
    },
  ];

  return (
    <Box my={4}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box mb={3}>
              <StyledCard>
                <Box p={2}>
                  <Box mb={1}>
                    <Typography component="h2" variant="h2" color="textPrimary">
                      {t("static.title")}
                    </Typography>
                  </Box>
                  <List>
                    {sites.map((site) => (
                      <ListItem
                        key={site.url}
                        button
                        component={Link}
                        href={site.url}
                        target="blank"
                        rel="_noopener"
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <WebIcon fontSize="small" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={site.name}
                          secondary={
                            <Typography variant="subtitle2" color="textPrimary">
                              {site.desc}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </StyledCard>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box mb={3}>
              <StyledCard>
                <Box p={2}>
                  <Box mb={1}>
                    <Typography component="h2" variant="h2" color="textPrimary">
                      {t("react.title")}
                    </Typography>
                  </Box>
                  <List>
                    {react.map((item) => (
                      <ListItem
                        key={item.url}
                        button
                        component={Link}
                        href={item.url}
                        target="blank"
                        rel="_noopener"
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <CodeIcon fontSize="small" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.name}
                          secondary={
                            <Typography variant="subtitle2" color="textPrimary">
                              {item.desc}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </StyledCard>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box mb={3}>
              <StyledCard>
                <Box p={2}>
                  <Box mb={1}>
                    <Typography component="h2" variant="h2" color="textPrimary">
                      {t("angular.title")}
                    </Typography>
                  </Box>
                  <List>
                    {angular.map((item) => (
                      <ListItem
                        key={item.url}
                        button
                        component={Link}
                        href={item.url}
                        target="blank"
                        rel="_noopener"
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <DeveloperModeIcon fontSize="small" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.name}
                          secondary={
                            <Typography variant="subtitle2" color="textPrimary">
                              {item.desc}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </StyledCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const StyledCard = styled(Card)`
  &&& {
    border: 0;
    box-shadow: none;
  }
`;
