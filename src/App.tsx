import "./App.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import { AuthProvider } from "./contexts/AuthContex";
import Navbar from "./componets/navbar/Navbar";
import Login from "./pages/login/Login";
import ListaTemas from "./componets/temas/listaTemas/ListaTemas";
import FormularioTema from "./componets/temas/formularioTema/FormularioTema";
import DeletarTema from "./componets/temas/deletarTema/DeletarTema";
import Footer from "./componets/footer/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;