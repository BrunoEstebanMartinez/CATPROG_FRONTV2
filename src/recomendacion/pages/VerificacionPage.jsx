import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { VerificacionForm, VerificacionList } from "../components/verificacion"
import { SearchBar } from "../../ui/components"

export const VerificacionPage = () => {
  return (
    <>
      <div className="px-2 sm:px-3 lg:px-4 py-2 w-full max-w-11xl shadow-2xl">
        <div className="bg-white p-4">
          <div className="grid grid-cols-12 pb-6">
            <div className="block lg:col-span-3 col-span-12">
          <h1 className="flex text-2xl font-extrabold text-colorPrimario">Verificación<small className="ml-2 font-semibold text-gray-500"></small></h1> 
          <nav className="flex xl:col-span-4 col-span-12 " aria-label="Breadcrumb">
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
                  <li>
                    <div className="flex items-center">
                      <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <NavLink
                        end
                        to="/recomendacion/verificacion/registrar"
                        className={({ isActive }) =>
                        'block transition duration-150 truncate ' + (isActive ? 'text-colorPrimario' : 'text-slate-400 hover:text-slate-600')}>
                          <span className="ml-2 inline-flex items-center text-sm font-medium">
                            Registrar
                          </span>
                      </NavLink>
                    </div>
                  </li>
                </ol>
              </nav>
              </div>
          <SearchBar searchPath="/get-search-obras" normalPath="/obras/2024/0/0/0" />
              
          </div>
          <div className="p-4 -mt-16">
            <Routes>
              <Route path="registrar" element={ <VerificacionForm />} />
              <Route path="lista" element={ <VerificacionList />} />

              <Route path="/*" element= { <Navigate to={"lista"}/> } />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
