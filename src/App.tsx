import { FunctionComponent, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import User from '../src/types/user'
import Loading from './components/loading/loading.component'
import ExplorePage from './pages/explore/explore.page'
import CategoryDetailsPage from './pages/category-details/category-details.page'
import Cart from './components/cart/cart-component'
import CheckoutPage from './pages/checkout/checkout.page'
import AuthenticationGuard from './guard/authentication.guard'
import PaymentConfirmationPage from './pages/payment-confirmation/payment-confirmation.page'
import { useDispatch, useSelector } from 'react-redux'
const App = () => {
  // const { loginUser, isAuthenticated, logoutUser } = useContext(UserContext)
  const dispach = useDispatch()
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const [isInitializing, setIsnitializing] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user
      if (isSigningOut) {
        // logoutUser()
        dispach({ type: 'LOGOUT_USER' })
        return setIsnitializing(false)
      }

      const isSigninIn = !isAuthenticated && user
      if (isSigninIn) {
        const querySnapshot = await getDocs(
          query(collection(db, 'users'), where('id', '==', user.uid))
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()
        // loginUser(userFromFirestore as User)
        dispach({ type: 'LOGIN_USER', payload: userFromFirestore })

        return setIsnitializing(false)
      }
      return setIsnitializing(false)
    })
  }, [dispach])
  if (isInitializing) {
    return <Loading></Loading>
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/explore' element={<ExplorePage></ExplorePage>}></Route>
          <Route
            path='/checkout'
            element={
              <AuthenticationGuard>
                <CheckoutPage></CheckoutPage>
              </AuthenticationGuard>
            }
          ></Route>
          <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
          <Route
            path='/category/:id'
            element={<CategoryDetailsPage></CategoryDetailsPage>}
          ></Route>
          <Route
            path='/payment-confirmation'
            element={<PaymentConfirmationPage></PaymentConfirmationPage>}
          ></Route>
        </Routes>
        <Cart></Cart>
      </BrowserRouter>
    </>
  )
}

// const App: FunctionComponent<AppProps> = ({ message }) => {
//   return <h1>{message}</h1>
// }

export default App
