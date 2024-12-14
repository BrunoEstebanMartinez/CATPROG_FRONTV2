import { createSlice } from '@reduxjs/toolkit';


export const infoProgramaSlice = createSlice({
    name: 'infoprograma',
    initialState:{
        statusInfoProgram: 'empty',
        prog_id: null,
        periodo_id: null
    },
    reducers:{
        setPrograma: (state, {payload}) => {
            state.statusInfoProgram = 'full',
            state.prog_id = payload.prog_id,
            state.periodo_id = payload.periodo_id
            
        },
        cleanPrograma: ( state ) => {
            state.statusInfoProgram = 'empty';
            state.prog_id = null;
            state.periodo_id  = null;
        }
    },
});

export const {setPrograma, cleanPrograma} = infoProgramaSlice.actions;