import {React} from "react";




export const FichaObjectivo = ({safePeriodo, safeCvePrograma}) => {

    return (
        <>
        <div className = "p-6 overflow-y-auto">
            <form>
                <div className = "grid grid-cols-12 gap-6">
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">1. Describir el o los objetivos del programa y/o acción (4,000 caracteres)</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Respuesta aquí ..."></textarea>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">2. Requisitos y criterios de selección del beneficiario (4,000 caracteres)</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Respuesta aquí ..."></textarea>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">3. Documentos solicitados (4,000 caracteres)</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Respuesta aquí ..."></textarea>
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
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Social</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Educación</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cultura y Turismo</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salud y Seguridad</label>
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
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desarrollo urbano y regional</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Energía</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medio ambiente</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manejo y control de recursos hidricos</label>
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
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seguridad pública</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Procuraduria e impartición de Justicia</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Protección de los Derechos Humanos</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salud y seguridad</label>
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
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gobernabilidad</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sistema anticorrupción</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gobierno digital</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Órganos electorales</label>
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
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Legislativo</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Judicial</label>
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
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Empleo</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Movilidad</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Económico</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agropecuario</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">5. La operación/ejecución del programa y/o acción es</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selección...</option>
                        </select>
                    </div>
                    <div className = "col-span-12">
                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">6. Señalar a cuáles de los 17 Objetivos de desarrollo sostenible, en la Agenda 2030, se alinean con el programa y/o acción</label>
                        <ul class="grid w-full gap-6 md:grid-cols-3">
                            <li>
                                <input type="checkbox" id="objetivo-1" value="" class="hidden peer" required="" />
                                <label for="objetivo-1" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="block">
                                    <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/1.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 1:</div>
                                        <div class="w-full text-sm">Poner fin a la pobreza en todas sus formas en todo el mundo</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-2" value="" class="hidden peer" />
                                <label for="objetivo-2" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/2.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 2</div>
                                        <div class="w-full text-sm">Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-3" value="" class="hidden peer" />
                                <label for="objetivo-3" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/3.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 3</div>
                                        <div class="w-full text-sm">Garantizar una vida sana y promover el bienestar para todos en todas las edades.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-4" value="" class="hidden peer" required="" />
                                <label for="objetivo-4" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/4.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 4:</div>
                                        <div class="w-full text-sm">Garantizar una educación equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-5" value="" class="hidden peer" />
                                <label for="objetivo-5" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/5.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 5</div>
                                        <div class="w-full text-sm">Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-6" value="" class="hidden peer" />
                                <label for="objetivo-6" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/6.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 6</div>
                                        <div class="w-full text-sm">Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-7" value="" class="hidden peer" required="" />
                                <label for="objetivo-7" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/7.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 7:</div>
                                        <div class="w-full text-sm">Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-8" value="" class="hidden peer" />
                                <label for="objetivo-8" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/8.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 8</div>
                                        <div class="w-full text-sm">Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-9" value="" class="hidden peer" />
                                <label for="objetivo-9" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/9.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 9</div>
                                        <div class="w-full text-sm">Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible y fomentar la innovación.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-10" value="" class="hidden peer" required="" />
                                <label for="objetivo-10" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/10.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 10:</div>
                                        <div class="w-full text-sm">Reducir la desigualdad en y entre los países.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-11" value="" class="hidden peer" />
                                <label for="objetivo-11" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/11.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 11</div>
                                        <div class="w-full text-sm">Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-12" value="" class="hidden peer" />
                                <label for="objetivo-12" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/12.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 12</div>
                                        <div class="w-full text-sm">Garantizar modalidades de consumo y producción sostenibles.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-13" value="" class="hidden peer" />
                                <label for="objetivo-13" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/13.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 13</div>
                                        <div class="w-full text-sm">Adoptar medidas urgentes para combatir el cambio climático y sus efectos.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-14" value="" class="hidden peer" />
                                <label for="objetivo-14" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/14.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 14</div>
                                        <div class="w-full text-sm">Conservar y utilizar en forma sostenible los océanos, los mares y los recursos marinos para el desarrollo sostenible.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-15" value="" class="hidden peer" />
                                <label for="objetivo-15" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/15.JPG"} alt="" /> 
                                        <div class="w-full text-lg font-semibold">Objetivo 15</div>
                                        <div class="w-full text-sm">Proteger, restablecer y promover el uso sostenible de los ecosistemas terrestres, gestionar los bosques de forma sostenible de los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras y poner freno a la pérdida de la diversidad biológica.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-16" value="" class="hidden peer" />
                                <label for="objetivo-16" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <img class="mb-2 w-7 h-7 text-sky-500" src={"src/images/objetivos/16.JPG"} alt="" />
                                        <div class="w-full text-lg font-semibold">Objetivo 16</div>
                                        <div class="w-full text-sm">Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y crear instituciones eficaces, responsables e inclusivas a todos los niveles.</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" id="objetivo-17" value="" class="hidden peer" />
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
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cero corrupción y gobierno del pueblo y para el pueblo.</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bienestar ambiental y acceso universal al agua.</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Empleo digno y desarrollo económico</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bienestar social</label>
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
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Igualdad de género</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Construcción de la paz y seguridad</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                     <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cumplimiento de los ODS</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </form>  
        </div> 
        </>
    )

}