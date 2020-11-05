import axios from 'axios'

export default {
  get: (keyword) =>
  axios({
      'method':'GET',
      'url':`https://api.themoviedb.org/3/search/movie?language=en-US&query=${keyword}&page=1&include_adult=false&api_key=fd1ef7684e934e99a543c5d53e8eaba3`,
      'headers': {
          'content-type':'text/plain',
      },
      // 'params': {
      //     'search':'parameter',
      // },
  })
}