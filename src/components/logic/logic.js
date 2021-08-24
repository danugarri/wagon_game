import swal from 'sweetalert';


 // ** Initial State and Reducer **

//Initial State

const initialWagonState= {
    Suministros: 100,
    Distancia: 0,
    Días: 0
  }
  
 
 //Reducer
  
  export const reducer = (state = initialWagonState,action) => {
    switch(action.type) {
      case 'gather' : {
        //determina una recarga
        return  {
          ...state,
        Suministros:state.Suministros + action.payload.Suministros,
        Distancia:state.Distancia,
        Días: state.Días + action.payload.Días
        }
      }
      case 'travel' : {
        //Randomly calculate id the wagon tipped
  const randomNum = Math.floor(Math.random()*5)//get a random number between 0 and 5
  if(randomNum===2){
     swal('Has volcado!!, pierdes 30 unidades de suministro, y tardas 1 día más')
   if(state.Suministros>30 ){ 
  return { 
    ...state,
     Suministros: state.Suministros -(action.payload.Suministros),
     Distancia:state.Distancia,
     Días:state.Días + action.payload.Días
    }
   }
   else if (state.Suministros<30){
     console.log('\nHas volcado!!, pierdes 30 unidades de suministro, y tardas 1 día más\nPuffff, Esta vez no tienes suficientes suministros para continuar tu viaje\nHas perdido!!')
      swal('\nHas volcado!!, pierdes 30 unidades de suministro, y tardas 1 día más.\n\nPuffff, Esta vez no tienes suficientes suministros para continuar tu viaje\n\nHas perdido!! ')
      return { 
       ...initialWagonState,
       }
   }
}
        //determina los días que viaja
        if(state.Suministros>=20 && state.Suministros -(action.payload.Días *20) >= 0 ){ 
  // el mínmo de suministros para viajar por día es de 20
        return {
          ...state,
          Suministros:state.Suministros -(action.payload.Días *20),
          Distancia:state.Distancia +(10*action.payload.Días),
          Días:state.Días + action.payload.Días
        }
       }
       else if (state.Suministros<20||state.Suministros -(action.payload.Días *20) < 20 || (state.Suministros === 0 )){
         console.log('\nyou do not have enough supplies to travel for: '+action.payload.Días+' more day/s, you need at least 20 supllies to travel per day')
          swal('\nNo tienes suficientes suministros para viajar durante : '+action.payload.Días+'  día/s más, necesitas al menos 20 unidades de suministro, ¡¡RECARGA!!')
         return {
          ...state
        }
       }
       break
      }
      //en principio no voy a usar el botón de volcar, lo meto para que salga aleatorio en el botón de viajar
        //vuelca el wagon
        
      /*
        case 'tippedWagon' : {
        if(state.Suministros>30 ){ 
       return { 
         ...state,
          Suministros: state.Suministros -(action.payload.Suministros),
          Distancia:state.Distancia,
          Días:state.Días + action.payload.Días
         }
        }
        else if (state.Suministros<30){
          console.log('\nHas perdido!!')
           swal('\nHas perdido!! ')
           return { 
            ...initialWagonState,
            }
        }
        
        break
      }
      */
      case 'reset' : {
        return {
          ...initialWagonState
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
      Suministros:15,
      Distancia: 0,
      Días: 1
    }
  }
  const actionTravel = {
    type:'travel',
    payload:{
      Suministros:30,
      Distancia: 10,
      Días: 1// 1 day per travel
    }
    }

    const actionReset = { 
      type:'reset',
      payload:{
        Suministros:100,
        Distancia: 0,
        Días: 0
    }
  }
    
    //finally not used for the UI
    
  /*
   const actionTipped= {
    type: 'tippedWagon',
    payload: {
      Suministros:30,
      Distancia: 0,
      Días: 1
    }
  }
  */
 export {actionGather,actionReset,actionTravel}
 