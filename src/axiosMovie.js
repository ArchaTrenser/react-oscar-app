import axios from 'axios';

const movieApiHanlder = axios.create({
    baseURL:`https://api.themoviedb.org/`
})

export default movieApiHanlder;

