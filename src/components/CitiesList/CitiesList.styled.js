import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px;
  width: 240px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #002244;
  color: #eef2f7;
`;

export const Link = styled(NavLink)`
  padding: 4px 16px;
  border: 1px solid #eef2f7;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #eef2f7;
    color: #002244;
  }
`;
