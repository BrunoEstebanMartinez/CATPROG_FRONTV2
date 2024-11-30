import { Routes, Route, Navigate } from "react-router-dom"
import { AsignacionPage, VerificacionPage } from "../pages"

export const RecomendacionRoutes = () => {

  return (

    <>
        <Routes>
          <Route path="verificacion/*" element={ <VerificacionPage />} />
          <Route path="asignacion/*" element={ <AsignacionPage />} />
        </Routes>
    </>

  )
}
