
var xhr = new XMLHttpRequest()
var url = "https://restcountries.com/v3.1/all";
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
 if (xhr.readyState === 4 && xhr.status === 200) {
     var data = JSON.parse(xhr.responseText);
var countriesInAsia = data.filter(country => country.region === "Asia");
var countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
    });
var totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total Population:", totalPopulation);
     var countryWithUSD = data.find(country => {
      return country.currencies && country.currencies.USD;
    });
    if (countryWithUSD) {
      console.log("Country that uses US Dollars:", countryWithUSD.name.common);
    } else {
      console.log("No country uses US Dollars as currency.");
    }
  }
};
xhr.send();
