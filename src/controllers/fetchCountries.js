const axios = require("axios");
const URL = "http://localhost:5000/countries";
const { Country } = require("../db");


const saveCountriesDatabase = async () => {
    try {
        let response = await fetch("http://localhost:5000/countries");
        let countries = await response.json();
        await countries.map((country) => {
          let pais = {
            id: country.cca3,
            name: country.name.common,
            image: country.flags.png,
            continents: country.continents[0],
            capital: country.capital ? country.capital[0] : "This country has no capital on DB",
            subregion: country.subregion ? country.subregion : "This country has no subregion on DB",
            area: country.area,
            population: country.population,
          };
          Country.findOrCreate({ where: pais });
        });
        console.log('Countries has been added to the Data Base')
      } catch (error) {
        console.error('Failed to fill up the Data Base', error.message);
      }
    };


module.exports ={ 
    saveCountriesDatabase,
};


/*   PROBANDO SOLUCION DB
const saveCountriesDatabase = async (req, res) => {
    try {
        const { data } = await axios(URL) //Hago peticion a la API, y le hago destructuring
        await Promise.all( //Esto se usa para esperar que se resuelvan las promesas que retorna el map
            data.map(async(country) => {
                let{cca3, name, flags, continents, capital, subregion, area, population } = country
                if(!capital) capital =["unknown"];
                await Country.create({
                    id: cca3,
                    name: name.common,
                    flagImage: flags.png,
                    continent: continents[0],
                    capital: capital[0],
                    subregion: subregion,
                    area: area,
                    population: population,
                });
            })
        );
        console.log('Countries has been added to the Data Base');
    } catch (error) {
        console.error('Failed to fill up the Data Base', error.message);
    }
};

*/