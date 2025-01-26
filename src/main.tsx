import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter/Counter.tsx'
import Carshop from './components/Carshop/Carshop.tsx'
import Sendwich from './components/Sendwich/Sendwich.tsx'
import PostContainer from './components/PostContainer/index.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Carshop />
    |<Counter />
    <Sendwich />
    <PostContainer />
    {/* <App /> */}
  </StrictMode>,
)
