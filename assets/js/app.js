
let estudiante = {
    nombre: "",
    carrera: "",
    html: [],
    css: [],
    js: [],
    
}

let ramos = ["html","css","js"];
let cantNotas = 3;

const preguntarEstudiante = () => {
    
    estudiante.nombre = prompt("Ingresa tu nombre");
    estudiante.carrera = prompt("Ingresa tu Carrera");
    ramos.forEach(ramo => {
        for (let i = 0; i < cantNotas; i++) {
            
            estudiante[ramo][i] = parseFloat(prompt(`Ingrese nota ${i+1} (${ramo.toUpperCase()})`));     
            console.log(`ramo: ${ramo} nota: (${i+1}) ${estudiante[ramo][i]}`);
        }
    });
    return estudiante
}

const calcularPromedio = (ramo) =>{
    console.log(ramo);
    return estudiante[ramo].reduce((accum, nota) => accum + nota, 0) / estudiante[ramo].length;
}

const mostrarNotas = () =>{
    let nombre = document.querySelector("#nombre");
    nombre.innerText = estudiante.nombre;

    let carrera = document.querySelector("#carrera");
    carrera.innerText = estudiante.carrera;

    let html = document.querySelector("#html").querySelectorAll("td");
    let css = document.querySelector("#css").querySelectorAll("td");
    let js = document.querySelector("#js").querySelectorAll("td");

    for (let i = 0; i < cantNotas; i++) {
            
        html[i].innerText = estudiante['html'][i];
        css[i].innerText = estudiante['css'][i];
        js[i].innerText = estudiante['js'][i];

        html[cantNotas].innerText = calcularPromedio('html');
        css[cantNotas].innerText = calcularPromedio('css');
        js[cantNotas].innerText = calcularPromedio('js');
    }
}

estudiante = preguntarEstudiante();
mostrarNotas();

