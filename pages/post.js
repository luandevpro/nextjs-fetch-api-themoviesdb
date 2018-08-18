import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { BACKDROP_PATH , POSTER_PATH } from '../constants/ActionTypes'
import { Layout } from '../layouts/Layout'
import { CallAPIInfo } from '../utils/api'
import { Poster } from '../components/Movies'

export default function Post({movie}){
   return (
      <Layout>
         <MovieBackground backdrop_path={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.original_title}>
            <MovieInfo>
               <Overdrive id={movie.poster_path} >
                  <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.original_title}/>
               </Overdrive>
               <div>
                  <h1>{movie.original_title}</h1>
                  <p>{movie.overview}</p>
                  <h5>{movie.vote_average} - {movie.vote_count} - {movie.tagline}</h5>
               </div>
            </MovieInfo>
         </MovieBackground>
      </Layout>
   )
}

Post.getInitialProps = async ({query}) => {
   const { id } = query
   const res = await CallAPIInfo(id ,'get',null)
   return { movie: res.data }
}

const MovieBackground = styled.div`
   background: url(${props => props.backdrop_path}) no-repeat;
   position: relative;
   padding-top: 50vh;
   background-size: cover;
`

const MovieInfo = styled.div`
   background: white;
   padding: 2rem 10%;
   text-align: left;
   display: flex;
   > div {
      margin-left: 20px;
      > p {
         text-align: justify;
      }
   }
   img {
      position: relative;
      top: -5rem;
      width: 180px;
      height: 250px;
   }
   
`;