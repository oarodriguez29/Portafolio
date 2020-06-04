import React from 'react';
import { graphql, Link } from 'gatsby';
import EdNav from "../components/education-nav";

export default (props)=>{
    //console.log(props.data);
    const pageData = props.data.educationJson;
    return (
        <div>
            <header className="py-12 border-teal-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to='/' className="btn">Regresar al inicio</Link>
                    <h2 className="capitalize text-6xl font-bold"> {pageData.title} </h2>
                    <p className="text-xl"> {pageData.description} </p>
                </div>
            </header>
            <ul>
                {
                    pageData.items.map((item, index)=>(
                        <li className="bg-white shadow mt-4 flex max-w-4xl mx-auto" key={index}>
                            <p className="vertical-text text-center">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{item.name}</h3>
                                    {
                                        item.degree && <span className="inline-block p-2 radius bg-teal-200 text-teal-700"> {item.degree} </span>
                                    }
                                    {
                                        item.url && <a href={item.url} target="_black" rel="noopener noreferrer" className="btn mt-4 inline-block">Ver Más</a>
                                    }
                                </div>
                                <div className="inline-block">
                                    <span className="inline-block p-1 text-2xl bg-blue-200 text-blue-700"> {item.score} </span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <EdNav />
        </div>
    );
}

export const query = graphql`
    query( $slug : String ) {
        educationJson(slug:{ eq: $slug }) {
            title
            description
            slug
            items{
                name
                degree
                score
                url
            }
          }
    }
`;