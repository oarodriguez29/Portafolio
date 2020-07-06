import React from 'react';
import { BsSubtract } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default (props)=>{
    const course = props.element;
    return (
        <div className="delay-150 duration-100 shadow text-center p-8 bg-blue-100 hover:bg-blue-200 mr-4 mb-4 rounded flex-shrink-0" style={{width: "300px"}}>

            <IconContext.Provider value={ {className: "inline-block mb-6 text-teal-500 text-xl" }}>
                <BsSubtract />
            </ IconContext.Provider>

            <h4 className="font-bold h-20 overflow-y-hidden">
                <a href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a>
            </h4>
            <div className="text-center mt-12">
                <span className="inline-block bg-teal-500 text-teal-100 p-3 mt-2 rounded-full">Progreso: {parseInt(course.progress)}%</span>
            </div>
        </div>
    );
}
