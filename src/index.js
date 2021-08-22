//IMPORT LIBRARIES
import React from 'react'
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import { Instructions} from './components/Instructions/Instructions';
import '../src/components/wagon/wagon.scss'
import swal from 'sweetalert';





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
        //Randomly calculate id the wagon tipped
  const randomNum = Math.floor(Math.random()*4)//get a random number between 0 and 4
  if(randomNum===2){
     alert('has volcado, pierdes 30 unidades de suministro, y tardas 1 día más')
   if(state.supplies>30 ){ 
  return { 
    ...state,
     supplies: state.supplies -(action.payload.supplies),
     distance:state.distance,
     days:state.days + action.payload.days
    }
   }
   else if (state.supplies<30){
     console.log('\nHas perdido!!')
      swal('\nHas perdido!! ')
      return { 
       ...initialWagonState,
       }
   }
}
        //determina los días que viaja
        if(state.supplies>20 && state.supplies -(action.payload.days *20) > 0 ){ 
  // el mínmo de suministros para viajar por día es de 20
        return {
          ...state,
          supplies:state.supplies -(action.payload.days *20),
          distance:state.distance +(10*action.payload.days),
          days:state.days + action.payload.days
        }
       }
       else if (state.supplies<20||state.supplies -(action.payload.days *20) < 20 ){
         console.log('\nyou do not have enough supplies to travel for: '+action.payload.days+' more day/s, you need at least 20 supllies to travel per day')
          swal('\nNo tienes suficientes suministros para viajar durante : '+action.payload.days+'  día/s más, necesitas al menos 20 unidades de suministro, ¡¡RECARGA!!')
         return {
          ...state
        }
       }
       break
      }
      //en principio no voy a usar el botón de volcar, lo meto para que salga aleatorio en el botón de viajar
        //vuelca el wagon
      case 'tippedWagon' : {
        if(state.supplies>30 ){ 
       return { 
         ...state,
          supplies: state.supplies -(action.payload.supplies),
          distance:state.distance,
          days:state.days + action.payload.days
         }
        }
        else if (state.supplies<30){
          console.log('\nHas perdido!!')
           swal('\nHas perdido!! ')
           return { 
            ...initialWagonState,
            }
        }
        break
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
    payload:{
      supplies:30,
      distance: 10,
      days: 1
    }// 1 day per travel
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
          <div style={{textAlign:'center'}} >
            <h1 style={{padding:'10px'}}> La aventura del vagón</h1>
            <ul>
              {/*método Object.entries del state para que me devuelva los  keys y los values*/}
              {Object.entries(state).map((elemt) =><li> {elemt[0]} : {elemt[1]}</li>)}       
            </ul>
              
                 
              <button onClick={gotSupplies}>Recargar</button>
              <button onClick={tippedWagon}>Volcar vagón</button>
              <button onClick={setTravel}>Viajar</button>
          </div>
      )
  }
  const render = () =>{
    ReactDOM.render(
      <React.StrictMode>
        <Ui  state= {store.getState()}/>
        <Instructions />
      </React.StrictMode>,
        document.getElementById('root')
    )
}
//call to render() function
render()

//subscribe render() function to store

store.subscribe(render)
