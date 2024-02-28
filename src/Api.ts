
import axios from "axios"

export const API = axios.create({
    baseURL:"https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=3ab1bbd9c5c7403cabe63ffab62092f7"
})