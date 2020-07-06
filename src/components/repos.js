/**
 * File: repos.js
 * Description: Componente para Mostrar Todos los Repositorios que tenemos en github para nuestra App.
*/
import React, { useEffect, useState } from "react";
//import repos from "../data/repos"; // Importando repositorio de prueba
import Repo from "./repo";

export default () => {

    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect(()=>{

        const data = sessionStorage.getItem("repos");
        let myRepos;
        if (data) {
            myRepos = JSON.parse(data);

            setReposCount(myRepos.length);

            myRepos = myRepos.slice(1, 13);
            return setRepos(myRepos);
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/oarodriguez29/repos");
            myRepos = await response.json();

            sessionStorage.setItem("repos", JSON.stringify(myRepos));

            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1, 13);
            setRepos(myRepos);
        }

        fetchRepos();
    },[]);

return (
    <div className="max-w-4xl mx-auto mt-12 mb-12">
        <header className="text-center">
                <h2 className="text-2xl font-bold"><em>Mi Trabajo en Open Source</em></h2>
                <p>Colaboracion y contribución de código.</p>
        </header>
        <ul className="repos-list">
            {
                repos.map((repo)=>{
                    // return <li> {repo.name} </li>
                    return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>
        <div className="mt-8 text-center">
            <a href="https://github.com/oarodriguez29" className="btn italic" target="_blank" rel="noopener noreferrer">
                Ver más en GitHub ({reposCount})
            </a>
        </div>
    </div>
   );
}
