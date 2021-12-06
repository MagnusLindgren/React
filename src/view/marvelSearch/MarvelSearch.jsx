import { useState, useEffect } from "react"
import MarvelApiService from "../../shared/api/services/MarvelApiService"
import { SearchBar } from "../../component/SearchBar"
import { HeroThumbnail } from "../../component/HeroThumbnail"
import {
    NoData
} from "./marvelSearchStyle"

export const MarvelSearchView = () => {
    const [characters, setCharacters] = useState([])
    const [copyright, setCopyright] = useState('')

    const findHeros = async (searchterm) => {    
        try {
            const response = await MarvelApiService.SearchMarvelCharacters(searchterm)
            setCharacters(response.data.data.results)
            setCopyright(response.data.attributionText)
            console.log(response)
            console.log("Characters fetched")
        } catch (error) {
            console.log(error)
        }
    }

    /*const findComics = async (id) => {
        const response = await MarvelApiService.SearchMarvelCharacterComics(id)
        setComics(response.data.data.results[0].comics.items)
        console.log('Comics fetched')
    }*/
       
    useEffect(() => {
        findHeros()
    }, [])

    return (
        <div> 
            <SearchBar findHero={findHeros}/>
            {!characters ? <NoData>No Data</NoData> :
            <HeroThumbnail  characters={characters}
                            copyright={copyright}
            />}      
        </div>
    )
}