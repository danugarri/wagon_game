import React from 'react';
//import ReactDOM from 'react-dom'
import './instructions.scss'

//array with each particular instruction
const objInstructions = {
     'Al viajar': ' consumes 1 día, pierdes 15 unidades de suministro, avanzas 10 km',

    'Al repostar': ' Consumes 1 día, Recuperas 20 unidades de suministro, No avanzas distancia',

    'Al Volcar' :' Pierdes 1 día en arraeglar el vagón, pierdes 30 unidades de suministro, no avanzas distancia',
    'Game over' :' Si vuelcas teniendo menos de 30 unidades',
    'Victoria' :' Si recorres 80 km entre 9 y 12 días'
    
}


export const Instructions = () =>{
    return (
        <div >
            <h2>Instrucciones</h2>
            <ul id='bg' >
                {Object.entries(objInstructions).map(Element =><h3># {Element[0]} : {Element[1] }</h3>) }
            </ul>

        </div>
    ) 
}
