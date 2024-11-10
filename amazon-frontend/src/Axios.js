import axios from 'axios'

//to acess api

const instance=axios.create({
    baseURL:"http://localhost:8000",
});

export default instance;