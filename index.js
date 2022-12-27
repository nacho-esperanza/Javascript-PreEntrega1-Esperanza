
let nombre = prompt("Ingrese su nombre:");
alert("Hola " + nombre + " bienvenido al sistema de notas de la escuela Esperanza!");

function calcularPromedioCurso(){

    nota = Number(
        prompt("Ingrese la nota del alumno " + cantalumnos + ". Para dejar de ingresar notas escriba 0.")
    );

    while (nota > 0) {
        notaalumnos = notaalumnos + nota;
        contador++
        cantalumnos++;
        nota = Number(
            prompt("Ingrese la nota del alumno " + cantalumnos + ". Para dejar de ingresar notas escriba 0.")
        );
    }

    if(nota = 0){
        alert("Su curso no tiene alumnos!");
    }


    promedio = notaalumnos / contador;
    alert( nombre + " la nota promedio de sus alumnos es " + promedio);
    
}