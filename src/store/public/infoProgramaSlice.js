import { createSlice } from '@reduxjs/toolkit';


export const infoProgramaSlice = createSlice({
    name: 'infoprograma',
    initialState:{
        statusInfoProgram: 'empty',
        periodo_id: null,
        grupo_desc: null,
        depen_id:null,
        depen_id2:null,
        depen_id3:null,
        responsable:null,
        unidad_opera:null,
        clasificgob_id:null,
        clasificgob_desc:null,
        prioridad_id:null,
        prioridad_desc:null,
        prog_tipo:null,
        prog_status1:null,
        prog_status2:null,
        prog_id: null,
        prog_desc:null,
        prog_verti:null,
        

    },
    reducers:{
        setPrograma: (state, {payload}) => {
            state.statusInfoProgram = 'full',
            state.periodo_id       = payload.periodo_id;
            state.grupo_desc       = payload.grupo_desc;
            state.depen_id       = payload.depen_id;
            state.depen_id2       = payload.depen_id2;
            state.depen_id3       = payload.depen_id3;
            state.responsable       = payload.responsable;
            state.unidad_opera       = payload.unidad_opera;
            state.clasificgob_id       = payload.clasificgob_id;
            state.clasificgob_desc       = payload.clasificgob_desc;
            state.prioridad_id       = payload.prioridad_id;
            state.prioridad_desc       = payload.prioridad_desc;
            state.prog_tipo       = payload.prog_tipo;
            state.prog_status1       = payload.prog_status1;
            state.prog_status2       = payload.prog_status2;
            state.prog_id       = payload.prog_id;
            state.prog_desc       = payload.prog_desc;
            state.prog_verti       = payload.prog_verti;
            console.log(payload);
        },
        cleanPrograma: ( state ) => {
            state.statusInfoProgram = 'empty';
            state.periodo_id       = null;
            state.grupo_desc       = null;
            state.depen_id       = null;
            state.depen_id2       = null;
            state.depen_id3       = null;
            state.responsable       = null;
            state.unidad_opera       = null;
            state.clasificgob_id       = null;
            state.clasificgob_desc       = null;
            state.prioridad_id       = null;
            state.prioridad_desc       = null;
            state.prog_tipo       = null;
            state.prog_status1       = null;
            state.prog_status2       = null;
            state.prog_id       = null;
            state.prog_desc       = null;
            state.prog_verti       = null;
        }
    },
});

export const {setPrograma, cleanPrograma} = infoProgramaSlice.actions;