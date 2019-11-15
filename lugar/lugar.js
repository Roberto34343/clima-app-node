const axios = require('axios');


const getLugarLatLong = async(dir) => {

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: { 'x-rapidapi-key': 'e4752a5617msh6cae2c79875df2cp1a2a50jsn564f77281bc8' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lengh === 0)
        throw new Error(`No hay resultados para ${encondeUrl}`)

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
}