/**
 * File: certificate.js
 * Description: Componente para ser importado dentro de 'posts.js' para los datos de los certificados.
 * NOTA: 'este viene a ser un componentes hijos.
*/
import React from 'react';
import { BsFileText } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default (props) =>{
    const certificate = props.element;
    return (
        <div className="delay-150 duration-100 shadow text-center p-8 bg-green-200 hover:bg-green-300 mr-4 mb-4 rounded flex-shrink-0" style={{width: "300px"}}>

          <IconContext.Provider value={ {className: "inline-block mb-8 text-3xl" }}>
              <BsFileText />
          </ IconContext.Provider>

            <h4 className="font-bold mb-8 text-center">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-indigo-200 text-teal-700 p-2 mt-2 rounded">Calificación
                  <em className="rounded-full bg-blue-400 text-white shadow px-2 py-1 ml-2 font-bold">
                    {certificate.score}
                  </em>
                </span>
            </div>
        </div>
    );
}
