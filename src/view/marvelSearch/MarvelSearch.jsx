import { useState, useEffect } from "react"
import SearchMarvelCharacter from "../../shared/api/services/MarvelApiService"
import { FaSearch } from "react-icons/fa"
import {    
    SearchBar, 
    SearchWrapper,
    Input,
    Button
    } from "./marvelSearchStyle"

export const MarvelSearchView = () => {
    const [serverResponse, setServerResponse] = useState()
    const [search, setSearch] = useState('')

    const findHero = async () => {
        try {
            const response = await SearchMarvelCharacter.SearchMarvelCharacter(search)
            setServerResponse(response.data.data.results[0])
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const displayData = () => {
        const img = `${serverResponse?.thumbnail.path}/portrait_uncanny.jpg}`
        return (
            <div>
                <img src={img} alt="" />
                {serverResponse?.name && <h1>name: {serverResponse?.name}</h1>}
                {serverResponse?.description && <p> about: {serverResponse?.description}</p>}
            </div>
        )
    }

    useEffect(() => {
        if (search !== '') {
        const timer = setTimeout(() => {
            search && findHero()
        }, 1000)
        return () => clearTimeout(timer)
    }
    }, [search])

    return (
        <div>
            <SearchWrapper>
                <SearchBar>                 
                    <Input onChange={(event) => setSearch(event.target.value)} placeholder="Search your hero..." />
                    <Button type="button" ><FaSearch /></Button>         
                </SearchBar>
            </SearchWrapper>
        
        {displayData()}
        </div>
    )
}