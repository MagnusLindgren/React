import { useState, useEffect } from "react"
import SearchMarvelCharacter from "../../shared/api/services/MarvelApiService"
import { FaSearch } from "react-icons/fa"
import {    
    SearchBar, 
    SearchWrapper,
    Input,
    Button,
    HeroCard,
    HeroCardInfo,
    HeroCardWrapper,
    HeroImg,
    CardInfo
    } from "./marvelSearchStyle"

export const MarvelSearchView = () => {
    const [character, setCharacter] = useState()
    const [copyright, setCopyright] = useState()
    const [comics, setComics] = useState([])
    const [search, setSearch] = useState('')
    const [noData, setData] = useState(true)

    const findHero = async () => {
        try {
            setData(false)
            const response = await SearchMarvelCharacter.SearchMarvelCharacter(search)
            setCharacter(response.data.data.results[0])
            setCopyright(response.data.attributionText)
            //setComics(response.data.data.results[0].comics.items)
            console.log(response)
            //console.log(comics)
        } catch (error) {
            setData(true)
            console.log(error)
        }
    }

    const displayCharacter = () => {
        const img = `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`
        return (
            <HeroCard>
                <HeroImg src={img} alt="" />                
                    <HeroCardInfo>
                        <h2>{character?.name}</h2>
                        <CardInfo>
                            {character?.description}
                        </CardInfo> 
                        {copyright}                           
                    </HeroCardInfo>
            </HeroCard>
        )
    }

    const displayComics = () => {       
        comics.map((comic) => {
            return(                
                <div>
                    {comic?.title && <h1>{comic?.title}</h1>}
                </div>                    
            )
        }) 
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
            {!noData ? displayCharacter() : <h1>No data</h1>}
        </div>
    )
}