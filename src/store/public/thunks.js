import { deleteAgenda, getAllData, getAllDataAux, getEditFields, getSearchData, saveData, updateData, getPeriodos, getProgramas } from "../../api";
import { cleanConsultasAux, gettingConsultasAux } from "./auxPublicSlice";
import { setCatalogos, cleanCatalogos } from "./catalogosSlice";
import { cleaningEditData, gettingEditData } from "./editSlice";
import { cleanPeriodos, setPeriodos } from "./periodosSlice";
import { cleanProgramas, setProgramas } from "./programasSlice";
import { cleanConsultas, gettingConsultas } from "./publicSlice"
import { addData, cleanData, failData, savingData } from "./validacionSlice";


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


/*
export const getCatalogos = ( token ) => {

    return async( dispatch ) => {

        const catalogos = await getAllCatalogos( token );

        dispatch( setCatalogos( catalogos ) );


    }


}

*/

export const eliminateAgenda = ( id, token) => {

    return async (dispatch) => {


        const eliminacion = await deleteAgenda( id, token );

        if ( eliminacion.success ) {

            const agenda = await getAllData( 1, '/get-agenda', token );

            if ( agenda.ok ) return dispatch( gettingConsultas( agenda.data ) );


        }


    }

}