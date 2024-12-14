import { createSlice } from '@reduxjs/toolkit';


export const detalleProgSlice = createSlice({
    name: 'detalleprograma',
    initialState:{
        status: 'empty',
        programa: null
    },
    reducers:{
        setDetalle: (state, {payload}) => {
            state.status = 'full',
            state.programa = payload
            console.log(payload);
        },
        cleanDetalle: ( state ) => {
            state.status = 'empty';
            state.programa = null;
        }
    },
});

export const {setDetalle, cleanDetalle} = detalleProgSlice.actions;