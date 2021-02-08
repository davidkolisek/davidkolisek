import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 400;
  display: inline-block;
  margin: 0 16px;
  text-decoration: none;
  font-size: 1rem;
  padding: 0 0.5rem;
  //border-bottom: 2px solid transparent;
  &.active {
    // border-bottom: 2px solid ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  @media (max-width: 991px) {
    margin: 0 14px;
  }
  @media (max-width: 820px) {
    margin: 0 10px;
  }
  @media (max-width: 767px) {
    padding: 1rem 0;
    margin: 0.25rem 0;
    width: 100%;
    display: block;
    position: relative;

  color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export default StyledNavLink;
