class Main {
    
    constructor(){
        this.user = {
            nombre: ''
        }

        this.tarea = ""
        this.aTareas = []
        this.vista = {
            inNombre: document.querySelector('#nombre'),
            inTarea: document.querySelector('#tarea'),
            btnRegistrar: document.querySelector('#btnRegistrar'),
            btnAdd: document.querySelector('#btnAdd'),
            resultado: document.querySelector('#resultado'),
            tareas: document.querySelector('#tareas')
        }

        this.vista.btnRegistrar.addEventListener('click',
            this.btnRegistrar.bind(this), false)

        this.vista.btnAdd.addEventListener('click',
            this.btnAdd.bind(this), false)
    }
    
    btnRegistrar(){
        this.user.nombre = this.vista.inNombre.value
        console.log(this.user.nombre)
        this.vista.resultado.innerHTML = `<p>Hola ${this.user.nombre}</p>`
        this.vista.resultado.classList.add("rojo")
    }

    btnAdd(){
        let lista
        this.tarea = this.vista.inTarea.value
        this.aTareas.push(this.tarea)
        
        lista = "<ul>"
        this.aTareas.forEach(element => {
            lista += `<li>${element}</li>`
        });
        lista += "</ul>"

        this.vista.tareas.innerHTML = lista
    }
    
}

(function() { 
    document.addEventListener("DOMContentLoaded", 
        () => new Main(), false)
}) ()  