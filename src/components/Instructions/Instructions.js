import React from 'react';
//import ReactDOM from 'react-dom'
import './instructions.scss'

//array with each particular instruction
const objInstructions = {
     'Al viajar': ' consumes 1 día, pierdes 15 unidades de suministro, avanzas 10 km',

    'Al repostar': ' Consumes 1 día, Recuperas 20 unidades de suministro, No avanzas distancia',

    'Al Volcar' :' Pierdes 1 día en arraeglar el vagón, pierdes 30 unidades de suministro, no avanzas distancia'
    
}
const instructionsValues = Object.values(objInstructions)

export const Instructions = () =>{
    return (
        <div >
            <h2>Instrucciones</h2>
            <ul id='bg'>
                <li id="instruc">
                    <h3># Al viajar: 
                        {instructionsValues[0]}
                    </h3>
                </li>
                
                <li>
                    <h3>
                    # Al repostar:
                    {instructionsValues[1]}

                    </h3>
                </li>
                <li>
                    <h3>
                    # Al Volcar:
                    {instructionsValues[2]}
                    </h3>
                </li>
            </ul>

        </div>
    )
}
