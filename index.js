const colourArray = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]
const colourSection = document.getElementById("colour-section")
const seedColour = document.getElementById("seed-colour").value
const colourScheme = document.getElementById("colour-scheme").value
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


  // seedValue = seedColour.addEventListener("input", ()=>  {return seedColour.value})


  // schemeValue = colourScheme.addEventListener("input", () => {return colourScheme.value})

  console.log(seedColour)
  console.log(colourScheme)