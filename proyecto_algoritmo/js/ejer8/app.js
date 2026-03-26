//Un catálogo de cursos necesita un sistema flexible de búsqueda que permita filtrar según diferentes criterios definidos por un callback (categoría, duración o coincidencia en el nombre).

//Se crea el arreglo de los cursos teniendo en cuenta el nombre, categoria y duracion de cada curso
let cursos = [
    { nombre: "JavaScript Básico", categoria: "programacion", duracion: 20 },
    { nombre: "HTML y CSS", categoria: "diseño", duracion: 16 },
    { nombre: "Python Avanzado", categoria: "programacion", duracion: 40 },
    { nombre: "UX Design", categoria: "diseño", duracion: 28 }
];

//Se crea la función  filtrar cursos donde se recorren y se lleva a cabo el callback en cada uno
function filtrarCursos(catalogo, callback) {
    let resultado = [];

    for (let i = 0; i < catalogo.length; i++) {
        if (callback(catalogo[i])) {
            resultado.push(catalogo[i]);
        }
    }

    return resultado;
}

//Se filtra por categoria
let porCategoria = filtrarCursos(cursos, function(curso) {
    return curso.categoria === "programacion";
});

// console.log(porCategoria);


//Se filtra por duracion
// let porDuracion = filtrarCursos(cursos, function(curso) {
//     return curso.duracion > 20;
// });

// console.log(porDuracion);


//Se filtra por nombre
// let porNombre = filtrarCursos(cursos, function(curso) {
//     return curso.nombre.toLowerCase().includes("python");
// });

// console.log(porNombre);