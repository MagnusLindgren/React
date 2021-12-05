import { useState, useEffect } from "react"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa"

export const SearchBar = props => {
    const [searchTerm, setSearchTerm] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        if (!searchTerm || searchTerm === '') return
        props.findHero(searchTerm)
    }

    useEffect(() => {
        props.findHero()
    }, [])

    return (
        <div>
            <SearchWrapper>
                <SearchBarStyle onSubmit={onSubmit}>
                    <Input
                        type="text"                    
                        placeholder="Search your hero..."
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}
                    />
                    <Button type="submit" ><FaSearch /></Button>         
                </SearchBarStyle>
            </SearchWrapper>
        </div>
    )
    
}

const SearchBarStyle = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 30px;
`
const SearchWrapper = styled.div`
    margin-bottom: 3rem;
`
const Input = styled.input`
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
const Button = styled.button`
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