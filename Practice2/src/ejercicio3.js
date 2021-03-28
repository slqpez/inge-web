const input = document.querySelector("#input-ej3");

input.addEventListener("change", showResult);


function showResult(){
  const result = document.querySelector("#result-list")
  const list = getNoUniques()
  result.innerHTML = `[${list.toString()}]`
  console.log()
}

function getNoUniques() {
  const newInput = input.value.split(" ");
  const listNumbers = newInput.map((value) => {
    return parseInt(value);
  });

  let noUniques =[]
    for(let i=0; i< listNumbers.length; i++){
    for(let j=0; j< listNumbers.length; j++){
      if(listNumbers[i]=== listNumbers[j] && i!== j){
          noUniques.push(listNumbers[i])
      }
    }
  }  
  return noUniques
}
