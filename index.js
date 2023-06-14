const colourArray = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]
const colourSection = document.getElementById("colour-section")



for (let colour of colourArray){
  colourSection.innerHTML += `
    <div class="returned-colour" id="${colour}">
    <footer>${colour}</footer>
    </div>
    
  `
  document.getElementById(colour).style.backgroundColor = colour
  console.log(colour)
}
