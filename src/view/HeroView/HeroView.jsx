import { HeroCard } from "../../component/HeroCard"
import { ComicThumbnail } from "../../component/ComicThumbnail"
import MarvelApiService from "../../shared/api/services/MarvelApiService"
import { useState, useEffect } from "react"
import { useLocation } from "react-router"

export const HeroView = () => {
    const [character, setCharacter] = useState()
    const [copyright, setCopyright] = useState('')
    const [comics, setComics] = useState([])
    const { state } = useLocation()
    const { id } = state

    const findHero = async () => {    
        try {
            const response = await MarvelApiService.SearchMarvelCharacter(id)
            setCharacter(response.data.data.results[0])
            setCopyright(response.data.attributionText)
            console.log(response)
            console.log("Characters fetched")
            findComics(response.data.data.results[0].id)
        } catch (error) {
            console.log(error)
        }
    }

    const findComics = async (id) => {
        const response = await MarvelApiService.SearchMarvelCharacterComics(id)
        setComics(response.data.data.results)
        console.log(response)
    }

    useEffect(() => {
        findHero()
    }, [])

    return (
        <div>
            <HeroCard
                character={character}
                copyright={copyright} 
            />
            <ComicThumbnail 
                comics={comics}
            />
        </div>
    )
}
