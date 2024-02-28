export type RoutStackParams = {
    Home:undefined
    Detail:arti
}

export type PostNews = {
    data?:unknown
    loading:boolean,
    error:boolean
}

export type article = {
    articles?:arti[]
    status?:unknown
}
type arti ={
    urlToImage:string
    author:string
    title:string
    publishedAt:string
    description:string
    content:string
    
}