import { baseApi } from "../baseApi";

export const getPeriodos = async (path, token) => {
    try {

        const response = await baseApi.get(`${path}`, {
            
            headers: {
                'token': token,
            }
        });
      
       const {message, release, data} = response.data['JsonResponse'];
       const alerts = manageErrors(release);
        
        if(alerts['internalCode'].localeCompare("1") != 0){

            return {
                type: alerts['type'],
                status: alerts['status'],
                release: release,
                message: message,
                data: []
           };

        }else{

            

            return {
                type: alerts['type'],
                status: alerts['status'],
                release: release,
                message: message,
                data: data
           };

        }
      

      

    }catch(e){
        return {
                type: 'frontend',
                status: false,
                release: '0000',
                message: e,
                data: []
        };
    }

}


export const getProgramas = async (path, idperiodo, token) => {
    try {

        const response = await baseApi.post(`${path}`, 
            {isperiodo:idperiodo},
            {headers: {
                'token': token,
            }
        });
      
       const {message, release, data} = response.data['JsonResponse'];
       const alerts = manageErrors(release);
        
        if(alerts['internalCode'].localeCompare("1") != 0){

            return {
                type: alerts['type'],
                status: alerts['status'],
                release: release,
                message: message,
                data: []
           };

        }else{

            

            return {
                type: alerts['type'],
                status: alerts['status'],
                release: release,
                message: message,
                data: data
           };

        }
      

      

    }catch(e){
        return {
                type: 'frontend',
                status: false,
                release: '0000',
                message: e,
                data: []
        };
    }

}

export const getDetailProgramaInit = async (path, idperiodo, id_prog, token) => {
    try {

        console.log(path + idperiodo + id_prog );
        const response = await baseApi.post(`${path}`, 
            {isPeriodo:idperiodo,
             id_prog:id_prog
            },
            {headers: {
                'token': token,
            }
        });
      
       const {message, release, data} = response.data['JsonResponse'];
       const alerts = manageErrors(release);
        
        if(alerts['internalCode'].localeCompare("1") != 0){

            return {
                type: alerts['type'],
                status: alerts['status'],
                release: release,
                message: message,
                data: []
           };

        }else{

            

            return {
                type: alerts['type'],
                status: alerts['status'],
                release: release,
                message: message,
                data: data
           };

        }
      

      

    }catch(e){
        return {
                type: 'frontend',
                status: false,
                release: '0000',
                message: e,
                data: []
        };
    }

}

export const getDetailObjetivo = async (path, idperiodo, id_prog, token) => {
    try {

        console.log(path + idperiodo + id_prog );
        const response = await baseApi.post(`${path}`, 
            {isPeriodo:idperiodo,
             id_prog:id_prog
            },
            {headers: {
                'token': token,
            }
        });
      
       const {message, release, data} = response.data['JsonResponse'];
       const alerts = manageErrors(release);
        
        if(alerts['internalCode'].localeCompare("1") != 0){

            return {
                type: alerts['type'],
                status: alerts['status'],
                release: release,
                message: message,
                data: []
           };

        }else{

            

            return {
                type: alerts['type'],
                status: alerts['status'],
                release: release,
                message: message,
                data: data
           };

        }
      

      

    }catch(e){
        return {
                type: 'frontend',
                status: false,
                release: '0000',
                message: e,
                data: []
        };
    }

}

export const getAllData = async ( currentPage, path, token ) => {

    try {
        const resp = await baseApi.get(`${ path }?page=${ currentPage }`,
         
        {
            headers: { 'token': token },
        });
        //  console.log(resp.data);
        const { message, success, data } = resp.data;
        return {
            ok: true,
            message: message,
            success: success,
            data: data,
        };
    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }

}

export const getAllDataAux = async ( currentPage, path, token ) => {

    try {
        const resp = await baseApi.get(`${ path }?page=${ currentPage }`, {
            headers: { 'token': token },
        });
        // console.log(resp.data);
        const { message, success, data } = resp.data;
        return {
            ok: true,
            message: message,
            success: success,
            data: data,
        };
    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }

}


export const getSearchData = async ( busqueda, path, token ) => {

    try {
        const resp = await baseApi.get(`${ path }/${ busqueda }`, {
            headers: { 'token': token },
        });

        const { message, success, data } = resp.data;
        return {
            ok: true,
            message: message,
            success: success,
            data: data,
        };
    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }
}


export const getEditFields = async ( path, id, token ) => {

    try {
        const resp = await baseApi.get(`${ path }/${ id }`, {
            headers: { 'token': token },
        });

        const { message, success, data } = resp.data;
        return {
            ok: true,
            message: message,
            success: success,
            data: data,
        };
    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }

}


export const saveData = async ( path, data, token ) => {

    try {

        const resp = await baseApi.post( `${ path }`, {
            data: data,
        }, {
            headers: { 'token': token },
        });

        // console.log(resp);

        const { message, dataResponse, success  } = resp.data;

        console.log(resp);

        return {
            ok: true,
            success: success,
            dataResponse: dataResponse,
            message: message,
        }

    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }

}


export const updateData = async ( path, data, id, token ) => {

    try {

        const resp = await baseApi.put( `${ path }/${ id }`, {
            data: data,
        }, {
            headers: { 'token': token },
        });

        // console.log(resp);

        const { message, dataResponse, success  } = resp.data;

        return {
            ok: true,
            success: success,
            dataResponse: dataResponse,
            message: message,
        }

    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }

}



function manageErrors($release){
    switch ($release) {
        case '10001':
                return {"internalCode" : '10001', 'status' : false, 'type':'consulta', "internalMessage": "No hay periodos definidos"};
            break;

        case '90001':

                return {"internalCode" : '90001', 'status' : false, 'type':'servidor', "internalMessage": "Oops!, Algo salió mal. Intentenlo más tarde "};
            
            break;

        case '10002':
                return {"internalCode" : '10002', 'status' : false, 'type':'consulta', "internalMessage": "Detalle - Programa - Detalle no generado"};
            break;

        case '90002':

                return {"internalCode" : '90002', 'status' : false, 'type':'servidor', "internalMessage": "Oops!, Algo salió mal. Intentenlo más tarde "};
            
            break;
        case '20001':
                return {"internalCode" : '10002', 'status' : false, 'type':'consulta', "internalMessage": "Detalle - Programa - Detalle no generado"};
            break;

        case '90003':

                return {"internalCode" : '90002', 'status' : false, 'type':'servidor', "internalMessage": "Oops!, Algo salió mal. Intentenlo más tarde "};
            
        break;
    
        default:

                return {"internalCode" : '1', 'status' : true, 'type':'valido', "internalMessage": ""};

            break;
    }
}