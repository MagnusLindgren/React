import Axios from "axios"
import CryptoJS from "crypto-js"

const privateKey = "b007589db8518dcbb941ed7bdef21b3840498b0a";
const publicKey = "b52df188d35ef1bbeef3878e0342661c";
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const MarvelApi = Axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
            ts: ts,
            apikey: publicKey,
            hash: hash,
        }
})

export default MarvelApi