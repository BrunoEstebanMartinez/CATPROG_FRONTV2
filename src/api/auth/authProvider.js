import { baseApi } from "../baseApi";


export const authProvider = async ( email, password ) => {

        try {
            
            const resp = await baseApi.post( '/login', {
                email: email,
                password: password,
            });

            

            const { token, user } = resp.data;
            localStorage.setItem( 'token', token );
            
            // console.log(user);

            return {
                ok: true,
                token: token,
                name: user.name,
                email: user.email,
                first_time: user.first_time,
                profile: user.profile,
                acceso_tipo: user.acceso_tipo,
                id: user.id,
                dependencia: user.dependencia
            }

        } catch (error) {
            return {
                ok: false, 
                error: error.response.data
            }
        }

}

export const onCheckAuthProvider = async () => {

    try {

        const resp = await baseApi.get('/check', {
            headers: { 'token': localStorage.getItem('token') },
        });
        console.log("onCheckAuthProvider" + resp.data);
        return resp.data;

    } catch (error) {
        return {
            ok: false, 
            error: error.response.data
        }
    }

}