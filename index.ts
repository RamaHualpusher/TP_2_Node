import express, { Application, Request, Response } from 'express';
import mysql from 'mysql';
import axios from 'axios';
import { Pais } from './domain/Pais';

const app: Application = express();
const PORT = 3000;

app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysql',
    database: 'tp_2_node'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database!');
});

async function getCountryData(): Promise<void> {
    const baseUrl = 'https://restcountries.com/v2/callingcode/';
    let paises: Pais[] = [];

    for (let i = 1; i <= 300; i++) {
        try {
            const response = await axios.get(`${baseUrl}${i}`);
            const data = response.data;

            if (Array.isArray(data) && data.length > 0) {
                for (let j = 0; j < data.length; j++) {
                    const countryData = data[j];
                    const pais = new Pais();
                    pais.codigoPais = countryData.alpha3Code || "---";
                    pais.nombrePais = countryData.name || "unknown";
                    pais.capitalPais = countryData.capital || "unknown";
                    pais.region = countryData.region || "unknown";
                    pais.poblacion = countryData.population ? parseInt(countryData.population) : 0;
                    pais.latitud = countryData.latlng[0] || 0;
                    pais.longitud = countryData.latlng[1] || 0;

                    paises.push(pais);
                }
            }else{
                continue;
            }
        } catch (error) {
            continue;
        }
    }

    console.log(`Total de paises: ${paises.length}`);
    paises.forEach(p => {
        insertPais(p);
    });
    connection.end();
}

async function insertPais(pais: Pais): Promise<void> {
    const query = `INSERT INTO pais (codigo_pais, nombre_pais, capital_pais, region, poblacion, latitud, longitud)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [pais.codigoPais, pais.nombrePais, pais.capitalPais, pais.region, pais.poblacion, pais.latitud, pais.longitud];
    connection.query(query, values, function (err, results, fields) {
        if (err) {
            console.error('Error inserting pais:' + pais +" - ", err);
            return;
        }
        console.log(`Pais ${pais.nombrePais} inserted successfully!`);
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

getCountryData();