const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getCountriesManager = async (req, res) => {
    const { id } = req.params;
    const { name } = req.query;
  
    try {
      if (id) {
        const country = await Country.findByPk(id, {
          include: Activity,
        });
        if (country) {
          return res.status(200).json(country);
        } else {
          return res.status(404).json({ message: "Country not found" });
        }
      }
  
      let dataBaseCountries;
      if (!name) {
        dataBaseCountries = await Country.findAll(
          {
          include: Activity,
          }
        );
      } else {
        dataBaseCountries = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
        });
      }
      return res.status(200).json(dataBaseCountries);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getCountriesManager;





/*
const getCountries = async (req, res) => {
    try {
        const countries = await Country.findByPk(id, {
            include:Activity,
        })
        if(countries) {
            return res.status(200).json(countries)};
        

    } catch (error) {
        return res.status(500).json({message: "Country not found"})
    }
};

const getCountryById = async (req, res) => {
    try {
        const { idPais } = req.params;
        const country = await Country.findOne({ 
            where: { 
                id: idPais 
            },
            include: Activity // obtengo las actividades relacionadas a ese id
             
         }); 
        if(!country) throw new Error("Country not found")
        
        return res.status(200).json( country ) // devuelvo el pais con su actividad
    } catch (error) {
        console.error('Failed to obtain country details', error);
        return res.status(500).send({ error: error.message})
    }
};


const getCountryByName = async(req, res) => {
    try {
        const { name } = req.query

        const country = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `${name}%`
//se utiliza para buscar registros en una columna que comiencen con 
// un valor específico ( name  en este caso), sin importar las mayúsculas o minúsculas.
                }
            }
        })
        if(country.length === 0) return res.status(404).json({ message: 'Not found' });
        return res.status(200).json(country)
    } catch (error) {
        
        return res.status(500).send({message: "Error while looking for Country"})
    }
}


module.exports = {
    getCountries,
    getCountryById,
    getCountryByName,
}

*/