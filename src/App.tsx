import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./componets/footer/Footer"
import Navbar from "./componets/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./login/Login"
import { AuthProvider } from "./contexts/AuthContex"

function App() {

  // codigo TypeScript

  return (
    // codigo TSX => HTML + CSS
    <>
      {/*< h1>Truma JavaScript 05 é top</h1>
    <h2>O React é divertido!</h2>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, numquam dolorem voluptatem hic, sunt et, ipsa corrupti distinctio vero doloribus culpa maiores iste. Voluptate dolorum rem pariatur odit excepturi. Vero. </p >*/}
      <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
      
    </>
  )
}

export default App
