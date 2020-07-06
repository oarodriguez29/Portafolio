/**
 * File: repo.js
 * Description: Componente para Mostrar c/u de los Repositorios que tenemos en github para nuestra App.
*/
import React from "react";
//import repo from "../data/repos"; // Importando repositorio de prueba

export default (props) => (
    <li className="flex pt-2">
        <div className="w-9/12 overflow-x-hidden">
            <h4 className="text-pink-600 font-bold"> {props.repo.name} </h4>
            <p className="text-sm text-gray-800 overflow-hidden truncate" style={{ height:"5em" }}> {props.repo.description} </p>
        </div>
        <div className="flex-1 w-3/12 text-right">
            <a href={props.repo.html_url} className="rounded-full bg-teal-400 hover:bg-teal-500 text-white shadow px-2 py-1 font-bold italic" target="_blank" rel="noopener noreferrer">Ver</a>
        </div>
    </li>
);
