import Wrapper from "./components/Wrapper"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/Signup"
import Info from "./pages/Info"

const App = () => {
  return(
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/info" element={<Info/>}/>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App