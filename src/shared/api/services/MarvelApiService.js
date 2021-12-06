import http from "../MarvelApi"

const SearchMarvelCharacters = (name) => {
    return http.get(`/characters?nameStartsWith=${name}`)
}

const SearchMarvelCharacter = (id) => {
    return http.get(`/characters/${id}`)
}

const SearchMarvelCharacterComics = (id) => {
    return http.get(`/characters/${id}/comics`)
}

export default {
    SearchMarvelCharacters,
    SearchMarvelCharacter,
    SearchMarvelCharacterComics
}