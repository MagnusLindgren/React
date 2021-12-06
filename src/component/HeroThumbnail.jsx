import styled from "styled-components"
import { useNavigate } from "react-router"
import RoutingPath from "../routes/RoutingPath"

export const HeroThumbnail = props => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        console.log(id)
        navigate(RoutingPath.heroView, {state: {id: id}})
    }
    
    return (
        <div>
            <p>{props.copyright} </p>
            <Wrapper>

                {props.characters.map((character, i) => {
                    const img = `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`
                    return (
                        <div>
                            <Card key={i} onClick={() => handleClick(character?.id)}>
                                <ImgContainer>
                                    <HeroImg src={img} alt="Hero Thumbnail" />
                                </ImgContainer>
                                <HeroName>{character?.name}</HeroName>
                            </Card>
                        </div>
                    )
                })}
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,auto);
    padding: 5px;
    margin: 5px;  
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, auto);
      } 
`

const Card = styled.div`
    position: relative;
    display: grid;
    background: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.5)
    );
    min-width: 280px;
    width: 280px;
    min-height: 290px;
    height: 290px;
    border-radius: 1rem;
    margin: auto;
    padding: 1rem;
    box-shadow: 6px 6px 20px rgb(0, 0, 0);
    cursor: pointer;    
`
const ImgContainer = styled.div`
    width: 240px;
    height: 240px;
    margin: auto;
    justify-content: space-between;
`
const HeroImg = styled.img`
    width: inherit;
    height: inherit;
`
const HeroName = styled.p`
    text-align: center;
    color: #fbca03;
    text-shadow: 1px 1px #ff0000;
    margin-bottom: 1rem;
`
