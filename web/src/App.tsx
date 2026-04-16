import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { MisionPage } from './pages/MisionPage'
import { ProgramaPage } from './pages/ProgramaPage'
import { ProyectoPage } from './pages/ProyectoPage'
import { ProyectosListPage } from './pages/ProyectosListPage'
import { ContactoPage } from './pages/ContactoPage'
import { DocumentosPage } from './pages/DocumentosPage'
import { AliadosPage } from './pages/AliadosPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mision" element={<MisionPage />} />
        <Route path="/programas/:slug" element={<ProgramaPage />} />
        <Route path="/proyectos" element={<ProyectosListPage />} />
        <Route path="/proyectos/:slug" element={<ProyectoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/documentos" element={<DocumentosPage />} />
        <Route path="/aliados" element={<AliadosPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
