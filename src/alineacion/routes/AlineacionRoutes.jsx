import { Routes, Route } from "react-router-dom"
import { FichaPrograma, FichaGlobal } from "../pages"

export const AlineacionRoutes = () => {

  return (

    <>
        <Routes>
            <Route path = "fichaprograma/*" element = { <FichaPrograma/> }/>
            <Route path = "fichaprograma/fichaglobal/*" element = { <FichaGlobal /> }/>
        </Routes>
    </>

  )
}
