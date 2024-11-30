import { Routes, Route } from "react-router-dom"
import { FichaPrograma } from "../pages"

export const AlineacionRoutes = () => {

  return (

    <>
        <Routes>
            <Route path = "fichaprograma/*" element = { <FichaPrograma/> }/>
        </Routes>
    </>

  )
}
