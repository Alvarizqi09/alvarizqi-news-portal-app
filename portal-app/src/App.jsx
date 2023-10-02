import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from 'axios'

import Home from "./pages/home"
import Detail from "./pages/detail"

const App = () => {

  axios.defaults.baseURL = 'https://newsapi.org/v2/top-headlines?apiKey=6072d7b6367e458eb084484e595bf216&country=id&category=sports'

  return (
  <BrowserRouter>
      <Routes>
         <Route element={<Home/>} path="/"/>
         <Route element={<Detail/>} path="/detail/:id"/>
      </Routes>
  </BrowserRouter>
  )
}

export default App