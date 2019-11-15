// Requires
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

const direccion = encodeURI(argv.direccion);


const getInfo = async(direccion) => {

    let location = await lugar.getLugarLatLong(direccion);
    let temp = await clima.getClima(location.lat, location.lng);

    return {
        location,
        temp
    }
}

getInfo(direccion).
then(resp => {
    console.log(`El clima de ${argv.direccion} es de ${resp.temp.temp}° grados.`);
}).catch(err => {
    console.log(`No se pudo determinar el clima de ${argv.direccion}.`);
    console.log(err);
});