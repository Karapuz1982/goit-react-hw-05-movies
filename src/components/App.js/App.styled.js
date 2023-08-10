import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const Header = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid green;
  
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  color: blue;
  text-decoration: none;
  margin-right: 10px;

  &:active {
    text-decoration: none;
    color: white;
    background-color: green;
  }
`;




