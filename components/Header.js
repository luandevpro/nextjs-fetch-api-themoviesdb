import Link from 'next/link'
import styled from 'styled-components'

export default () => (
   <Navbar>
      <ul>
         <li>
            <Link href="/">
               <a>Home</a>
            </Link>
         </li>
         <li>
            <Link href="/about">
               <a>Movie</a>
            </Link>
         </li>
      </ul>
      <hr/>
   </Navbar>
)

export const Navbar = styled.div`
   ul {
      display: flex;
      height: 50px;
      line-height: 50px; 
      margin: 0;
   }
   ul li {
      list-style-type: none;
      margin-right: 30px;
   }
   hr {
      margin-top: 0;
   }
`