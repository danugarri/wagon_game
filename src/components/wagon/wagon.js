//IMPORT LIBRARIES
import React from 'react'
import ReactDOM from 'react-dom';
import {createStore} from 'redux'



// ** Initial State and Reducer **

//Initial State

const initialWagonState= {
    supplies: 100,
    distance: 0,
    days: 0
  }
  
  //Reducer
  
  const reducer = (state = initialWagonState,action) => {
    switch(action.type) {
      case 'gather' : {
        //determina una recarga
        return  {
          ...state,
        supplies:state.supplies + action.payload.supplies,
        distance:state.distance,
        days: state.days + action.payload.days
        }
      }
      case 'travel' : {
        //determina los días que viaja
        if(state.supplies>20 && state.supplies -(action.payload *20) > 0 ){ 
  // el mínmo de suministros para viajar por día es de 20
        return {
          ...state,
          supplies:state.supplies -(action.payload *20),
          distance:state.distance +(10*action.payload),
          days:state.days + action.payload
        }
       }
       else if (state.supplies<20||state.supplies -(action.payload *20) < 20 ){
         console.log('\nyou do not have enough supplies to travel for: '+action.payload+' more day/s, you need at least 20 supllies to travel per day')
          alert('\nNo tienes suficientes suministros para viajar durante : '+action.payload+'  día/s más, necesitas al menos 20 unidades de suministro, ¡¡RECARGA!!')
         return {
          ...state
        }
       }
       break
      }
        //vuelca el wagon
      case 'tippedWagon' : {
       return { 
         ...state,
          supplies: state.supplies -(action.payload.supplies),
          distance:state.distance,
          days:state.days + action.payload.days
         }
      }
       default : {
        return state
       }
  }
  }
  // create store for redux to manage the app state 
const store = createStore(reducer)

  
   //Actions
  
   const actionGather= {
    type: 'gather',
    payload: {
      supplies:15,
      distance: 0,
      days: 1
    }
  }
  const actionTravel = {
    type:'travel',
    payload:1// 1 day per travel
  }
   const actionTipped= {
    type: 'tippedWagon',
    payload: {
      supplies:30,
      distance: 0,
      days: 1
    }
  }
  /////////////////////////////////////////////////////////////////////////
  //implementing UI

  //REACT CODE

  //RENDER function to display component
//{Object.keys(initialWagonState).map(key => <li>{key.distance}</li>)}
  
//function component
  const Ui = (props) =>{
      const state= props.state

      //function listeners

      const gotSupplies = () =>{
          store.dispatch(actionGather)
      }

      const tippedWagon = ()=>{
        store.dispatch(actionTipped) 
      }

      const setTravel = ()=>{
        store.dispatch(actionTravel) 
      }


      return (
          <div style={{textAlign:'center'}}>
            <h1> Juego del vagon</h1>
            <ul style={{margin:'2px',padding:'10px',listStyle:'none'}}>
              
              {/*método Object.entries del estado inicial para que me devuelva los  keys y los values*/}
              {Object.entries(initialWagonState).map(element =><li> {element[0]} : {element[1]}</li>)}  
              <ul style={{margin:'2px',padding:'10px',listStyle:'none'}}> 
                {/*Esta parte del estado funciona, me falta sacar la lógica para mostrarlo de forma dinámica*/}
                <li>{state.supplies}</li>
                <li>{state.distance}</li>
                <li>{state.days}</li>
                </ul> 
                   
            </ul>
              
                 
              <button onClick={gotSupplies}>Recargar</button>
              <button onClick={tippedWagon}>Volcar vagón</button>
              <button onClick={setTravel}>Viajar</button>
          </div>
      )
  }
  const render = () =>{
    ReactDOM.render(
        <Ui  state= {store.getState()}/>,
        document.getElementById('root')
    )
}
//call to render() function
render()

//subscribe render() function to store

store.subscribe(render)
