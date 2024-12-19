import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { publicConsultsSlice } from './public/publicSlice'
import { catalogosSlice, editSlice, validacionSlice } from './public'
import { periodosSlice } from './public/periodosSlice'
import { programasSlice } from './public/programasSlice'
import { detalleProgSlice } from './public/detalleProgSlice'
import {  infoProgramaSlice }    from './public/infoProgramaSlice';
import { auxPublicConsultsSlice } from './public/auxPublicSlice'
import { curpSlice } from './public/curpSlice'
import { fileSlice } from './public/fileSlice'
import { coordSlice } from './public/CoordSlice'
import { detalleObjSlice } from './public/detalleObjSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    catalogos: catalogosSlice.reducer,
    periodos: periodosSlice.reducer,
    programas: programasSlice.reducer,
    detalleprograma: detalleProgSlice.reducer,
    infoprograma: infoProgramaSlice.reducer,
    detalleobjetivo: detalleObjSlice.reducer, 
    consultas: publicConsultsSlice.reducer,
    edit: editSlice.reducer,
    validacion: validacionSlice.reducer,
    consultasAux: auxPublicConsultsSlice.reducer,
    curp: curpSlice.reducer,
    file: fileSlice.reducer,
    coord: coordSlice.reducer
  },
})
