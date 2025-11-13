import Header from './components/Header'
import Login from './Login'
import Layout from './components/Layout'
import Signup from './Signup'
import { Routes,Route } from 'react-router'

  function App() {

    return (
      <>
        {/* <Header/> */}
        {/* <Layout/> */}
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element ={<Layout/>}/>
        </Routes>
      </>
    )
  }

  export default App
