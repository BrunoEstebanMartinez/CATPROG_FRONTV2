import {React} from "react";


export const FichaRegPrograma = ({safePeriodo, safeCvePrograma}) =>{

    return (
        <>
          
                        <div className = 'grid grid-cols-12 gap-4'>
                                <div className = 'col-span-6'><p className = 'text-xs font-bold'>Tipo Responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-normal'>Responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-bold'>Grupo responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-normal'>Responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-bold'>Dependencia y/o organismo auxiliar:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-normal'>Responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-bold'>Unidad operativa:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-normal'>Responsable:</p></div>
                                <div className = 'col-span-2'><p className = 'text-xs font-bold'>Tipo:</p></div>
                                <div className = ''><p className = 'text-xs font-normal'>Tipo de programa:</p></div>

                        </div>
                  
        </>
    );


}