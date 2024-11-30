import { Routes, Route, Navigate } from "react-router-dom"
import { BandejaPage, CatalogosPage, UsuarioPage } from "../pages"

export const CatalogoRoutes = () => {

  return (

    <>
        <Routes>
          <Route path="usuario/*" element={ <UsuarioPage />} />
          <Route path="bandeja/*" element={ <BandejaPage />} />
          <Route path="catalogos/*" element={ <CatalogosPage />} />
          {/* <Route path="/*" element= { <Navigate to={"usuario"}/> } /> */}
        </Routes>
    </>

  )
}
