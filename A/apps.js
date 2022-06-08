// Crea un array con 5 estudiantes y luego mostrarlos en el documento html
let alumnos= ["Ricardo Fort", "Juana Viale", "Mirtha Legrand", "Mauro Lombardo", "Emilia Mernes"]

document.write(alumnos)

//Acceder al array y mostrar en la consola el estudiante que está en el último lugar
console.log(alumnos [4])

let mirtha= alumnos.slice("Mirtha Legrand")

//Se sumo un nuevo integrante al grupo llamado Alberto, debes añadirlo a la lista y mostrarlo mediante un alert
let sacar= alumnos.push("Alberto")
alert(alumnos)

// El preceptor se confundió de un nombre por lo que debes cambiarle el nombre al tercer estudiante

alumnos[2]="Antonio"
document.write(alumnos)

//Ahora, escribe el método que te permita quitar el último ingresante
let agregar= alumnos.pop("Alberto")

// Vuelvelo a poner pero al inicio de la lista
let principio= alumnos.unshift("Alberto")

//Finalmente se cambia de sección por lo que se lo debe quitar del inicio de la lista
let sacraprincipio= alumnos.shift("Alberto")

//Crea un nuevo array llamado ingresantes2023 que contenga 3 nombres nuevos. Une el primer array con el segundo, en uno nuevo llamado nuevoAño. Recurriendo a .concat()
let ingresantes2023= ["Felipe Fort", "Lizy Tagliani", "Justin Bieber"]
nuevoaño=alumnos.concat(ingresantes2023)
console.log(nuevoaño)

//Ordena a través de un método, alfabéticamente el array nuevoAño
nuevoaño.sort();
console.log(nuevoaño)

//Crear una lista de artículos para el supermercado de 5 ítems.

let lista= ["harina", "aceite", "sal", "azucar", "yerba"]

//prompt pedir al usuario que ingrese un artículo para agregar a la lista.
let nuevo = prompt("ingrese nuevo articulo").toLowerCase();


//Si el artículo ya está en la lista (método array.includes()) avisarle al usuario que el artículo ya está
if (lista.includes(nuevo)){
    document.write("ya esta en la lista")
} else {  // Si no agregar el artículo a la lista y mostrarle al usuario la lista de todo lo que tiene que comprar.
    lista[5]=nuevo;
    document.write("Tenes que comprar"+ lista)
}
