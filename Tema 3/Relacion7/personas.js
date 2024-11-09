const persona = {
    nombre: "Juan",
    edad: 23,
    isOlder: function () {
        return this.edad > 18;
    },
    constructor: function (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const arrPersonas = [
    {
        nombre: "Juan",
        edad: 23
    },
    {
        nombre: "Pepe",
        edad: 33
    },
    {
        nombre: "Maria",
        edad: 30
    }
]

function edadPromedio (arrPersonas) {
    let result = 0;
    arrPersonas.forEach(persona => {
        result += persona.edad;
    });
    return result/arrPersonas.length;
}