var sacha = {
    nombre: 'Sacha',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    edad: 27
}

function imprimirNombreYEdad({nombre, edad}) {
    console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años")
}

imprimirNombreYEdad(sacha)
imprimirNombreYEdad(dario)


