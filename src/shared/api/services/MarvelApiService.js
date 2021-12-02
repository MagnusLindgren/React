import http from "../MarvelApi"

const SearchMarvelCharacter = (name) => {
    return http.get(`/characters?name=${name}`)
}    

export default {
    SearchMarvelCharacter
}