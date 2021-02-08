import {
  Box,
  Drawer,
  IconButton,
  List,
  Paper,
  SvgIcon,
} from "@material-ui/core";
import React, { useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { matchPath, useLocation } from "react-router";
import styled from "styled-components";
import NavItem from "./NavItem";
import { Close } from "@material-ui/icons";
import { admin } from "../../../../pages/Routes";

const navConfig = [
  {
    items: [
      {
        title: 'Vstavane skrine',
        path: admin.vstavaneSkrine
      },
      {
        title: 'Kuchyne',
        path: admin.kuchyne
      },
      {
        title: 'Nabytok',
        path: admin.nabytok
      },
      {
        title: 'Materialy',
        path: admin.materialy
      },
    ],
  },
];

function renderNavItems({
  items,
  pathname,
  depth,
}: {
  items: any[];
  pathname: string;
  depth?: number;
}) {
  return (
    <List disablePadding key={1}>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth = 0,
}: {
  acc: any[];
  pathname: string;
  item: any;
  depth?: number;
}): any[] {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.path,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        path={item.path}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
}

interface Props {
  readonly openMobile: boolean;
  readonly onMobileClose: any;
}

export default function AdminDrawer({ openMobile, onMobileClose }: Props) {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Box p={2} onClick={onMobileClose}>
          <Box textAlign="right" width="100%">
            <StyledIconButton onClick={onMobileClose} size="small" color="secondary">
              <SvgIcon fontSize="small">
                <Close />
              </SvgIcon>
            </StyledIconButton>
          </Box>
          {navConfig.map((config) => (
            <List key={1}>
              {renderNavItems({
                items: config.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
      </PerfectScrollbar>
    </Box>
  );
  return (
    <>
      <Drawer
        anchor="left"
        onClose={onMobileClose}
        open={openMobile}
        variant="permanent"
        PaperProps={{ component: StyledPaper }}
      >
        {content}
      </Drawer>
    </>
  );
}

const StyledPaper = styled(Paper)`
  && {
    top: 64px;
    min-height: 100%;
    border-radius: 0px;
    width: 240px;
    @media (min-width: 960px) {
      top: 0;
      height: calc(100% - 64px);
      position: relative;
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    /* color: ${({ theme }) => theme.palette.primary.main}; */
  }
`;
