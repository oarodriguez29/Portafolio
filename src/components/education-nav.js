import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default (props) =>{
    const data = useStaticQuery(graphql`
        {
            allEducationJson {
                edges {
                    node {
                    slug
                    description
                    title
                    }
                }
            }
        }

    `);

    return (
        <div className="mx-auto mt-20">
            <h2 className="text-2xl font-bold text-center"><em>Conoce Sobre Mi información Educativa</em></h2>
            <nav className="flex flex-wrap justify-center mt-8">
                {
                    data.allEducationJson.edges.map((element,index)=>{
                        const { node } = element;

                        return (
                            <article className="sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/6 mb-4 bg-indigo-200 bg-opacity-50 hover:shadow-xl shadow m-4 max-w-sm p-4" key={index}>
                                <header>
                                    <p className="italic font-bold text-center leading-loose"> {node.title} </p>
                                    <div className="mt-8 text-center">
                                        <p className="font-light h-20"> {node.description} </p>
                                        <Link to={`${node.slug}`} className="btn inline-block mt-4">ir</Link>
                                    </div>
                                </header>
                            </article>
                        );
                    })
                }
            </nav>
        </div>
    );
}
