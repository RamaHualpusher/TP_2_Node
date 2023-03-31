/*Necesito que crees una Clase Pais con los siguientes atributos para luego usar de base para crear objetos de tipo Pais desde las respuestas de una API REST
codigoPais PK numero entero
nombrePais varchar(50) not null
capitalPais varchar(50) not null
región varchar(50) not null
población entero largo not null
latitud numero decimal not null
longitud numero decimal not null
*/
export class Pais {
    codigoPais: string = "---";
    nombrePais: string = "unknown";
    capitalPais: string = "unknown";
    region: string = "unknown";
    poblacion: number = 0;
    latitud: number = 0;
    longitud: number = 0;
}


