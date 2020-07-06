/**
 * File: post.js
 * Description: Componente para crear la vista y ser usado en el File 'medium.js'.
*/
import React from 'react';

export default (props) => {
    const post = props.element;
    return (
            <div className="max-w-sm w-full lg:max-w-full lg:flex mr-4 p-2 shadow hover:shadow-lg bg-gray-200 hover:bg-gray-300 bg-opacity-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 mr-4 flex-shrink-0" style={{width:"450px"}}>
              <div className="h-48 bg-cover bg-center lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${post.thumbnail})`}}>
              </div>
              <div className="p-4">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold mb-2">{post.title}</div>
                </div>
                <div className="flex justify-center items-center">
                    <a className="btn" href={post.link} >Leer</a>
                </div>
              </div>
            </div>
    );
}
