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
    actualizarAmigos();
}

//Funcion para vaciar la cada una vez se elija 'anadir'
function limpiarCaja(){
    document.querySelector('#amigo').value="";
}

function actualizarAmigos(){
    //Obtiene el lemento de la lista
    let lista = document.getElementById("listaAmigos");
    //Vacia la lista <ul>
    lista.innerHTML = ''
    //Recorre el array amigos y agrega nuevo elemento a la lista
    for(let posisionIndice = 0 ; posisionIndice < amigos.length ; posisionIndice++){
        lista.innerHTML += `<li>${amigos[posisionIndice]}</li>`;
    }
}



