const axios = require('axios');
const config = require('../config');
const logger = require('../loaders/logger');

class CityRepository {
    
    constructor(){
        this.limite = 1;
        this.language = 'es';
        this.pathBase = config.mapbox.pathBase ;
        this.apiKey = config.mapbox.apikey; 
    }

    async findCities(city) {
    
        throw new Error('Error de prueba');
        try{
            const instance = axios.create({
                baseURL: `${this.pathBase}${city}.json`,
                params: {
                    'access_token': this.apiKey,
                    'limite': this.limite,
                    'language': this.language
        
            },
            })
        const response = await instance.get();
  
        return response.data;
    
    }catch (err){
            throw err;
        }
        
            
    }
}

module.exports = CityRepository;