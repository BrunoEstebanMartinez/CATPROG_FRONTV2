import {createSlice} from '@reduxjs/toolkit';

export const detalleObjSlice = createSlice({

    name: 'detalleobjetivo',
    initialState: {
        statedetalleobj: 'empty',
        periodo_id:null,
        prog_id:null,
        obj_prog:null,
        obj_meta:null,
        obj_uni_aten:null,
        obj_cobertura:null,
        obj_req_criter:null,
        obj_doctos:null,
        obj_crit_priori:null,
        obj_zona_aten:null,
        obj_sectores_apoya:null,
        obj_sec_01:null,
        obj_sec_02:null,
        obj_sec_03:null,
        obj_sec_04:null,
        obj_sec_05:null,
        obj_sec_06:null,
        obj_sec_07:null,
        obj_sec_08:null,
        obj_sec_09:null,
        obj_sec_10:null,
        obj_sec_11:null,
        obj_sec_12:null,
        obj_sec_13:null,
        obj_sec_14:null,
        obj_sec_15:null,
        obj_sec_16:null,
        obj_sec_17:null,
        obj_sec_18:null,
        obj_sec_19:null,
        obj_sec_20:null,
        obj_sec_21:null,
        obj_sec_22:null,
        obj_oper_ejec1:null,
        obj_oper_ejec2:null,
        obj_oper_ejec3:null,
        obj_oper_ejec4:null,
        obj_oper_ejec5:null,
        obj_oper_ejec6:null,
        obj_ods01:null,
        obj_ods02:null,
        obj_ods03:null,
        obj_ods04:null,
        obj_ods05:null,
        obj_ods06:null,
        obj_ods07:null,
        obj_ods08:null,
        obj_ods09:null,
        obj_ods10:null,
        obj_ods11:null,
        obj_ods12:null,
        obj_ods13:null,
        obj_ods14:null,
        obj_ods15:null,
        obj_ods16:null,
        obj_ods17:null,
        obj_pdem01:null,
        obj_pdem02:null,
        obj_pdem03:null,
        obj_pdem04:null,
        obj_pdem05:null,
        obj_pdem06:null,
        obj_pdem07:null,
        obj_pdem08:null,
        periodo_id1:null,
        mes_id1:null,
        dia_id1:null,
        obj_obs1:null,
        obj_obs2:null,
        obj_arc1:null,
        obj_arc2:null,
        obj_status1:null,
        obj_status2:null,

    },
    reducers:{
        setDetalleObj: (state, {payload}) => {
            state.statedetalleobj = 'full';
            state.periodo_id       = payload.periodo_id;
            state.prog_id       = payload.prog_id;
            state.obj_prog       = payload.obj_prog;
            state.obj_meta       = payload.obj_meta;
            state.obj_uni_aten       = payload.obj_uni_aten;
            state.obj_cobertura       = payload.obj_cobertura;
            state.obj_req_criter       = payload.obj_req_criter;
            state.obj_doctos       = payload.obj_doctos;
            state.obj_crit_priori       = payload.obj_crit_priori;
            state.obj_zona_aten       = payload.obj_zona_aten;
            state.obj_sectores_apoya       = payload.obj_sectores_apoya;
            state.obj_sec_01       = payload.obj_sec_01;
            state.obj_sec_02       = payload.obj_sec_02;
            state.obj_sec_03       = payload.obj_sec_03;
            state.obj_sec_04       = payload.obj_sec_04;
            state.obj_sec_05       = payload.obj_sec_05;
            state.obj_sec_06       = payload.obj_sec_06;
            state.obj_sec_07       = payload.obj_sec_07;
            state.obj_sec_08       = payload.obj_sec_08;
            state.obj_sec_09       = payload.obj_sec_09;
            state.obj_sec_10       = payload.obj_sec_10;
            state.obj_sec_11       = payload.obj_sec_11;
            state.obj_sec_12       = payload.obj_sec_12;
            state.obj_sec_13       = payload.obj_sec_13;
            state.obj_sec_14       = payload.obj_sec_14;
            state.obj_sec_15       = payload.obj_sec_15;
            state.obj_sec_16       = payload.obj_sec_16;
            state.obj_sec_17       = payload.obj_sec_17;
            state.obj_sec_18       = payload.obj_sec_18;
            state.obj_sec_19       = payload.obj_sec_19;
            state.obj_sec_20       = payload.obj_sec_20;
            state.obj_sec_21       = payload.obj_sec_21;
            state.obj_sec_22       = payload.obj_sec_22;
            state.obj_oper_ejec1       = payload.obj_oper_ejec1;
            state.obj_oper_ejec2       = payload.obj_oper_ejec2;
            state.obj_oper_ejec3       = payload.obj_oper_ejec3;
            state.obj_oper_ejec4       = payload.obj_oper_ejec4;
            state.obj_oper_ejec5       = payload.obj_oper_ejec5;
            state.obj_oper_ejec6       = payload.obj_oper_ejec6;
            state.obj_ods01       = payload.obj_ods01;
            state.obj_ods02       = payload.obj_ods02;
            state.obj_ods03       = payload.obj_ods03;
            state.obj_ods04       = payload.obj_ods04;
            state.obj_ods05       = payload.obj_ods05;
            state.obj_ods06       = payload.obj_ods06;
            state.obj_ods07       = payload.obj_ods07;
            state.obj_ods08       = payload.obj_ods08;
            state.obj_ods09       = payload.obj_ods09;
            state.obj_ods10       = payload.obj_ods10;
            state.obj_ods11       = payload.obj_ods11;
            state.obj_ods12       = payload.obj_ods12;
            state.obj_ods13       = payload.obj_ods13;
            state.obj_ods14       = payload.obj_ods14;
            state.obj_ods15       = payload.obj_ods15;
            state.obj_ods16       = payload.obj_ods16;
            state.obj_ods17       = payload.obj_ods17;
            state.obj_pdem01       = payload.obj_pdem01;
            state.obj_pdem02       = payload.obj_pdem02;
            state.obj_pdem03       = payload.obj_pdem03;
            state.obj_pdem04       = payload.obj_pdem04;
            state.obj_pdem05       = payload.obj_pdem05;
            state.obj_pdem06       = payload.obj_pdem06;
            state.obj_pdem07       = payload.obj_pdem07;
            state.obj_pdem08       = payload.obj_pdem08;
            state.periodo_id1       = payload.periodo_id1;
            state.mes_id1       = payload.mes_id1;
            state.dia_id1       = payload.dia_id1;
            state.obj_obs1       = payload.obj_obs1;
            state.obj_obs2       = payload.obj_obs2;
            state.obj_arc1       = payload.obj_arc1;
            state.obj_arc2       = payload.obj_arc2;
            state.obj_status1       = payload.obj_status1;
            state.obj_status2       = payload.obj_status2;
            console.log(payload);
        },
        cleanDetalleObj:(state) => {
            state.statedetalleobj = 'empty';
            state.periodo_id       = null;
            state.prog_id       = null;
            state.obj_prog       = null;
            state.obj_meta       = null;
            state.obj_uni_aten       = null;
            state.obj_cobertura       = null;
            state.obj_req_criter       = null;
            state.obj_doctos       = null;
            state.obj_crit_priori       = null;
            state.obj_zona_aten       = null;
            state.obj_sectores_apoya       = null;
            state.obj_sec_01       = null;
            state.obj_sec_02       = null;
            state.obj_sec_03       = null;
            state.obj_sec_04       = null;
            state.obj_sec_05       = null;
            state.obj_sec_06       = null;
            state.obj_sec_07       = null;
            state.obj_sec_08       = null;
            state.obj_sec_09       = null;
            state.obj_sec_10       = null;
            state.obj_sec_11       = null;
            state.obj_sec_12       = null;
            state.obj_sec_13       = null;
            state.obj_sec_14       = null;
            state.obj_sec_15       = null;
            state.obj_sec_16       = null;
            state.obj_sec_17       = null;
            state.obj_sec_18       = null;
            state.obj_sec_19       = null;
            state.obj_sec_20       = null;
            state.obj_sec_21       = null;
            state.obj_sec_22       = null;
            state.obj_oper_ejec1       = null;
            state.obj_oper_ejec2       = null;
            state.obj_oper_ejec3       = null;
            state.obj_oper_ejec4       = null;
            state.obj_oper_ejec5       = null;
            state.obj_oper_ejec6       = null;
            state.obj_ods01       = null;
            state.obj_ods02       = null;
            state.obj_ods03       = null;
            state.obj_ods04       = null;
            state.obj_ods05       = null;
            state.obj_ods06       = null;
            state.obj_ods07       = null;
            state.obj_ods08       = null;
            state.obj_ods09       = null;
            state.obj_ods10       = null;
            state.obj_ods11       = null;
            state.obj_ods12       = null;
            state.obj_ods13       = null;
            state.obj_ods14       = null;
            state.obj_ods15       = null;
            state.obj_ods16       = null;
            state.obj_ods17       = null;
            state.obj_pdem01       = null;
            state.obj_pdem02       = null;
            state.obj_pdem03       = null;
            state.obj_pdem04       = null;
            state.obj_pdem05       = null;
            state.obj_pdem06       = null;
            state.obj_pdem07       = null;
            state.obj_pdem08       = null;
            state.periodo_id1       = null;
            state.mes_id1       = null;
            state.dia_id1       = null;
            state.obj_obs1       = null;
            state.obj_obs2       = null;
            state.obj_arc1       = null;
            state.obj_arc2       = null;
            state.obj_status1       = null;
            state.obj_status2       = null;


        }
    }

});

export const {setDetalleObj, cleanDetalleObj} = detalleObjSlice.actions;
