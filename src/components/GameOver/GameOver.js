//componente para próximas implementaciones

import React from 'react';
import ReactDOM from 'react-dom'



export const GameOver = () => {

    return (
        <body>
            <h1>
                HAS PERDIDO!!
            </h1>
            <button>Reiniciar</button>
        </body>
    )
}

export const renderGameOver = () =>{
    ReactDOM.render(
      <React.StrictMode>
        <GameOver/>
      </React.StrictMode>,
        document.getElementById('root')
    )
  }

 