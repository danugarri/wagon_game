  //Randomly calculate id the wagon tipped
  const randomNum = Math.floor(Math.random()*4)//get a random number between 0 and 4
  if(randomNum===2){
     alert('has volcado, pierdes 30 unidades de suministro')
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