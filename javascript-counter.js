const count = document.getElementById("counterh2")
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")


var counter = 0

const render = () => {
  count.innerText= counter
}

render()


 incrementBtn.onclick = function(){
  counter++
  render()
}
 decrementBtn.onclick = function(){
  counter--
  render()
}





