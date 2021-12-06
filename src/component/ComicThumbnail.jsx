import styled from "styled-components"

export const ComicThumbnail = props => {
    return (
        <div> Comics
            <Wrapper>
            {props.comics.map((comic, i) => {
                const img = `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`
                return (
                    <Card key={i}>
                        <ImgContainer>
                        <ComicImg src={img}/>
                        </ImgContainer>
                        <ComicTitle>{comic?.title}</ComicTitle>
                    </Card>
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
    @media (max-width: 992px) {
        grid-template-columns: repeat(3, auto);
    }  
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, auto);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, auto);
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
    min-height: 310px;
    height: 300px;
    border-radius: 1rem;
    padding: 5px;
    margin: 5px;
    box-shadow: 6px 6px 20px rgb(0, 0, 0);
    cursor: pointer;     
`
const ImgContainer = styled.div`
    width: 240px;
    height: 240px;
    margin: auto;
    justify-content: space-between;
`
const ComicImg = styled.img`
    width: inherit;
    height: inherit;
`
const ComicTitle = styled.p`
    text-align: center;
    color: #fbca03;
    text-shadow: 1px 1px #ff0000;
    margin-bottom: 1rem;
`