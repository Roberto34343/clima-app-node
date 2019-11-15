const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=130b9cd2c60cc54fe600ce34ae68a327&units=metric`);

    if (resp.data.cod != 200)
        throw new Error(`No hay resultados para las cordenadas lat=${lat} y lon=${lon}.`)

    const temp = resp.data.main.temp;

    return {
        temp
    }

}

module.exports = {
    getClima
}