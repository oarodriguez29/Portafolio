/** 
 * File: index.js
 * Description: Pagina Principal de la App.
*/
import React from "react";
import Header from "../components/header";  // Importando componente 'header.js'
import Repos from "../components/repos";  // Importando componente 'repos.js'
import Codigofacilito from "../components/codigofacilito"; // Importando componente 'codigofacilito.js'
import Medium from "../components/medium";
import EdNav from "../components/education-nav";

/*
export default function Home() {
  return <div>Hello world!</div>  
}
*/

// Importando el componente 'Header'
export default () => <div>
  <Header />
  <EdNav />
  <Repos />
  <Codigofacilito />
  <Medium />
</div>
