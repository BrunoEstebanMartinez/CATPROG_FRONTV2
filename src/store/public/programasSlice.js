import { createSlice } from '@reduxjs/toolkit';


export const programasSlice = createSlice({
    name: 'programas',
    initialState:{
        statusProgramas: 'empty',
        programa: null
    },
    reducers:{
        setProgramas: (state, {payload}) => {
            state.statusProgramas = 'full',
            state.programa = payload
            console.log(payload);
        },
        cleanProgramas: ( state ) => {
            state.statusProgramas = 'empty';
            state.programa = null;
        }
    },
});

export const {setProgramas, cleanProgramas} = programasSlice.actions;