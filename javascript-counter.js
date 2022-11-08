const count = document.getElementById("counterh2")
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")

//REDUX ACTIONS
const incrementAction = {
  type: "INCREMENT"
}
 const decrementAction = {
  type: "DECREMENT"
}


//REDUX REDUCERS
// const initialState = 0
const counterReducer = (state , action) => {
  if (typeof state === "undefined") {
    return 0
  }else if (action.type === "INCREMENT") {
    return state + 1
  } else if (action.type === "DECREMENT") {
    return state - 1
  }else {
    return state
  }
}


//REDUX STORE
const store = Redux.createStore(counterReducer)

//RENDER STORE FUNCTION
const render = () => {
  count.innerText = store.getState()
}

//Initial render
render()

//subscribe to store to render at lunch and when state changes
store.subscribe(render)

//DISPATCHING ACTIONS
incrementBtn.onclick = function(){
  store.dispatch(incrementAction)
 
 }
  decrementBtn.onclick = function(){
   store.dispatch(decrementAction)
 
 }
 

