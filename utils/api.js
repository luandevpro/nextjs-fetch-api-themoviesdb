import axios from 'axios'
import * as Types from '../constants/ActionTypes'

export const CallAPI = (endpoint, method = 'get', body) => {
   return axios({
      url: `${Types.URl_API}`,
      method: method,
      data: body
   }).catch(err => console.log(err))
}


export const CallAPIInfo = (id, method = 'get', body) => {
   return axios({
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=8d8e6405b1d127dcbe031bd2b3e85c3b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
      method: method,
      data: body
   }).catch(err => console.log(err))
}