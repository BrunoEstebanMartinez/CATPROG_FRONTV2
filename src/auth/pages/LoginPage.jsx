import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import AuthImage from '../../images/Designer.jpeg';
import AuthDecoration from '../../images/logo-colibri.png';
import Ondas from '../../images/ondas3.svg';
import LogoEdoMex from '../../images/logos_edomex3.png';
import LogoIsem from '../../images/escudo-edomex.png';
import Cintillo from '../../images/cintillo.svg';
import { checkingAutentication } from '../../store/auth/';
import Swal from 'sweetalert2';


const backgroundLogin = {
    backgroundImage: 'url(' + Ondas + ')',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: '100% 100%'
}

export const LoginPage = () => {

  //const { status, fallo } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm( {
    defaultValues: {
      usuario: '',
      password: '',
    }
  });
  
  /*
  (fallo !== undefined && fallo !== 6) ?
    Swal.fire({
      title: '¡Hubo un problema al iniciar sesión!',
      text: (fallo === 1) ? 'Tu usuario o contraseña son incorrectos' : ((fallo === 2) ? 'Tu usuario o contraseña son incorrectos' : ((fallo === 3) ? 'El servidor no esta disponible' : ((fallo === 4) ? 'Tu sesión ha expirado' : 'Contactate con soporte técnico'))),
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: false,
      confirmButtonColor: '#8A2036',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      dispatch(logout());
    })
    : null;
    */

  const isAuthenticated = useMemo( () => status === 'checking', [status] );
  console.log(isAuthenticated);

  const onSubmit = ( data ) => {
    console.log(data);
    dispatch( checkingAutentication( data ) );

  };

  return (
    <main className="bg-gradient-to-r from-red-900 from-1% via-colorPrimario via-95% to-colorPrimario to-90%" >
    <div style={backgroundLogin}>
    

      <div className=" grid grid-cols-12">

        {/* Image */}
        <div className="hidden md:block col-span-6 top-0 bottom-0 left-0  h-svh" aria-hidden="true">
          <img className="object-cover object-center w-full h-svh" src={AuthImage}  alt="Authentication" />
          {/* <img className="absolute top-10 right-0 mr-12 hidden lg:block" src={LogoEdoMex} width="200" height="330" alt="Authentication decoration" /> */}
          <img className="absolute top-10 left-0 mr-12 hidden lg:block" src={LogoIsem} width="150" height="330" alt="Authentication decoration" />
          {/* <img className="absolute top-10 right-0 mr-12 hidden lg:block" src={AuthDecoration} width="300" height="330" alt="Authentication decoration" /> */}
        </div>

        {/* Content */}
        <div className="md:col-span-6 col-span-12 h-svh">
          <div className="min-h-screen h-full flex flex-col after:flex-1">

            {/* Header */}
            <div className="flex-1 mt-6">
              <div className='flex items-center justify-center'>
                {/* <img className="w-80 h-32 " width="200" height="330" src={LogoIsem} alt="ISEM"/> */}
                <img className="" src={LogoEdoMex} width="100" height="280" alt="Authentication decoration" />
              </div>
            </div>

            <div className="max-w-sm mx-auto px-4 py-8 pt-12">
              <h1 className="text-3xl font-bold mb-8 text-center text-white">Bienvenido al Catálogo de Programas Gubernamentales</h1>
              {/* Form */}
              <form onSubmit={ handleSubmit(onSubmit) }>
                <div className="space-y-4">
                  <div>
                    <div className="relative z-0 mb-6 w-full group">
                      <input type="text" id="usuario" className={`block py-2.5 px-0 w-full text-lg text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray focus:outline-none focus:ring-0 ${!errors.login?.message ? 'focus:border-colorSecundario' : 'focus:border-red-400'} peer`} placeholder=" " autoComplete="on" 
                        {...register("usuario", { required: "Este campo es necesario", 
                                      // pattern: {
                                      //   value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                      //   message: "Correo no valido (ejemplo@ejemplo.com)"
                                      // }
                                    }
                        )}
                      />
                      <label htmlFor="login" className={`peer-focus:font-medium absolute text-lg text-gray-300 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${!errors.login?.message ? 'peer-focus:text-colorSecundario' : 'peer-focus:text-red-400'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>
                        Usuario
                      </label>
                      <div className="w-full text-red-400 text-sm pb-2">
                        { errors.login?.message }
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative z-0 mb-6 w-full group">
                      <input type="password" id="password" className={`block py-2.5 px-0 w-full text-lg text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray focus:outline-none focus:ring-0 ${!errors.password?.message ? 'focus:border-colorSecundario' : 'focus:border-red-400'} peer`} placeholder=" " autoComplete="on"
                        {...register("password", { required: "Este campo es necesario", 
                                      minLength: {
                                        value: 4,
                                        message: "Tu contraseña debe tener al menos 8 caracteres"
                                      } }
                        )}
                      />
                      <label htmlFor="password" className={`peer-focus:font-medium absolute text-lg text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${!errors.password?.message ? 'peer-focus:text-colorSecundario' : 'peer-focus:text-red-400'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>
                        Contraseña
                      </label>
                      <div className="w-full text-red-400 text-sm pb-2">
                        { errors.password?.message }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:justify-between justify-center mt-16">
                  <div className="mr-1">
                    {/* <NavLink className="text-sm underline hover:no-underline text-gray-300" to="/auth/reset-password">¿Olvisate tu contraseña?</NavLink> */}
                  </div>
                  <button 
                  //disabled={ isAuthenticated } 
                  type='submit' className="text-colorSecundario hover:text-white border-2 hover:border-colorSecundario border-colorSecundario focus:ring-2 focus:outline-none focus:ring-colorSecundario font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2  w-28 sm:w-48">Ingresar</button>
                </div>
              </form>
              {/* Footer */}
            </div>
            

          </div>
        </div>

        

      
        

      </div>
    </div>

    </main>
  );
}

