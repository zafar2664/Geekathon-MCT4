/*fetch('https://customsearch.googleapis.com/customsearch/v1')
.then(function(res){
    res.json().then((data)=>{
        console.log(data.data);
    })
})
.catch((error)=>{
    console.log(error);
})*/


/*
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => document.getElementById("demo").innerHTML = data.bitcoin.usd)
  .catch((error)=>{
    console.log(error);
})
*/

/*async function makingapi(){
    let res = await fetch('https://customsearch.googleapis.com/customsearch/v1');
    let data = await res.json();
    console.log(data);
}
makingapi();*/

const p = document.querySelectorAll(".sidebar p");
let inputBox = document.querySelector(".search-box input")
let btn = document.querySelector("#send")
let mainContainer = document.querySelector(".main")

const url = 'https://wikipedia-api1.p.rapidapi.com/search?q=Germany&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '396b363b20mshc5cf25507a9cf54p1cc0f8jsn0a6b1de7acf4',
		'X-RapidAPI-Host': 'wikipedia-api1.p.rapidapi.com'
	}
};

async function makingapi(){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
makingapi();


