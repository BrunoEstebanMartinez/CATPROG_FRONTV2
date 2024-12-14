import {React} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../ui/components";
import { useNavigate } from "react-router-dom";




export const FichaRegPrograma = ({safePeriodo, safeCvePrograma}) =>{

    const navigate = useNavigate();

    const {statusInfoProgram, prog_id, periodo_id} = useSelector(state => state.infoprograma);

    console.log("programa padre " + prog_id);

    
    if(prog_id == null){
        navigate('programa');
    }
        console.log(prog_id  + "global");

   

    return (
        <>
        { prog_id == null ? 
          navigate('programa')  : 
        <div className = "p-6 overflow-y-auto">
            <form>
                <div className = "grid grid-cols-12 gap-6">
                    <div className = "col-span-3">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Periodo fiscal</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Periodo...</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id.</label>
                        <input type="text" id="small-input" placeholder = "Digitar el Id. de programa" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="col-span-3">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programa y/o acción</label>
                        <input type="text" id="small-input" placeholder = "Digitar el Id. de programa" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="col-span-3">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vertiente</label>
                        <input type="text" id="small-input" placeholder = "Digitar el Id. de programa" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className = "col-span-6">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-6">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsable</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-4">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dependencia adscrita</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-4">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organismo auxiliar</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-4">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unidad administrativa responsable</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿El programa o acción es excluyente con otros Programas y/o acciones de acuerdo a sus reglas de operación y/o Marco Normativo?</label>
                        <div className = "grid grid-cols-12 gap-6">
                            <div class="col-span-6">
                                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Si</label>
                            </div>
                            <div class="col-span-6">
                                <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">En caso de que SÍ es excluyente, ¿Especificar con cuales? (2,000 caracteres)</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Respuesta aquí ..."></textarea>
                    </div>
                </div>
            </form>  
        </div>   
}    
        </>
    );
    
   
}


function isGetTypePGView (passTypePeriodo, passTypePrograma){

    return (
        <>
        <div className = "p-6 overflow-y-auto">
            <form>
                <div className = "grid grid-cols-12 gap-6">
                    <div className = "col-span-3">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Periodo fiscal</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Periodo...</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id.</label>
                        <input type="text" id="small-input" placeholder = "Digitar el Id. de programa" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="col-span-3">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programa y/o acción</label>
                        <input type="text" id="small-input" placeholder = "Digitar el Id. de programa" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="col-span-3">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vertiente</label>
                        <input type="text" id="small-input" placeholder = "Digitar el Id. de programa" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className = "col-span-6">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-6">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsable</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-4">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dependencia adscrita</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-4">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organismo auxiliar</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-4">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unidad administrativa responsable</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿El programa o acción es excluyente con otros Programas y/o acciones de acuerdo a sus reglas de operación y/o Marco Normativo?</label>
                        <div className = "grid grid-cols-12 gap-6">
                            <div class="col-span-6">
                                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Si</label>
                            </div>
                            <div class="col-span-6">
                                <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">En caso de que SÍ es excluyente, ¿Especificar con cuales? (2,000 caracteres)</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Respuesta aquí ..."></textarea>
                    </div>
                </div>
            </form>  
        </div>       
        </>
    );

}

function isGetTypeADView (passTypePeriodo, passTypePrograma){

    return (
        <>
        <div className = "p-6 overflow-y-auto">
            <form>
                <div className = "grid grid-cols-12 gap-6">
                    <div className = "col-span-3">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Periodo fiscal</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Periodo...</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id.</label>
                        <input type="text" id="small-input" placeholder = "Digitar el Id. de programa" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="col-span-3">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programa y/o acción</label>
                        <input type="text" id="small-input" placeholder = "Digitar el Id. de programa" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="col-span-3">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vertiente</label>
                        <input type="text" id="small-input" placeholder = "Digitar el Id. de programa" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className = "col-span-6">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-6">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsable</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-4">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dependencia adscrita</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-4">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organismo auxiliar</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-4">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unidad administrativa responsable</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección ...</option>
                        </select>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿El programa o acción es excluyente con otros Programas y/o acciones de acuerdo a sus reglas de operación y/o Marco Normativo?</label>
                        <div className = "grid grid-cols-12 gap-6">
                            <div class="col-span-6">
                                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Si</label>
                            </div>
                            <div class="col-span-6">
                                <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">En caso de que SÍ es excluyente, ¿Especificar con cuales? (2,000 caracteres)</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Respuesta aquí ..."></textarea>
                    </div>
                </div>
            </form>  
        </div>       
        </>
    );

}