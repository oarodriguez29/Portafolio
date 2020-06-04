/** 
 * File: repo.js
 * Description: Componente para Mostrar c/u de los Repositorios que tenemos en github para nuestra App.
*/
import React from "react";
//import repo from "../data/repos"; // Importando repositorio de prueba

export default (props) => (
    <li className="flex items-center">
        <div className="w-9/12 overflow-x-hidden">
            <h4 className="text-pink-600 font-bold"> {props.repo.name} </h4>
            <p className="text-sm text-gray-800 overflow-hidden truncate" style={{ height:"5em" }}> {props.repo.description} </p>
        </div>
        <div className="flex-1 text-right">
            <a href={props.repo.html_url} className="text-teal-800" target="_blank" rel="noopener noreferrer"> Ver </a>
        </div>
    </li>
);