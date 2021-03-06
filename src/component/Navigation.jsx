import { useNavigate } from "react-router-dom"
import RoutingPath from "../routes/RoutingPath"
import styled from "styled-components"

export const Navigation = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Nav>
                <NavMenu>
                    <NavItem onClick={() => navigate(RoutingPath.marvelSearchView)}>Marvel Search</NavItem>
                </NavMenu>
            </Nav>
        </div>
    )
}

const Nav = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  z-index: 12;
  padding: 1rem;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.774),
    rgba(233, 33, 33, 0.144)
  );
`
const NavItem = styled.div`
  color: #fbca03;
  font-weight: 600;
  font-size: 24px;
  opacity: 0.8;
  text-shadow: 2px 1px #ff0000;
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
  white-space: nowrap;
`