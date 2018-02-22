function main(mostrar) {
    const user = {
        nombre : "Pepe",
        apellido : "Perez",
        edad : 23
    }
    mostrar(`
        El usuario es
        ${user.nombre} ${user.apellido}`) 
    // template literal
}

function enMayusculas(pDato = "No se tu nombre") {
    console.log(pDato.toUpperCase())
}

function enMinusculas(pDato = "No se tu nombre") {
    console.log(pDato.toLowerCase())
}

main ( pDato => console.log(pDato.toLowerCase()) )