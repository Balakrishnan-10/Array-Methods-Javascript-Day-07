var request =  new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
 //console.log(res);

// A.Get all the countries from Asia continent /region using Filter function:

var result_asia = res.filter((ele)=>ele.region === "Asia")
console.log("Question No - 1 : Get all the countries from Asia continent /region using Filter method")
var country_names = result_asia.map((ele)=>console.log("CountryName : "+ele.name.common));

// -------------------------------------------------------------------------------------------

// B.Get all the countries with a population of less than 2 lakhs using Filter function:

// var popu = res.filter((ele)=>ele.population<200000)
// console.log("Question No - 2 : Get all the countries with a population of less than 2 lakhs using Filter method ")
// var country_names = popu.map((ele)=>console.log("CountryName : "+ ele.name.common));


// -------------------------------------------------------------------------------------------

// // C.Print the following details name, capital, flag, using forEach function:

// console.log("Question No - 3 : Print the following details name, capital, flag, using forEach function");
// res.forEach((ele)=>{
// console.log("CountryName : "+ele.name.common),
// console.log("Capital : "+ele.capital),
// console.log("Flags:"+ ele.flags.svg)});

// -------------------------------------------------------------------------------------------


// // D.Print the total population of countries using reduce function:

// var total_popu = res.reduce((acc,cv)=>acc+cv.population,0)
// console.log("Question No - 4 : Print the total population of countries using reduce method:");
// console.log("Total Population ="+total_popu);

// -------------------------------------------------------------------------------------------

// // E.Print the country that uses US dollars as currency:

// var USD =res.filter((ele)=>ele.currencies && ele.currencies.USD)
// console.log(USD);
// console.log("Question No - 5 :Print the country that uses US dollars as currency :");
// USD.map((ele)=>console.log("CountryName : " + ele.name.common))

}
 

// -------------------------------------------------------------------------------------------

                  