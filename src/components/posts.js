/**
 * File: posts.js
 * Description: Componente para ser importado en 'codigofacilito.js' de los datos de los certificados.
 * NOTA: '<Fragment><Fragment />' es un componente de React que agrupa otros componentes hijos.
*/
import React, { Fragment } from 'react';
import { BsCardList } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default (props) => (
    <Fragment>

      <h2 className="text-2xl text-blue-500 font-bold text-center italic p-5 mt-12">
        {props.title}

        <IconContext.Provider value={ {className: "inline-block ml-2 text-3xl" }}>
          <BsCardList />
          </ IconContext.Provider>
      </h2>

        <div className="flex mt-8 pb-4 pt-4 overflow-x-scroll">
            {
                props.data.map((el,index) => (
                    <props.card element={el} key={index}/>
                ))
            }
        </div>
    </Fragment>

)
