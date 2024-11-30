import { Routes, Route, Navigate } from "react-router-dom"
import { PadronPage, ReportesPage } from "../pages"

export const AlmacenRoutes = () => {

  return (

    <>
        <Routes>
          <Route path="padron/*" element={ <PadronPage />} />
          <Route path="reportes/*" element={ <ReportesPage />} />
        </Routes>
    </>

  )
}
