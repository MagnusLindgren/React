import { useState, useEffect } from "react"
import SearchMarvelCharacter from "../../shared/api/services/MarvelApiService"
import { SearchBar } from "../../component/SearchBar"
import { HeroCard } from "../../component/HeroCard"
import {
    NoData
} from "./marvelSearchStyle"

export const MarvelSearchView = () => {
    const [character, setCharacter] = useState([])
    const [copyright, setCopyright] = useState()
    const [comics, setComics] = useState([])

    const findHero = async (searchterm) => {    
        try {
            const response = await SearchMarvelCharacter.SearchMarvelCharacter(searchterm)
            setCharacter(response.data.data.results[0])
            setCopyright(response.data.attributionText)
            console.log(response)
            findComics(response.data.data.results[0].id)
        } catch (error) {
            console.log(error)
        }
    }

    const findComics = async (id) => {
        const response = await SearchMarvelCharacter.SearchMarvelCharacterComics(id)
        setComics(response.data.data.results[0].comics.items)
        console.log('Comics fetched')
    }
       
    useEffect(() => {
        findHero()
    }, [])

    return (
        <div>            
            <SearchBar findHero={findHero}/>
            {!character ? <NoData>No Data</NoData> :
            <HeroCard   character={character}
                        copyright={copyright}
            />} 
            <div>{comics.map((comic) => {
            return(                
                <div>
                    {comic?.name && <p>{comic?.name}</p>}
                </div>                    
            )
        }) }</div>      
        </div>
    )
}