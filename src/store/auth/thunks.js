import { authProvider } from "../../api/auth/authProvider";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAutentication = ( data ) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        console.log(data);

        const result = await authProvider(data.usuario, data.password);
                // .then( res => res );
        // console.log(result, 'Soy el thunks');
        if ( !result.ok ) return dispatch( logout( result.error?.fallo ) );


        dispatch( login( result ) );


    }

}

export const startLogout = () => {

    return ( dispatch ) => {

        localStorage.removeItem('token');
        dispatch( logout() );

    }

}