/**
 * File: codigofacilito.js
 * Description: Componente para las Consultas de los datos de mis cursos para la App.
*/
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Posts from "./posts";
import Certificate from "./certificate";
import Course from "./course";

export default () => {
    // Consultas a GraphQL
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
              certificates {
                title
                score
                code
              }
              courses {
                progress
                title
                url
              }
            }
          }
    }`);

    //console.log(data);

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                   <Posts
                        data={data.codigofacilitoJson.data.certificates}
                        card={Certificate}
                        title="Mis Certificados de CodigoFacilito"
                    />
                    <Posts
                        data={data.codigofacilitoJson.data.courses}
                        card={Course}
                        title="Mis Cursos en CodigoFacilito"
                    />
                </div>
            </div>
        </section>
    );
}
