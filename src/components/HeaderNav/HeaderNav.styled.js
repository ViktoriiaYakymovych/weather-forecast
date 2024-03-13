import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Header = styled.header`
  position: static;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 1200px;
  padding: 14px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Link = styled(NavLink)`
  padding: 4px 16px;
  border: 1px solid #002244;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #002244;
    color: #eef2f7;
  }
`;
