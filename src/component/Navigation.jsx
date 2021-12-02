import { useNavigate } from "react-router-dom"
import RoutingPath from "../routes/RoutingPath"
import styled from "styled-components"

export const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Nav>
                <NavMenu>
                    <NavItem onClick={() => navigate(RoutingPath.homeView)}>Home</NavItem>
                    <NavItem onClick={() => navigate(RoutingPath.marvelSearchView)}>Marvel Search</NavItem>
                    <NavItem onClick={() => navigate(RoutingPath.aboutView)}>About</NavItem>
                    <NavItem onClick={() => navigate(RoutingPath.contactView)}>Contact</NavItem>
                </NavMenu>
            </Nav>
        </div>
    )
}

const Nav = styled.div`
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    padding: 1rem;
    background: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.774),
      rgba(233, 33, 33, 0.144)
    );
`
const NavItem = styled.div`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`