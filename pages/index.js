import styled from 'styled-components'
import Head from '../components/head'
import { Layout } from '../layouts/Layout'
import { CallAPI } from "../utils/api"
import Movies from '../components/Movies'

const Index = ({movies}) => (
      <Layout>
         <Head />
         <MovieGrip>
            {
               movies.results.map((movie,index) => {
                  return <Movies
                           key={index}
                           movie={movie}
                        />
               })
            }
         </MovieGrip>
      </Layout>
)

Index.getInitialProps = async () => {
   const res = await CallAPI('','get',null)
   const json = await res.data
   return {
      movies: json
   }
}
 
export default Index

export const MovieGrip = styled.div`
   display: grid;
   grid-template-columns: repeat(6,1fr);
   grid-gap: 5px 5px;
`