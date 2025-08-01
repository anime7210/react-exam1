import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import { Home } from './pages/home'
import { About } from './pages/about'
import Navbar from './components/navbar'
import { lazy, Suspense, useEffect } from 'react'
import NotFoundPage from './pages/404'
import ProtectedRoute from './components/navbar/protectedRoute'
import LoginPage from './pages/loginPage'
import SingleProduct from './pages/singleProduct'

const LazyContact = lazy(() => import("./pages/contact"))

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify({ name: "Asdf", email: "stichgerkl10@gmail.com", password: "123456" }))
  }, [])
  useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            navigate("/login", {replace: true})
            return
        }
    },[])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/product/:id' element={<ProtectedRoute>
          <SingleProduct/>
        </ProtectedRoute>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
        <Route path='/contact' element={<ProtectedRoute>
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyContact />
          </Suspense></ProtectedRoute>} />
        <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
