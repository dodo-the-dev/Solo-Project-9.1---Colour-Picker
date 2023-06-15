const colourArray = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]
const colourSection = document.getElementById("colour-section")
// const seedColour = 
// const colourScheme = 
let seedValue = ""
let schemeValue = ""


for (let colour of colourArray){
  colourSection.innerHTML += `
    <div class="returned-colour" id="${colour}">
    <footer>${colour}</footer>
    </div>
    
  `
  document.getElementById(colour).style.backgroundColor = colour
}

function getSeedColour(seedValue){
  seedValue =  document.getElementById("seed-colour").value
  return seedValue
}

function getColourScheme(schemeValue){
  schemeValue = document.getElementById("colour-scheme").value
  return schemeValue
}

  // seedValue = seedColour.addEventListener("input", ()=>  {return seedColour.value})


  // schemeValue = colourScheme.addEventListener("input", () => {return colourScheme.value})

  console.log(seedValue)