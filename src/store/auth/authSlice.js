import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'authenticated'
        token: null,
        nombre_completo: null,
        email: null,
        firstTime: null,
        unidades: null,
        province: null,
        profile: null,
        acceso_tipo: null,
        id: null,
        fallo: null,
        dependencia: null
    },
    reducers: {
        login: ( state, { payload } ) => {
            console.log(payload)
            state.status= 'authenticated';
            state.token= payload.token;
            state.nombre_completo= payload.nombre_completo;
            state.email= payload.email;
            state.firstTime= payload.first_time;
            state.unidades= payload.unidades;
            state.province= payload.province;
            state.profile= payload.profile;
            state.acceso_tipo = payload.acceso_tipo;
            state.dependencia= payload.dependencia
            state.id= payload.id;
            state.fallo = null;
        },
        logout: ( state, { payload } ) => {
            state.status= 'not-authenticated';
            state.token= null;
            state.nombre_completo= null;
            state.email= null;
            state.firstTime= null;
            state.unidades= null;
            state.province= null;
            state.profile= null;
            state.acceso_tipo = null;
            state.dependencia= null;
            state.fallo = payload;
            // state.errorMesage= payload.error;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        },
    }
});


// Action creators are generated for each case reducer function
export const {  login,
                logout,
                checkingCredentials } = authSlice.actions;