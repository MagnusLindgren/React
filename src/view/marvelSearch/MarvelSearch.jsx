import { useState, useEffect } from "react"
import SearchMarvelCharacter from "../../shared/api/services/MarvelApiService"
import { SearchBar } from "../../component/SearchBar"
import { HeroCard } from "../../component/HeroCard"
import {
    NoData
} from "./marvelSearchStyle"

export const MarvelSearchView = () => {
    const [character, setCharacter] = useState()
    const [copyright, setCopyright] = useState()

    const findHero = async (searchterm) => {    
        try {
            const response = await SearchMarvelCharacter.SearchMarvelCharacter(searchterm)
            setCharacter(response.data.data.results[0])
            setCopyright(response.data.attributionText)
            //setComics(response.data.data.results[0].comics.items)
            console.log(response)
            //console.log(comics)
        } catch (error) {
            console.log(error)
        }
    }

    /*const displayComics = () => {       
        comics.map((comic) => {
            return(                
                <div>
                    {comic?.title && <h1>{comic?.title}</h1>}
                </div>                    
            )
        }) 
    }     */   
    
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
        </div>
    )
}