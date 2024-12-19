import {React, useEffect, useState} from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {storeData, getObjetivoPrograma} from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Loading, NavbarClient } from "../../ui/components";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";




export const FichaObjectivo = () => {

    const {state, location} = useLocation();
    const dispatch  = useDispatch();
    const [editTrigger, setEditTrigger] = useState(false);
    const {isSaving, status} = useSelector(state => state.validacion);

    

    const {token} = useSelector(state => state.auth);
    const {statedetalleobj, obj_prog,
        obj_meta,
        obj_uni_aten,
        obj_cobertura,
        obj_req_criter,
        obj_doctos,
        obj_crit_priori,
        obj_zona_aten,
        obj_sectores_apoya,
        obj_sec_01,
        obj_sec_02,
        obj_sec_03,
        obj_sec_04,
        obj_sec_05,
        obj_sec_06,
        obj_sec_07,
        obj_sec_08,
        obj_sec_09,
        obj_sec_10,
        obj_sec_11,
        obj_sec_12,
        obj_sec_13,
        obj_sec_14,
        obj_sec_15,
        obj_sec_16,
        obj_sec_17,
        obj_sec_18,
        obj_sec_19,
        obj_sec_20,
        obj_sec_21,
        obj_sec_22,
        obj_oper_ejec1,
        obj_oper_ejec2,
        obj_oper_ejec3,
        obj_oper_ejec4,
        obj_oper_ejec5,
        obj_oper_ejec6,
        obj_ods01,
        obj_ods02,
        obj_ods03,
        obj_ods04,
        obj_ods05,
        obj_ods06,
        obj_ods07,
        obj_ods08,
        obj_ods09,
        obj_ods10,
        obj_ods11,
        obj_ods12,
        obj_ods13,
        obj_ods14,
        obj_ods15,
        obj_ods16,
        obj_ods17,
        obj_pdem01,
        obj_pdem02,
        obj_pdem03,
        obj_pdem04,
        obj_pdem05,
        obj_pdem06,
        obj_pdem07,
        obj_pdem08,
        periodo_id1,
        mes_id1,
        dia_id1,
        obj_obs1,
        obj_obs2,
        obj_arc1,
        obj_arc2,
        obj_status1,
        obj_status2 } = useSelector(state => state.detalleobjetivo);
    const info = localStorage.getItem("isObjectInfo");
        console.log(obj_prog);
   useEffect(() => {
  
        if((JSON.parse(info)[0] != null && JSON.parse(info)[1] != null )){
          dispatch(getObjetivoPrograma('get-detalle-objetivo', JSON.parse(info)[1],JSON.parse(info)[0], token));
        }else{
          setLocalInfo(true);
        }
  
      }, [JSON.parse(info)[0], JSON.parse(info)[1], token]);


      const {register, handleSubmit, 
             formState: {isLoading, isValid, errors, isSubmitting, isSubmitted, isSubmitSuccessful}, setValue} = useForm({
            defaultValues:{
                prog_id:  JSON.parse(info)[0],
                periodo_id: JSON.parse(info)[1],
                obj_prog: '' != null ? obj_prog : 'S/D',
                obj_req_criter: '' != null ? obj_req_criter : 'S/D',
                obj_doctos: '' != null ? obj_doctos : 'S/D',
                obj_sec_01: '' != null ? obj_sec_01 : '',
                obj_sec_02: '' != null ? obj_sec_02 : '',
                obj_sec_03: '' != null ? obj_sec_03 : '',
                obj_sec_04: '' != null ? obj_sec_04 : '',
                obj_sec_05: '' != null ? obj_sec_05 : '',
                obj_sec_06: '' != null ? obj_sec_06 : '',
                obj_sec_07: '' != null ? obj_sec_07 : '',
                obj_sec_08: '' != null ? obj_sec_08 : '',
                obj_sec_09: '' != null ? obj_sec_09 : '',
                obj_sec_10: '' != null ? obj_sec_10 : '',
                obj_sec_11: '' != null ? obj_sec_11 : '',
                obj_sec_12: '' != null ? obj_sec_12 : '',
                obj_sec_13: '' != null ? obj_sec_13 : '',
                obj_sec_14: '' != null ? obj_sec_14 : '',
                obj_sec_15: '' != null ? obj_sec_15 : '',
                obj_sec_16: '' != null ? obj_sec_16 : '',
                obj_sec_17: '' != null ? obj_sec_17 : '',
                obj_sec_18: '' != null ? obj_sec_18 : '',
                obj_sec_19: '' != null ? obj_sec_19 : '',
                obj_sec_20: '' != null ? obj_sec_20 : '',
                obj_sec_21: '' != null ? obj_sec_21 : '',
                obj_sec_22: '' != null ? obj_sec_22 : '',
                obj_oper_ejec1: '' != null ? obj_oper_ejec1 : '',
                obj_oper_ejec2: '' != null ? obj_oper_ejec2 : '',
                obj_oper_ejec3: '' != null ? obj_oper_ejec3 : '',
                obj_oper_ejec4: '' != null ? obj_oper_ejec4 : '',
                obj_ods01: '' != null ? obj_ods01 : '',
                obj_ods02: '' != null ? obj_ods02 : '',
                obj_ods03: '' != null ? obj_ods03 : '',
                obj_ods04: '' != null ? obj_ods04 : '',
                obj_ods05: '' != null ? obj_ods05 : '',
                obj_ods06: '' != null ? obj_ods06 : '',
                obj_ods07: '' != null ? obj_ods07 : '',
                obj_ods08: '' != null ? obj_ods08 : '',
                obj_ods09: '' != null ? obj_ods09 : '',
                obj_ods10: '' != null ? obj_ods10 : '',
                obj_ods11: '' != null ? obj_ods11 : '',
                obj_ods12: '' != null ? obj_ods12 : '',
                obj_ods13: '' != null ? obj_ods13 : '',
                obj_ods14: '' != null ? obj_ods14 : '',
                obj_ods15: '' != null ? obj_ods15 : '',
                obj_ods16: '' != null ? obj_ods16 : '',
                obj_ods17: '' != null ? obj_ods17 : '',
                obj_pdem01: '' != null ? obj_pdem01 : '',
                obj_pdem02: '' != null ? obj_pdem02 : '',
                obj_pdem03: '' != null ? obj_pdem03 : '',
                obj_pdem04: '' != null ? obj_pdem04 : '',
                obj_pdem05: '' != null ? obj_pdem05 : '',
                obj_pdem06: '' != null ? obj_pdem06 : '',
                obj_pdem07: '' != null ? obj_pdem07 : ''

            }
      });

    const onSubmit = (dataForm) => {
        const getVars = {... dataForm}
        dispatch(storeData("update-detalle-objetivo", getVars, token));
    }
    const onErrors = (errors) => {
        const getErrors = {... errors};
        console.log("submit" + isSubmitting);
    }

    
    const onGetFormInputs = (e) => {
        const getForm = {... e.target};
        console.log("FORM" ,getForm);
    }
    
    return (
        <>
        <div className = "p-6 overflow-y-auto">
            { statedetalleobj != 'full' ? <Loading /> : 
                
            <form onSubmit={handleSubmit(onSubmit, onErrors, onGetFormInputs)} >
                <div className = "grid grid-cols-12 gap-6">

                       
                    

                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">1. Describir el o los objetivos del programa y/o acción (4,000 caracteres)</label>
                        <textarea 
                        id="obj_prog"
                         rows="4" 
                         class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                         {...register("obj_prog", {required: true})}
                         placeholder="Respuesta aquí ...">
                        { `${obj_prog === null ? 'S/D' : obj_prog}` }
                        </textarea>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">2. Requisitos y criterios de selección del beneficiario (4,000 caracteres)</label>
                        <textarea
                         id="obj_req_criter" 
                         rows="4" 
                         class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                         {...register("obj_prog", {required: true})}
                         placeholder="Respuesta aquí ...">
                        { `${obj_req_criter === null ? 'S/D' : obj_req_criter}` }
                        </textarea>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">3. Documentos solicitados (4,000 caracteres)</label>
                        <textarea 
                        id="obj_doctos" 
                        rows="4"
                        {...register("obj_doctos", {required: true})}
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Respuesta aquí ...">
                        { `${obj_doctos === null ? 'S/D' : obj_doctos}` }
                        </textarea>
                    </div>
                    <div className = "col-span-12">
                        <div className="col-span-12">
                            <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">4. Sectores que se apoyan con el programa y/o acción</label>
                        </div>
                        <div className = "grid grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label for="small" class="block mb-2 text-sm font-bold text-[#8B2135] dark:text-white">Desarrollo social</label>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="1101" type="checkbox" value="1101" 
                                        name = '1101'
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_01 != null ? 'checked' : ''}
                                         {...register("obj_sec_01", {required: false})}
                                         />
                                        <label for="1101" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Social</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="1102" 
                                        type="checkbox" 
                                        value="1102" 
                                        name = '1102'
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_02 != null ? 'checked' : ''} 
                                        {...register("obj_sec_02", {required: false})}/>
                                        <label for="1102" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Educación</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="1103" 
                                        type="checkbox" 
                                        value="1103" 
                                        name = '1103' 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_03 != null ? 'checked' : ''} 
                                        {...register("obj_sec_03", {required: false})}/>
                                        <label for="1103" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cultura y Turismo</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1104" 
                                        type="checkbox" 
                                        value="1104" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_04 != null ? 'checked' : ''} 
                                        {...register("obj_sec_04", {required: false})}/>
                                        <label for="1104" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salud y Seguridad</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <div className = "grid grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label for="small" class="block mb-2 text-sm font-bold text-[#8B2135] dark:text-white">Desarrollo Territorial</label>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1301" 
                                        type="checkbox" 
                                        value="1301"
                                         name="bordered-checkbox" 
                                         class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                         defaultChecked = { obj_sec_05 != null ? 'checked' : ''} 
                                         {...register("obj_sec_05", {required: false})}/>
                                        <label for="1301" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desarrollo urbano y regional</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1302" 
                                        type="checkbox" 
                                        value="1302" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_06 != null ? 'checked' : ''} 
                                        {...register("obj_sec_06", {required: false})}/>
                                        <label for="1302" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Energía</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1303" 
                                        type="checkbox" 
                                        value="1303" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        defaultChecked = { obj_sec_07 != null ? 'checked' : ''}  
                                        {...register("obj_sec_07", {required: false})}/>
                                        <label for="1303" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medio ambiente</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1304" 
                                        type="checkbox" 
                                        value="1304" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_08 != null ? 'checked' : ''} 
                                        {...register("obj_sec_08", {required: false})}/>
                                        <label for="1304" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manejo y control de recursos hidricos</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <div className = "grid grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label for="small" class="block mb-2 text-sm font-bold text-[#8B2135] dark:text-white">Seguridad</label>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1401" 
                                        type="checkbox" 
                                        value="1401" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_09 != null ? 'checked' : ''} 
                                        {...register("obj_sec_09", {required: false})}/>
                                        <label for="1401" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seguridad pública</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1402" 
                                        type="checkbox" 
                                        value="1402" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_10 != null ? 'checked' : ''} 
                                        {...register("obj_sec_10", {required: false})}/>
                                        <label for="1402" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Procuraduria e impartición de Justicia</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1403" 
                                        type="checkbox" 
                                        value="1403" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_11 != null ? 'checked' : '' } 
                                        {...register("obj_sec_11", {required: false})}/>
                                        <label for="1403" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Protección de los Derechos Humanos</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <div className = "grid grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label for="small" class="block mb-2 text-sm font-bold text-[#8B2135] dark:text-white">Gobierno</label>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1501" 
                                        type="checkbox" 
                                        value="1501" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_12 != null ? 'checked' : ''} 
                                        {...register("obj_sec_12", {required: false})}/>
                                        <label for="1501" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administración y Finanzas</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1502" 
                                        type="checkbox" 
                                        value="1502" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_13 != null ? 'checked' : ''} 
                                        {...register("obj_sec_13", {required: false})}/>
                                        <label for="1502" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gobernabilidad</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1503" 
                                        type="checkbox" 
                                        value="1503" 
                                        name="bordered-checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_14 != null ? 'checked' : ''} 
                                        {...register("obj_sec_14", {required: false})}/>
                                        <label for="1503" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sistema anticorrupción</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1504" 
                                        type="checkbox" 
                                        value="1504" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_15 != null ? 'checked' : ''} 
                                        {...register("obj_sec_15", {required: false})}/>
                                        <label for="1504" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gobierno digital</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1505" 
                                        type="checkbox" 
                                        value="1504" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_16 != null ? 'checked' : '' } 
                                        {...register("obj_sec_16", {required: false})}/>
                                        <label for="1505" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Órganos electorales</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <div className = "grid grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label for="small" class="block mb-2 text-sm font-bold text-[#8B2135] dark:text-white">Organismo constitucional</label>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1601"
                                         type="checkbox" 
                                         value="1601" 
                                         name="bordered-checkbox" 
                                         class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                         defaultChecked = { obj_sec_17 != null ? 'checked' : ''}
                                         {...register("obj_sec_17", {required: false})}
                                         />
                                        <label for="1601" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Legislativo</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1602" 
                                        type="checkbox" 
                                        value="1602" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_18 != null ? 'checked' : ''}
                                        
                                        {...register("obj_sec_18", {required: false})}/>
                                        <label for="1602" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Judicial</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <div className = "grid grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label for="small" class="block mb-2 text-sm font-bold text-[#8B2135] dark:text-white">Desarrollo económico</label>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1201" 
                                        type="checkbox" 
                                        value="1201" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_19 != null ? 'checked' : ''}
                                        
                                        {...register("obj_sec_19", {required: false})}/>
                                        <label for="1201" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Empleo</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1202" 
                                        type="checkbox" 
                                        value="1202" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_20 != null ? 'checked' : ''}
                                        
                                        {...register("obj_sec_20", {required: false})}/>
                                        <label for="1202" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Movilidad</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1203" 
                                        type="checkbox" 
                                        value="1203" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_21 != null ? 'checked' : ''}
                                        
                                        {...register("obj_sec_21", {required: false})}/>
                                        <label for="1203" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Económico</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="1204" 
                                        type="checkbox" 
                                        value="1204" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_sec_22 != null ? 'checked' : ''}
                                        
                                        {...register("obj_sec_22", {required: false})}/>
                                        <label for="1204" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agropecuario</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">5. La operación/ejecución del programa y/o acción es</label>
                        <div className = 'grid grid-cols-12 gap-6'>
                            <div className="col-span-3">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="F" 
                                        type="checkbox" 
                                        value="F" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_oper_ejec1 != null ? 'checked' : ''}
                                        {...register("obj_oper_ejec1", {required: false})}/>
                                        <label for="F" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Federal</label>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="E" 
                                        type="checkbox" 
                                        value="E" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_oper_ejec2 != null ? 'checked' : ''}
                                        {...register("obj_oper_ejec2", {required: false})}/>
                                        <label for="E" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estatal</label>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="M" 
                                        type="checkbox" 
                                        value="M" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_oper_ejec3 != null ? 'checked' : ''}
                                        {...register("obj_oper_ejec3", {required: false})}/>
                                        <label for="M" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Municipal</label>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="P" 
                                        type="checkbox" 
                                        value="P" 
                                        name="bordered-checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        defaultChecked = { obj_oper_ejec4 != null ? 'checked' : ''}
                                        {...register("obj_oper_ejec4", {required: false})}/>
                                        <label for="P" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Privado</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">6. Señalar a cuáles de los 17 Objetivos de desarrollo sostenible, en la Agenda 2030, se alinean con el programa y/o acción</label>
                        <ul class="grid w-full gap-6 md:grid-cols-3 justify-items-stretch">
                            <li className="">
                                <input 
                                type="checkbox" 
                                id="objetivo-1" 
                                value="S" 
                                class="hidden peer" 
                                required="" 
                                defaultChecked = {  obj_ods01 != null ? 'checked' : ''}
                                {... register("obj_ods01", {required: false})}/>
                                <label for="objetivo-1" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="block">
                                    <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/1.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 1:</div>
                                        <div class="w-full text-sm">Poner fin a la pobreza en todas sus formas en todo el mundo</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-2" 
                                value="S" 
                                class="hidden peer" 
                                defaultChecked = {  obj_ods02 != null ? 'checked' : ''}
                                {... register("obj_ods02", {required: false})}/>
                                <label for="objetivo-2" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/2.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 2</div>
                                        <div class="w-full text-sm">Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-3" 
                                value="S" 
                                class="hidden peer" 
                                defaultChecked = {  obj_ods03 != null ? 'checked' : ''}
                                {... register("obj_ods03", {required: false})}/>
                                <label for="objetivo-3" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/3.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 3</div>
                                        <div class="w-full text-sm">Garantizar una vida sana y promover el bienestar para todos en todas las edades.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-4" 
                                value="S" 
                                class="hidden peer" 
                                required="" 
                                defaultChecked = {  obj_ods04 != null ? 'checked' : ''}
                                {... register("obj_ods04", {required: false})}/>
                                <label for="objetivo-4" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/4.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 4:</div>
                                        <div class="w-full text-sm">Garantizar una educación equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-5" 
                                value="S" 
                                class="hidden peer"
                                defaultChecked = {  obj_ods05 != null ? 'checked' : ''} 
                                {... register("obj_ods05", {required: false})}/>
                                <label for="objetivo-5" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/5.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 5</div>
                                        <div class="w-full text-sm">Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-6" 
                                value="S" 
                                class="hidden peer"
                                defaultChecked = {  obj_ods06 != null ? 'checked' : ''} 
                                {... register("obj_ods06", {required: false})}/>
                                <label for="objetivo-6" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/6.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 6</div>
                                        <div class="w-full text-sm">Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-7" 
                                value="S" 
                                class="hidden peer" 
                                required="" 
                                defaultChecked = {  obj_ods07 != null ? 'checked' : ''}
                                {... register("obj_ods07", {required: false})}/>
                                <label for="objetivo-7" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/7.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 7:</div>
                                        <div class="w-full text-sm">Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-8" 
                                value="S" 
                                class="hidden peer"
                                defaultChecked = {  obj_ods08 != null ? 'checked' : ''} 
                                {... register("obj_ods08", {required: false})}/>
                                <label for="objetivo-8" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/8.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 8</div>
                                        <div class="w-full text-sm">Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox"
                                 id="objetivo-9" 
                                 value="S" 
                                 class="hidden peer" 
                                 defaultChecked = {  obj_ods09 != null ? 'checked' : ''}
                                 {... register("obj_ods09", {required: false})}/>
                                <label for="objetivo-9" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/9.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 9</div>
                                        <div class="w-full text-sm">Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible y fomentar la innovación.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-10" 
                                value="S"
                                 class="hidden peer" 
                                 required="" 
                                 defaultChecked = {  obj_ods10 != null ? 'checked' : ''}
                                 {... register("obj_ods10", {required: false})}/>
                                <label for="objetivo-10" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/10.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 10:</div>
                                        <div class="w-full text-sm">Reducir la desigualdad en y entre los países.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-11" 
                                value="S" 
                                class="hidden peer"
                                defaultChecked = {  obj_ods11 != null ? 'checked' : ''} 
                                {... register("obj_ods11", {required: false})}/>
                                <label for="objetivo-11" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/11.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 11</div>
                                        <div class="w-full text-sm">Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-12"
                                 value="S" 
                                 class="hidden peer"
                                 defaultChecked = {  obj_ods12 != null ? 'checked' : ''} 
                                 {... register("obj_ods12", {required: false})}/>
                                <label for="objetivo-12" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/12.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 12</div>
                                        <div class="w-full text-sm">Garantizar modalidades de consumo y producción sostenibles.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-13" 
                                value="S" 
                                class="hidden peer"
                                defaultChecked = {  obj_ods13 != null ? 'checked' : ''} 
                                {... register("obj_ods13", {required: false})}/>
                                <label for="objetivo-13" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/13.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 13</div>
                                        <div class="w-full text-sm">Adoptar medidas urgentes para combatir el cambio climático y sus efectos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-14" 
                                value="S" 
                                class="hidden peer"
                                defaultChecked = {  obj_ods14 != null ? 'checked' : ''} 
                                {... register("obj_ods14", {required: false})}/>
                                <label for="objetivo-14" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/14.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 14</div>
                                        <div class="w-full text-sm">Conservar y utilizar en forma sostenible los océanos, los mares y los recursos marinos para el desarrollo sostenible.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" 
                                id="objetivo-15"
                                 value="S" 
                                 class="hidden peer" 
                                 defaultChecked = {  obj_ods15 != null ? 'checked' : ''}
                                 {... register("obj_ods15", {required: false})}/>
                                <label for="objetivo-15" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/15.JPG"} alt="" /> 
                                        <div class="w-full text-lg font-semibold">Objetivo 15</div>
                                        <div class="w-full text-sm overflow-y-scroll">Proteger, restablecer y promover el uso sostenible de los ecosistemas terrestres, gestionar los bosques de forma sostenible de los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras y poner freno a la pérdida de la diversidad biológica.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox"
                                 id="objetivo-16" 
                                 value="S"
                                  class="hidden peer"
                                  defaultChecked = {  obj_ods16 != null ? 'checked' : ''} 
                                  {... register("obj_ods16", {required: false})}/>
                                <label for="objetivo-16" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/16.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 16</div>
                                        <div class="w-full text-sm">Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y crear instituciones eficaces, responsables e inclusivas a todos los niveles.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox"
                                 id="objetivo-17" 
                                 value="S" 
                                 class="hidden peer"
                                 defaultChecked = {  obj_ods17 != null ? 'checked' : ''} 
                                 {... register("obj_ods17", {required: false})}/>
                                <label for="objetivo-17" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/17.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 17</div>
                                        <div class="w-full text-sm">Fortalecer los medios de ejecución y revitalizar la Alianza Mundial para el Desarrollo Sostenible.</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12">
                        <div className="col-span-12">
                            <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">7. Señalar a que pilares y ejes transversales del Plan de Desarrollo del Estado de México (PDEM) se alínean con el programa y/o acción</label>
                        </div>
                        <div className = "grid grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label for="small" class="block mb-2 text-sm font-bold text-[#8B2135] dark:text-white">Pilar</label>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="pilar-1" 
                                        type="checkbox" 
                                        value="S" 
                                        name="pilar-1" 
                                        defaultChecked = {  obj_pdem01 != null ? 'checked' : ''}
                                        {...register("obj_pdem01", {required: false})}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="pilar-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cero corrupción y gobierno del pueblo y para el pueblo.</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input
                                         id="pilar-2" 
                                         type="checkbox" 
                                         value="S"
                                        name="pilar-2" 
                                        defaultChecked = {  obj_pdem02 != null ? 'checked' : ''}
                                        {...register("obj_pdem02", {required: false})}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="pilar-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bienestar ambiental y acceso universal al agua.</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="pilar-3" 
                                        type="checkbox"
                                         value="S" 
                                         name="pilar-3" 
                                         defaultChecked = {  obj_pdem03 != null ? 'checked' : ''}
                                         {...register("obj_pdem03", {required: false})}
                                         class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="pilar-3" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Empleo digno y desarrollo económico</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="pilar-4" 
                                        type="checkbox" 
                                        value="S" 
                                        name="pilar-4" 
                                        defaultChecked = {  obj_pdem04 != null ? 'checked' : ''}
                                        {...register("obj_pdem04", {required: false})}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="pilar-4" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bienestar social</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <div className = "grid grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label for="small" class="block mb-2 text-sm font-bold text-[#8B2135] dark:text-white">Eje transversal</label>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="eje-1" 
                                        type="checkbox" 
                                        value="S" 
                                        name="eje-1" 
                                        defaultChecked = {  obj_pdem05 != null ? 'checked' : ''}
                                        {...register("obj_pdem05", {required: false})}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="eje-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Igualdad de género</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="eje-2"
                                         type="checkbox" 
                                         value="S" 
                                         name="eje-2" 
                                         defaultChecked = {  obj_pdem06 != null ? 'checked' : ''}
                                         {...register("obj_pdem06", {required: false})}
                                         class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="eje-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Construcción de la paz y seguridad</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        id="eje-3" 
                                        type="checkbox" 
                                        value="S" 
                                        name="eje-3" 
                                        defaultChecked = {  obj_pdem07 != null ? 'checked' : ''}
                                        {...register("obj_pdem07", {required: false})}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="eje-3" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cumplimiento de los ODS</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                    
                <div className = 'p-5 grid grid-cols-12 gap-5 justify-items-end'>
                    <div className = 'col-span-12'>
                    <button 
                          type="submit" 
                           class="
                           text-white 
                           bg-[#BB9150] 
                           hover:bg-[#921E29] 
                           focus:ring-4 
                           focus:outline-none 
                           focus:ring-[#921E29] 
                           font-medium rounded-full 
                           text-sm p-2.5 
                           text-center 
                           inline-flex items-center 
                           me-2 
                           dark:bg-blue-600 
                           dark:hover:bg-blue-700 
                           dark:focus:ring-blue-800
                           rounded-full
                           "
                          
                           > 
                               Editar
                     </button>

                    </div>
                     
                </div>
            </form>  
            }
        </div> 
        </>
    )

}