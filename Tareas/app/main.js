class Main {
    
    constructor(){
        this.user = {
            nombre: localStorage.getItem('nombre')
        }

        this.tarea = ""
        
        // Si se consigue el item tareas del localStorage,
        // el array será el item tareas
        // en caso contrario, será definido como un array vacío
        // Esto es necesario para especificar que aTareas es un array
        // y que no de problemas más tarde
        this.aTareas = 
            JSON.parse(localStorage.getItem("tareas"))? 
                JSON.parse(localStorage.getItem("tareas"))
                 : []

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
        localStorage.setItem("nombre", this.user.nombre)
        this._mostrarNombre()
    }

    _mostrarNombre(){
        if(this.user.nombre){
            console.log(this.user.nombre)
            this.vista.resultado.innerHTML = `<p>Hola ${this.user.nombre}</p>`
            this.vista.resultado.classList.add("rojo")
        }
    }

    btnAdd(){
        this.tarea = this.vista.inTarea.value
        this.aTareas.push(this.tarea)

        localStorage.setItem("tareas", JSON.stringify(this.aTareas))
        this._mostrarTareas()
    }

    _mostrarTareas() {
        let lista
        if(this.aTareas.length){
            lista = "<ul>"
            this.aTareas.forEach(element => {
                lista += `<li>${element}</li>`
            });
            lista += "</ul>"

            this.vista.tareas.innerHTML = lista
        }
    }
    
}

(function() { 
    document.addEventListener("DOMContentLoaded", 
        () => new Main(), false)
}) ()  