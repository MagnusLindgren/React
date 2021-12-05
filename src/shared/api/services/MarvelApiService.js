import http from "../MarvelApi"

const SearchMarvelCharacter = (name) => {
    return http.get(`/characters?nameStartsWith=${name}`)
} 

const SearchMarvelCharacterComics = (id) => {
    return http.get(`/characters?id=${id}`)
}

export default {
    SearchMarvelCharacter,
    SearchMarvelCharacterComics
}