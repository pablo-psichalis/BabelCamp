const user = {
    nombre : "Pepe",
    apellido : "Perez",
    edad : 23
}

user.genero = "H"

const mostrarA1 = pData1 => {
    pData1.genero = "H"
    console.log(pData1)
}

mostrarA1(Object.assign({}, user))
console.log(user)

JSON.stringify(objeto)  // devuelve string tipo JSON
JSON.parse(string_tipo_JSON)
