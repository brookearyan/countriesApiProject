function displayCountry(countryObject){
  const name = countryObject['name']
  const capital = countryObject['capital']
  const currencyName = countryObject['currencies'][0]['name']
  const currencySymbol = countryObject['currencies'][0]['symbol']
  console.log(name, capital, currencySymbol, currencyName)
}

function findCountry() {
  event.preventDefault()
  const countryRequested = document.getElementById('country-name').value
  const URL = `https://restcountries.eu/rest/v2/name/` + countryRequested + `?fullText=true`;
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open( "GET", URL, false) // false for synchronous request
  xmlHttp.send(null)
  let data = xmlHttp.responseText
  let object = JSON.parse(data)
  displayCountry(object[0])
}

$(document).ready(function(){
  document.getElementById("updateCountry").addEventListener("click", findCountry());
})
