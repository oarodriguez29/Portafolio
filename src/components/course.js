import React from 'react';

export default (props)=>{
    const course = props.element;
    return (        
        <div className="shadow text-center p-8 bg-white mr-4 mb-4 rounded flex-shrink-0" style={{width: "300px"}}>
            <h4 className="font-bold h-20 overflow-y-hidden">
                <a href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a>    
            </h4>
            <div className="text-center mt-12">
                <span className="inline-block bg-teal-300 text-teal-700 p-2 mt-2 radius">Progreso: {parseInt(course.progress)}%</span>
            </div>
        </div>
    );
}