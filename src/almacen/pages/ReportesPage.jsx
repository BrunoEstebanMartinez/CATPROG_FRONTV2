import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { ReportesList } from "../components/reportes/ReportesList"

export const ReportesPage = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="bg-white p-4">
          <div className="flex justify-between items-center pb-4">
          <h1 className="felx pb-8 text-5xl font-extrabold text-colorPrimario">Reportes<small className="ml-2 font-semibold text-gray-500"></small></h1> 
              {/* <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <NavLink
                      end
                      to="/recomendacion/verificacion/lista"
                      className={({ isActive }) =>
                      'block transition duration-150 truncate ' + (isActive ? 'text-colorPrimario' : 'text-slate-400 hover:text-slate-600')}>
                        <span className="ml-2 inline-flex items-center text-sm font-medium">
                          Consulta
                        </span>
                    </NavLink>
                  </li>
                  
                </ol>
              </nav> */}
          </div>
          <div className="p-4">
            <Routes>
              <Route path="lista" element={ <ReportesList />} />

              <Route path="/*" element= { <Navigate to={"lista"}/> } />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
