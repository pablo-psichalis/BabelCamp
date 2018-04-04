let aDatos = new Array(12, 34, 56, 21)
let aNombres = ["Borja", "Felipe", "Iñigo"]

console.log(aDatos)
console.log(aNombres)

console.log(typeof aDatos)
console.log(typeof aNombres)

console.log(aDatos.length)
console.log(aNombres.length)

aDatos.push(65)
console.log(aDatos)

let suma = 0
for (let i = 0; i < aDatos.length; i++){
    suma += aDatos[i]
}
console.log(suma)

// Funciones declarativas
suma = 0
aDatos = aDatos.map(item => item = ++item )
aDatos = aDatos.filter(item => item > 21)
aDatos.forEach( item => suma += item )
console.log(suma)