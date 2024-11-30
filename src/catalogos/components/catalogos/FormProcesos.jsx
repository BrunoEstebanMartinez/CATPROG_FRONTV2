import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pass } from "../../../api";
import { Controller, useForm } from 'react-hook-form';
import { cleanData, cleaningEditData, getEditData, putData, storeData } from '../../../store';
import Swal from 'sweetalert2';
import CryptoJS from "crypto-js";
import useWindowSize from '../../../hooks/useWindowSize';
import { CustomSelect, Loading } from '../../../ui/components';

export const FormProcesos = ( props ) => {

  const params = useParams();
  const size = useWindowSize(); 
  const dispatch = useDispatch();
  const { token } = useSelector( state => state.auth );
  const { isSaving, status, dataValidate } = useSelector( state => state.validacion );
  const { loading, data } = useSelector( state => state.edit );
  const [saveEdit, setSaveEdit] = useState(true);
  const [requeridos, setRequeridos] = useState(false);
  const navigate = useNavigate();


  const activoCat = [
    {value: 'S',  label: "Activo"},
    {value: null, label: "Inactivo"}
  ]
  
  const {  register, control, resetField, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues:{
      hora_sesion: '',
    }
  });

  useEffect(() => {
    dispatch( cleaningEditData() );
  }, [token]);

  useEffect(() => {
    if( params?.id && params?.id !== undefined && params?.id !== '0' ){
        setSaveEdit(false);
    }else {
        setSaveEdit(true);
    }
  });


  useEffect(() => {
    // console.log(params?.id)
    if( params?.id && params?.id !== undefined && params?.id !== '0' ){
      const decrypUrl = params.id.replace(/p1L2u3S/g, '+' ).replace(/bXaJN0921/g, '/').replace(/e1Q2u3A4l/g, '=');
      const bytes = CryptoJS.AES.decrypt(decrypUrl, pass);
      const editId = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      
      // setIdAsistente(editId);
    //   console.log(editId);
    if(editId != 0)
        {
            dispatch( getEditData( '', editId, token ) );
            setSaveEdit(false);
        }
    }

  }, [token]);
  
      useEffect(() => {
        if (data?.payload) {
            reset({
                proceso_desc: data.payload.proceso_desc,
                proceso_status: { value: data.payload?.proceso_status, label: activoCat[data.payload?.proceso_status == 'S' ? 0 : 1]?.label },
            });
            setRequeridos(true)
        } else {
            reset({
                proceso_desc: '',
                proceso_status: { value: '', label: '' },
            });
        }
      }, [data])

//   console.log(params?.id);

  useEffect(() => {
        if (props.auxiliar) {
            reset({
                proceso_desc: '',
                proceso_status: '',
            });
        }
    },[props.auxiliar]);

  const onSubmit = ( formData ) => {
    let passs = true;
    if( saveEdit ) {        
          passs = true;
          passs == true ? dispatch( storeData( '/store-activo_imss', formData, token ) ) : Swal.fire({
            title: 'Debe seleccionar al menos un elemento en la lista de documentación para faltantes',
            text: dataValidate?.payload,
            icon: 'warning',
            allowOutsideClick: false,
            showCancelButton: false,
            confirmButtonColor: '#8A2036',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch( cleanData() );
            }
          });
    } else {
          passs = true;
          passs == true ?
          dispatch( putData( 'update-activo_imss', formData, data?.payload.id, token ) ) : 
          Swal.fire({
            title: 'Debe seleccionar al menos un elemento en la lista de documentación para faltantes',
            text: dataValidate?.payload,
            icon: 'warning',
            allowOutsideClick: false,
            showCancelButton: false,
            confirmButtonColor: '#8A2036',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch( cleanData() );
            }
          });
    }
  }

  if ( status === 'saved' ) {
    //console.log(payload);
    Swal.fire({
      title: 'Se ha agregado el registro',
      //text: 'con nombre ' + dataValidate?.payload.id,
      icon: 'success',
      allowOutsideClick: false,
    //   showCancelButton: true,
      confirmButtonColor: '#8A2036',
    //   cancelButtonColor: '#8A2036',
      confirmButtonText: 'Confirmar',
    //   cancelButtonText: 'Terminar'
    }).then((result) => {
      if (result.isConfirmed) {
        //console.log(dataValidate?.payload.id);
          dispatch( cleanData() );
        //   dispatch( getAllCatalogos( token ) );
          let path = "";
          path = `../captura`; 
          navigate(path);
          // navigate("../principal");
      }
    });
  } else if ( status === 'fail' ) {
    Swal.fire({
      title: 'Cuidado',
      text: dataValidate?.payload,
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: false,
      confirmButtonColor: '#8A2036',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
          dispatch( cleanData() );
      }
    });
  }
    console.log(requeridos)
    return (
        <div className='flex h-full flex-col justify-center gap-4 p-1'>
            { requeridos == false && !saveEdit ? <Loading></Loading> : null }
            {!saveEdit ? 
                <h1 className='font-semibold text-gray-500 -mt-4'>Edita el proceso</h1>
                :
                <h1 className='font-semibold text-gray-500 -mt-4'>Registrar nuevo proceso</h1>
            }
        
  <div className="bg-white w-full h-5/6" style={{display: "flex"}}>
    <div className="bg-white w-full">
      
      <div className="bg-white p-1">
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div className={`grid md:grid-cols-12 mt-9 md:gap-3 ${size.width <= 1200 ? "" : "pt-2"}`} 
          style={{overflowWrap: "anywhere", animation: ( "outAnimation 550ms ease-out") }} >

            <div className={`relative z-0 mb-9 w-full group ${!saveEdit ? "col-span-6" : "col-span-12" } `}>
              <input type="text" id="proceso_desc" className={`block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${!errors.proceso_desc?.message ? 'border-gray-500 focus:border-colorPrimario' : 'border-red-400 focus:border-red-400'} peer`} placeholder=" " autoComplete="on" 
               {...register( "proceso_desc", { required: "Este campo es necesario"})}
               onChange={(event) => {
                event.target.value = event.target.value.toUpperCase();
                event.target.value = event.target.value.normalize('NFD').replace(/\p{Diacritic}/gu, ''); // Old method: .replace(/[\u0300-\u036f]/g, "");
              }}
              />
            <label htmlFor="proceso_desc" className={`peer-focus:font-medium absolute ${size.width <= 1200 ? "text-sm" : "text-lg" } duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${!errors.proceso_desc?.message ? 'text-gray-400 peer-focus:text-colorPrimario' : 'text-red-400 peer-focus:text-red-400'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>
                Nombre del proceso
            </label>
                <div className="w-full text-red-400 text-sm pb-2">
                    { errors.proceso_desc?.message }
                </div>
            </div>

            {!saveEdit ? 
                <div className="mb-6 w-full group col-span-6">
                <label htmlFor="proceso_status" className={`peer-focus:font-medium absolute text-lg duration-300 transform mt-3 -translate-y-6 scale-75 origin-[0] peer-focus:left-0 ${!errors.proceso_status?.message ? 'text-gray-400 peer-focus:text-colorPrimario' : 'text-red-400 peer-focus:text-red-400'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>
                  Estatus
                </label>
                <Controller
                  name="proceso_status"
                  control={control}
                  rules={{ required: 'Este campo es necesario' }}
                  render={({ field }) => 
                  <CustomSelect 
                    {...field}
                    options={activoCat}
                    isMulti={false} 
                  />}
                />
                <div className="w-full text-red-400 text-sm pb-2">
                  { errors.proceso_status?.message }
                </div>
              </div> : null
            }

          </div>


      
      
      <div className='flex md:grid-cols-12 md:gap-6'>
          <button disabled={ isSaving } type="submit" className={`${size.width <= 1200 ? "col-span-6" : "col-span-3"} text-colorPrimario hover:text-white border-2 ${ !isSaving ? 'border-colorPrimario hover:bg-colorPrimario' : 'border-gray-400 hover:bg-gray-400' } focus:ring-2 focus:outline-none focus:ring-colorSecundario font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 w-28 sm:w-80 mt-12`}>Guardar</button>
          <Link to='../listaprocesos' type="button" className={`${size.width <= 1200 ? "col-span-6" : "col-span-3"} text-colorTerciario hover:text-white border-2 border-colorTerciario hover:bg-colorTerciario focus:ring-2 focus:outline-none focus:ring-colorSecundario font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 w-28 sm:w-80 mt-12`}>Cancelar</Link>
      </div>
        </form>
        </div>

    </div>
    
    </div>
    </div> 
    );
}

// export default NuevoActivoFijo;