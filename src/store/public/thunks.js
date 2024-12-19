import { 
        getAllData, 
        getAllDataAux, 
        getEditFields, 
        getSearchData, 
        saveData, 
        updateData, 
        getPeriodos, 
        getDetailProgramaInit, 
        getDetailObjetivo,
        getProgramas } from "../../api";
import { cleanConsultasAux, gettingConsultasAux } from "./auxPublicSlice";
import { cleaningEditData, gettingEditData } from "./editSlice";
import { cleanPeriodos, setPeriodos } from "./periodosSlice";
import { cleanProgramas, setProgramas } from "./programasSlice";
import { cleanDetalle, setDetalle} from "./detalleProgSlice";
import { cleanConsultas, gettingConsultas } from "./publicSlice"
import { addData, cleanData, failData, savingData } from "./validacionSlice";
import { setPrograma, cleanPrograma} from './infoProgramaSlice';
import { setDetalleObj, cleanDetalleObj } from "./detalleObjSlice";


export const getPeriodosRed = (path, token) => {
    return async (dispatch) => {

        dispatch(cleanPeriodos());

            const consulta = await getPeriodos(path, token);
            console.log(consulta.data);

                if(consulta.status) return dispatch(setPeriodos(consulta.data));


                dispatch(cleanPeriodos());

                
    }
}


export const getProgramasRed = (path, periodoid, token) => {
    return async (dispatch) => {

        dispatch((cleanProgramas()));

            const consulta = await getProgramas(path, periodoid, token);
            console.log(consulta.data);
            console.log(periodoid);

                if(consulta.status) return dispatch(setProgramas(consulta.data));


                dispatch(cleanProgramas());

                
    }
}

export const getDetalle = (path, periodoid, prog_id, token) => {

    

    return async (dispatch) => {

        dispatch(cleanPrograma());

            const consulta = await getDetailProgramaInit(path, periodoid, prog_id, token);
            

                if(consulta.status) return dispatch(setPrograma(consulta.data));

        dispatch(cleanPrograma());


    }
}

export const getObjetivoPrograma = (path, periodo_id, prog_id, token) => {

    return async (dispatch) => {

            dispatch(cleanDetalleObj());

            console.log("objetivo" + periodo_id + prog_id);

                const consulta = await getDetailObjetivo(path, periodo_id, prog_id, token);
                console.log(consulta);

                if(consulta.status) return dispatch(setDetalleObj(consulta.data));

            dispatch(cleanDetalleObj());
    }

}

export const editObjetivoPrograma = (path, data, periodo_id, prog_id, token) => {

}

export const onDispatchInfoPrograma = (prog_id, periodo_id) => {
    return (dispatch) => {
    
        console.log(periodo_id);
          dispatch(setPrograma(prog_id, periodo_id));
        
    }

}

export const getData = (currentPage, path, token) => {

    return async( dispatch ) => {

        dispatch( cleanConsultas() );
        
        const consulta = await getAllData( currentPage, path, token );
        // console.log(consulta);
        if ( consulta.ok ) return dispatch( gettingConsultas( consulta.data ) );
        
        dispatch( cleanConsultas() );
        // console.log(consulta);

    }

}

export const getDataAux = (currentPage, path, token) => {

    return async( dispatch ) => {

        dispatch( cleanConsultasAux() );
        
        const consultaAux = await getAllDataAux( currentPage, path, token );
        
        if ( consultaAux.ok ) return dispatch( gettingConsultasAux( consultaAux.data ) );
        
        dispatch( cleanConsultasAux() );
        // console.log(consultaAux);

    }

}


export const findData = ( busqueda, path, token ) => {

    return async ( dispatch ) => {

        dispatch( cleanConsultas() );

        const consulta = await getSearchData( busqueda, path, token );
        
        if ( consulta.ok ) return dispatch( gettingConsultas( consulta.data ) );
        
        dispatch( cleanConsultas() );

    }

}


export const getEditData = ( path, id, token ) => {

    return async ( dispatch ) => {

        dispatch( cleaningEditData() );

        const consulta = await getEditFields( path, id, token );

        if ( consulta.ok ) return dispatch( gettingEditData( consulta.data ) );

        dispatch( cleaningEditData() );

    }

}


export const storeData = ( path, data, token ) => {

    return async ( dispatch ) => {

        dispatch( cleanData() );

        dispatch( savingData() );

        const saveResponse = await saveData( path, data, token );

        if( saveResponse.ok ){

            if( saveResponse.success )
                return dispatch( addData( saveResponse.dataResponse ) )
            else 
                console.log(saveResponse);
                return dispatch( failData( saveResponse.dataResponse ) )
        }

        // console.log( saveResponse );

        dispatch( cleanData() );

    }

}


export const putData = ( path, data, id, token ) => {

    return async ( dispatch ) => {

        dispatch( cleanData() );

        dispatch( savingData() );

        const updateResponse = await updateData( path, data, id, token );

        if( updateResponse.ok ){

            if( updateResponse.success )
                return dispatch( addData( updateResponse.dataResponse ) )
            else 
                return dispatch( failData( updateResponse.dataResponse ) )
        }

        // console.log( saveResponse );

        dispatch( cleanData() );

    }

}





