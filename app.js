// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres
let amigos = [];

//Funcion para capturar el valor del campo de entrada 'Añadir'
function agregarAmigo(){
    let nombre =  document.getElementById("amigo").value;

    //Arrola mensaje de aleta si el campo esta vacio
    if(nombre == ''){
        alert('Por favor, inserte un nombre');
    //Agrega el valor al array 'amigo'
    }else{
        amigos.push(nombre);
        console.log(amigos);
    }
    limpiarCaja();
}

//Funcion para vaciar la cada una vez se elija 'anadir'
function limpiarCaja(){
    document.querySelector('#amigo').value="";
}

agregarAmigo();

