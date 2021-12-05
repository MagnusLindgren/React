import styled from "styled-components"

export const HeroCard = props => {
    const img = `${props.character?.thumbnail?.path}.${props.character?.thumbnail?.extension}`
    return (
        <div>
            <Card>
                <HeroImg src={img} alt="Hero Thumbnail" />                
                <CardInfoBox>
                    <h2>{props.character?.name}</h2>
                    <CardInfo>
                        {!props.character?.description ? <p> No description</p>:props.character?.description}
                    </CardInfo>
                    <Copyright>{props.copyright} </Copyright>                        
                    </CardInfoBox>
            </Card>
        </div>
    )
}

const Card = styled.div`position: relative;
    display: flex;
    background: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.5)
    );
    width: 600px;
    border-radius: 1rem;
    margin: auto;
    padding: 1rem;
    box-shadow: 6px 6px 20px rgb(0, 0, 0);    
`
const HeroImg = styled.img`
    width: 192px;
    height: 192px;
`
const CardInfoBox = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1em;
    height: 10rem;
`
const CardInfo = styled.p`
    color: antiquewhite;
    font-size: 14px;
`
const Copyright = styled.p`
text-align: center;
color: #fbca03;
text-shadow: 1px 1px #ff0000;
position: absolute;
bottom: 0;
margin-bottom: 1rem;
`