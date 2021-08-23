//IMPORT LIBRARIES
import React from 'react'
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import { Instructions} from './components/Instructions/Instructions';
import '../src/components/wagon/wagon.scss'

//import all the logic from 
import {reducer,actionGather,actionReset,actionTravel} from '../src/components/logic/logic'

//import { GameOver } from './components/GameOver/GameOver';



  
  // create store for redux to manage the app state 
const store = createStore(reducer)

  
  
  
  /////////////////////////////////////////////////////////////////////////
  //implementing UI

  //REACT CODE

//RENDER function to display component
const render = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <Ui  state= {store.getState()}/>
      <Instructions />
    </React.StrictMode>,
      document.getElementById('root')
  )
}
  
//function component
  const Ui = (props) =>{
      const state= props.state

      //function listeners

      const gotSupplies = () =>{
          store.dispatch(actionGather)
      }
/*
Finally i am not going to show thw tipped( volcar) button
      const tippedWagon = ()=>{
        store.dispatch(actionTipped) 
      }
*/
      const setTravel = ()=>{
        store.dispatch(actionTravel) 
      }

      // event handler function to reset
      const reset = () =>{
       store.dispatch(actionReset)
      }


      return (
          <div style={{textAlign:'center'}} >
            <h1 style={{padding:'10px'}}> La aventura del vagón</h1>
            <ul>
              {/*método Object.entries del state para que me devuelva los  keys y los values*/}
              {Object.entries(state).map((elemt) =><li> {elemt[0]} : {elemt[1]}</li>)}       
            </ul>
              
                 
              <button onClick={gotSupplies}>Repostar</button>
              {/*<button onClick={tippedWagon}>Volcar vagón</button>*/}
              <button onClick={setTravel}>Viajar</button>
              <button onClick={reset}>Reiniciar</button>
              
          </div>
      )
  }

  
  
//call to render() function
render()

//subscribe render() function to store

store.subscribe(render)
