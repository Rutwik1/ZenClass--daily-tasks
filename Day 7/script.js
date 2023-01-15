// Solving problems using array functions on the rest countries' data.
let countries;
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error: " + err));

function initialize(countriesData) {
  countries = countriesData;

  // using filter function to filter ASIAN COUNTRIES
  let countryAsia = countries.filter((country) => country.region == "Asia");
  console.log(countryAsia);

  // using filter function to filter Countries by POPULATION
  let populationFilter = countries.filter(
    (country) => country.population > 200000
  );
  console.log(populationFilter);

  // using forEach function to filter country details
  // uncomment the following three line to view question 3 solution.
  // let solutionThree = countries.forEach(country => console.log(`Country: ${country.name["official"]};\
  //  Capital: ${country.capital}\
  //  Flag:${country.flag}`))

  //create array of populations of all countries using forEach function
  const population = [];
  countries.forEach((country) => population.push(country.population));
  // usign reduce() function to reduce the populationArray array
  const totalPopulation = population.reduce(
    (accumulator, currentPopulation) => {
      return accumulator + currentPopulation;
    },
    0
  );
  console.log(`Total Population: ${totalPopulation}`);



}