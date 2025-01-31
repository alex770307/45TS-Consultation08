import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Counter from './components/Counter/Counter.tsx'
// import Carshop from './components/Carshop/Carshop.tsx'
// import Sendwich from './components/Sendwich/Sendwich.tsx'
// import PostContainer from './components/PostContainer/index.tsx'
// import Playground from './components/Playground/Playground.tsx'

import Coctail from './components/Coctail/Coctail.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Playground /> */}
    {/* <Carshop /> */}
    {/* |<Counter /> */}
    {/* <Sendwich /> */}
    {/* <PostContainer /> */}
    
     <Coctail />
  </StrictMode>,
)
