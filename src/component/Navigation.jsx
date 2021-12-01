import { useNavigate } from "react-router-dom"
import RoutingPath from "../routes/RoutingPath"
import styled from "styled-components"

export const Navigation = () => {
    const navigate = useNavigate();

    return (
        <Div>
            <div>
                <p onClick={() => navigate(RoutingPath.homeView)}>Home</p>
                <p onClick={() => navigate(RoutingPath.marvelSearchView)}>Marvel Search</p>
                <p onClick={() => navigate(RoutingPath.aboutView)}>About</p>
                <p onClick={() => navigate(RoutingPath.contactView)}>Contact</p>
            </div>
        </Div>
    )
}

const Div = styled.div`
    display: grid;
    grid-template-columns: 50px;
`
