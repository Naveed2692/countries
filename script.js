var searchBtn= document.getElementById('search-btn');
var countryInp = document.getElementById('country-inp');
var result = document.getElementById('result');
searchBtn.addEventListener("click",()=>{
var countryName= countryInp.value;
var finalURL= `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
console.log(finalURL)
fetch(finalURL).then((response)=>response.json())
.then((data)=>{
    console.log(data[0]);
    console.log(data[0].capital[0]);
    console.log(data[0].flags.svg);
    console.log(data[0].name.common);
    console.log(data[0].continents[0]);
    console.log(Object.keys(data[0].currencies)[0]);
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    console.log(Object.values(data[0].languages).toString().split(",").join(", ")
);
result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
<h3 class="text">${data[0].name.common}</h3>

<h5>Continent:<span class="font">${data[0].continents[0]}</span></h5>
<h5>Capital:<span class="font">${data[0].capital[0]}</span></h5>
<h5>Currency:<span class="font">${data[0].currencies[Object.keys(data[0].currencies)].name} , ${Object.keys(data[0].currencies)[0]}</span></h5>
<h5>Languages:<span class="font">${Object.values(data[0].languages).toString().split(",").join(", ")}</span></h5>


`;
    
   
   
});

});