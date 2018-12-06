
const  key ="35624b10f2d190af89f00ddcdb909ed2";
const url ={
    folder : 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
    searchURL : `3/search/movie?api_key=${key}&language=en-US&page=1&query=`,
    searchKeyword : `3/search/keyword?api_key=${key}&page=1&query=`,
    searchId : `3/movie/550?api_key=${key}`,
    listURL : `3/movie/550/lists?api_key=${key}&language=en-US&page=1`,
    jsonURL : '/movielist.json',
    backdrop_path:`https://image.tmdb.org/t/p/original/`,
    profile_path:`https://image.tmdb.org/t/p/w138_and_h175_face`
}
export default url;