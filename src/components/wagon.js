//IMPORT LIBRARIES
import React from 'react'
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

// create store for redux to manage the app state 
const store = createStore(reducer)

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
       else if(state.supplies<20||state.supplies -(action.payload *20) < 20 ){
         console.log('\nyou do not have enough supplies to travel for: '+action.payload+' more day/s, you need at least 20 supllies to travel per day')
          return {
          ...state
        }
       }
      }
      case 'tippedWagon' : {
        //vuelca el wagon
       return{ 
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
    payload:3//asumimos que va a viajar 3 días
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

  const render = () =>{
      ReactDOM.render(
          <Ui  state= {store.getState()}/>,
          document.getElementById('root')
      )
  }
  //call to render() function
  render()
//function component
  const Ui = (props) =>{
      const state= props.state

      //function listeners

      const gotSupplies = () =>{
          store.dispatch(actionGather())
      }

      const tippedWagon = ()=>{
        store.dispatch(actionTravel()) 
      }

      const setTravel = ()=>{
        store.dispatch(actionTipped()) 
      }

      return (
          <div>
              <ul>
                  <li>{object.keys(initialWagonState)}</li>
              </ul>
          </div>
      )
  }

