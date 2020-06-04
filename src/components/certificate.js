/** 
 * File: certificate.js
 * Description: Componente para ser importado dentro de 'posts.js' para los datos de los certificados.
 * NOTA: 'este viene a ser un componentes hijos.
*/
import React from 'react';

export default (props) =>{
    const certificate = props.element;
    return (
        <div className="shadow p-8 bg-white mr-4 rounded">
            <h4 className="font-bold text-center">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-teal-300 text-teal-700 p-2 mt-2 radius">Certificacion: {certificate.score}</span>
            </div>
        </div>
    );
}