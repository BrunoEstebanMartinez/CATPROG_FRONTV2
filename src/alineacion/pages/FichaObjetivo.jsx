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
                        <div className = "grid grid-cols-12 gap-4">
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal md:h-40 md:w-48 overflow-y-scroll">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                                    
                        </div>
                    </div>
                </div>
            </form>  
        </div> 
        </>
    )

}