const {
    eligeme,
    eligeme2,
    eligeme3,
    uno,
    dos,
    tres,
    cuatro,
    cinco,
    nombre,
    edad,
    sexo,
    yo
} = require("../Ejercicios/ejercicios.js")


it("Si queremos declarar una variable que no se pueda reasignar ¿Qué variable elegirías?", () => {
    expect(eligeme).toBe(2)
})
it("Si queremos declarar una variable que se pueda reescribir ¿Qué variable elegirías?", () => {
    expect(eligeme2).toBe(3)
})
it("Si queremos declarar una variable que se pueda reasignar pero no reescribir ¿Qué variable elegirías?", () => {
    expect(eligeme3).toBe(1)
})
it("Crea tres variables 1 que se llame 'nombre' y su valor sea 'Evelyn'", () => {
    expect(nombre).toBe("Evelyn")
})
it("Crea tres variables 1 que se llame 'edad' y su valor sea '21'", () => {
    expect(edad).toBe(21)
})
it("Crea tres variables 1 que se llame 'sexo' y su valor sea 'true'", () => {
    expect(sexo).toBe(true)
})
it("Variable 'string'", () => {
    expect(typeof uno).toBe("string")
})
it("Variable 'booleano'", () => {
    expect(typeof dos).toBe("boolean")
})
it("Variable 'number'", () => {
    expect(typeof tres).toBe("number")
})
it("Variable 'array'", () => {
    expect(Array.isArray(cuatro)).toBe(true)
})
it("Variable 'object'", () => {
    expect(typeof cinco).toBe("object")
})
it("Que variable es la que sale del scope del 'if'", () => {
    expect(yo).toBe(2)
})