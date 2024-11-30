import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { publicConsultsSlice } from './public/publicSlice'
import { catalogosSlice, editSlice, validacionSlice } from './public'
import { periodosSlice } from './public/periodosSlice'
import { programasSlice } from './public/programasSlice'
import { auxPublicConsultsSlice } from './public/auxPublicSlice'
import { curpSlice } from './public/curpSlice'
import { fileSlice } from './public/fileSlice'
import { coordSlice } from './public/CoordSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    catalogos: catalogosSlice.reducer,
    periodos: periodosSlice.reducer,
    programas: programasSlice.reducer,
    consultas: publicConsultsSlice.reducer,
    edit: editSlice.reducer,
    validacion: validacionSlice.reducer,
    consultasAux: auxPublicConsultsSlice.reducer,
    curp: curpSlice.reducer,
    file: fileSlice.reducer,
    coord: coordSlice.reducer
  },
})
