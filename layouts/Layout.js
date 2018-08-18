import styled from 'styled-components'
import Header from '../components/Header'

export const Layout = ({children}) => (
   <div>
      <Header />
      {children}
   </div>
)



export const MovieInfo = styled.div`
   width: 100%;
`

