/** 
 * File: Header.js
 * Description: Componente para los Encabezados de la App.
*/
import React from "react";
import illustration from "../imgs/dev.svg"; // Importar la imagen
import Form from "./contact.form"; // Importando componente 'contact.form.js'

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">

            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-teal-700 text-6xl">Hola! soy Omar</h1>
                    <p className="text-xl font-light">Desarrollo Aplicaciones Web en Diversas Técnologias</p>
                </div>
                <img src={illustration} alt="desarrollador" style={{height: "300px"}}></img>
            </div>
            
            <div>
                <Form />
            </div>
        </div>
    </header>

);