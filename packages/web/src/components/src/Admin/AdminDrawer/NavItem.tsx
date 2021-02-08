import { Button, Collapse, ListItem } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import StyledNavLink from "./NavLinkItem";

interface Props {
  readonly title: string;
  readonly depth: number;
  readonly className?: string;
  readonly children?: any;
  readonly path?: any;
  readonly icon?: string;
  readonly info?: string;
  readonly open?: boolean;
}

export default function NavItem({
  title,
  path,
  depth,
  className,
  children,
  icon: Icon,
  open: openProp,
  info: Info,
  ...rest
}: Props) {
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  if (children) {
    return (
      <ListItem disableGutters key={title} component={StyledItem} {...rest}>
        <StyledButton onClick={handleToggle} depth={depth}>
          {Icon && (
            <StyledIcon>
              <Icon />
            </StyledIcon>
          )}
          <StyledTitle>{title}</StyledTitle>
          <Chevron>{open ? "asd" : "down"}</Chevron>
        </StyledButton>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      disableGutters
      key={title}
      onClick={handleToggle}
      component={StyledItem}
      {...rest}
    >
      <StyledNavLink
        to={path}
        depth={depth}
        size="large"
        scroll={(el) => scrollWidthOffset(el)}
      >
        <StyledTitle>{title}</StyledTitle>
      </StyledNavLink>
    </ListItem>
  );
}

const Chevron = styled.div`
  && {
    display: flex;
  }
`;

const StyledItem = styled.li`
  && {
    display: block;
    padding: .5rem 0;
    font-family: "Poppins", sans-serif;
  }
`;

const StyledButton = styled(Button)<{ depth?: number; active?: boolean }>`
  ${({ theme, depth = 0 }) => `
    && {
      color: ${theme.palette.text.primary};
      justify-content: flex-start;
      text-transform: none;
      letter-spacing: 0;
      width: 100%;
      & :hover {

      }
      ${
        depth === 0
          ? `font-weight: ${theme.typography.fontWeightMedium};`
          : `font-weight: ${theme.typography.fontWeightRegular};
       padding-left: ${40 + 8 * depth}px;`
      }
    }
`}
`;

const StyledIcon = styled.div`
  && {
    display: flex;
    margin-right: 15px;
  }
`;

const StyledTitle = styled.span`
  && {
    margin-left: auto;
    font-size: 1rem;
  }
`;
