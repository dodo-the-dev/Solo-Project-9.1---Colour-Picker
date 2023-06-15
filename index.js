const colourArray = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]
const colourSection = document.getElementById("colour-section")
const fetchColourScheme = document.getElementById("fetch-colour-scheme")
let seedValue = ""
let schemeValue = ""




function getSeedColour(){
  return document.getElementById("seed-colour").value.slice(1)
}


function getColourScheme(){
  return document.getElementById("colour-scheme").value  
}

fetchColourScheme.addEventListener("click", function(){
  seedValue = getSeedColour()
  schemeValue = getColourScheme()
  let url = "https://www.thecolorapi.com/scheme?hex="+seedValue+"&mode="+schemeValue
  fetch(url)
    .then(response => response.json())
    .then(data => {
      colourSection.innerHTML =""
      for (let colour of data.colors){
        colourSection.innerHTML +=`
          <div class="returned-colour" id="${colour.hex.value}">
          <footer>${colour.hex.value}</footer>
          </div>
          
        `
        document.getElementById(colour.hex.value).style.backgroundColor = colour.hex.value
      }
    })
})