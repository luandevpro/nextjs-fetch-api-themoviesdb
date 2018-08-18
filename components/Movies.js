import styled from "styled-components"
import Overdrive from 'react-overdrive'
import Link from 'next/link'
import { POSTER_PATH } from '../constants/ActionTypes'
import { MovieInfo } from "../layouts/Layout"

export default ({movie}) => (
      <MovieInfo>
         <Link as={`/post/${movie.id}`} href={`/post?id=${movie.id}`}>
            <a>
               <Overdrive id={movie.poster_path}>
                  <Poster src={`${POSTER_PATH}/${movie.poster_path}`} alt={movie.title} />
               </Overdrive>
            </a>
         </Link>
      </MovieInfo>
)

export const Poster = styled.img`
   width: 100%;
`