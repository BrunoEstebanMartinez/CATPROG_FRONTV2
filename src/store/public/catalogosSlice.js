import { createSlice } from '@reduxjs/toolkit';

export const catalogosSlice = createSlice({
    name: 'catalogos',
    initialState: {
        status: 'empty',
        periodos: null,
        jurisdicciones: null,
        dictamenes: null,
        medios: null,
        giros: null,
        perfiles: null,
        resultados: null,
        medidas: null,
        ejercicio: null, 
        clasificacion: null, 
        estructura: null, 
        criterios: null
    },
    reducers: {
        setCatalogos: ( state, { payload } ) => {
            state.status = 'full';
            state.periodos       = payload.data;
            state.jurisdicciones = payload.jurisdicciones;
            state.dictamenes = payload.dictamenes;
            state.medios = payload.medios;
            state.giros = payload.giros;
            state.perfiles = payload.perfiles;
            state.resultados = payload.resultados;
            state.medidas = payload.medidas;
            state.ejercicio = payload.ejercicio, 
            state.clasificacion = payload.clasificacion, 
            state.estructura = payload.estructura, 
            state.criterios = payload.criterios
        },
        cleanCatalogos: ( state ) => {
            state.status = 'empty';
            state.periodos       = null;
            state.jurisdicciones = null;
            state.dictamenes = null;
            state.medios = null;
            state.giros = null;
            state.perfiles = null;
            state.resultados = null;
            state.medidas = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setCatalogos,
                cleanCatalogos } = catalogosSlice.actions;