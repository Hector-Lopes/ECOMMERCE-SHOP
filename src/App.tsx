import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// const App: FunctionComponent<AppProps> = ({ message }) => {
//   return <h1>{message}</h1>
// }

export default App
