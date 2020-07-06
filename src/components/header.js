/**
 * File: Header.js
 * Description: Componente para los Encabezados de la App.
*/
import React from "react";
import illustration from "../imgs/dev.svg"; // Importar la imagen
import Form from "./contact.form"; // Importando componente 'contact.form.js'

export default () => (
    <header className="bg-gray-300 shadow">
        <div className="container mx-auto p-12 max-w-4xl">

            <div className="flex flex-wrap justify-center items-center">
                <div className="sm:w-1/2 md:w-2/3 lg:w-2/4 xl:w-3/6 mb-4">
                    <h1 className="font-bold text-teal-700 text-5xl">Hola! soy Omar</h1>
                    <p className="text-xl font-light">Desarrollo Aplicaciones Web en Diversas Técnologias</p>
                </div>

              <div className="sm:w-1/2 md:w-2/3 lg:w-2/4 xl:w-3/6 mb-4">
                <img className="" src={illustration} alt="desarrollador" style={{height: "300px"}}></img>
              </div>
            </div>

            <div>
                <Form />
            </div>
        </div>
    </header>

);
