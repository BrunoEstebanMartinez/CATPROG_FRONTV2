import { createSlice } from '@reduxjs/toolkit';


export const periodosSlice = createSlice({
    name: 'periodos',
    initialState:{
        status: 'empty',
        periodo: null
    },
    reducers:{
        setPeriodos: (state, {payload}) => {
            state.status = 'full',
            state.periodo = payload
            console.log(payload);
        },
        cleanPeriodos: ( state ) => {
            state.status = 'empty';
            state.periodo = null;
        }
    },
});

export const {setPeriodos, cleanPeriodos} = periodosSlice.actions;