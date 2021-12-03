import styled from "styled-components"

export const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 30px;
`
export const SearchWrapper = styled.div`
    margin-bottom: 3rem;
`
export const Input = styled.input`
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.3)
    );
    border: none;
    width: 80%;
    max-width: 400px;
    padding: 1rem;
    border-radius: 2rem 0 0 2rem;
    text-align: center;
    font-size: large;
    left: 100px;
    box-shadow: 6px 6px 20px rgb(0, 0, 0);
    outline: none;
    cursor: text;
`
export const Button = styled.button`
    position: relative;
    outline: none;
    height: 53px;
    width: 50px;
    font-size: large;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    border-radius: 0 2rem 2rem 0;
    border: none;
    box-shadow: 6px 6px 10px rgb(0, 0, 0);
    cursor: pointer;
`
export const HeroCardWrapper = styled.div`
    height: 80%;
    overflow-y: scroll;
`
export const HeroCard = styled.div`
    display: flex;
    background: -moz-linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.2),
        (rgba(255, 255, 255, 0.5))
    );
    width: 600px;
    border-radius: 1rem;
    margin: auto;
    padding: 1rem;
    box-shadow: 6px 6px 20px rgb(0, 0, 0);
    justify-content: space-between; 
`
export const HeroImg = styled.img`
    width: 12rem;
    height: 12rem;
`
export const HeroCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1em;
    height: 10rem;
`
export const CardInfo = styled.p`
    color: antiquewhite;
    font-size: 14px;
`