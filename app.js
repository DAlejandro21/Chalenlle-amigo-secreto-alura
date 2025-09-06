// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres
let amigos = [];
//Obtiene el elemento de la lista
let lista = document.getElementById("listaAmigos");

//Funcion para capturar el valor del campo de entrada 'Añadir'
function agregarAmigo(){
    let nombre =  document.getElementById("amigo").value;

    //Arroja mensaje de aleta si el campo esta vacio
    if(nombre == ''){
        alert('Por favor, ingrese un nombre válido');
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
    //Obtiene el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    //Vacia la lista <ul>
    lista.innerHTML = ''
    //Recorre el array amigos y agrega nuevo elemento a la lista
    for(let Indice = 0 ; Indice < amigos.length ; Indice++){
        lista.innerHTML += `<li>${amigos[Indice]}</li>`;
    }
}

//Funcion para sortear amigo secreto
function sortearAmigo(){
    //Verifica que en la lista se encuentren valores para sortear
    if(amigos.length === 0){
        alert('Agrega al menos 2 amigos antes de sortear');
        return;
    }
    
    //Elige un nombre aleatorio de acuerdo a la posision del incide en el array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoAleatorio = amigos[indiceAleatorio];
    console.log(amigoAleatorio);
    //Arroja mensaje indicando el nombre sorteado
    let nombreSorteado = document.getElementById("resultado");
    nombreSorteado.innerHTML = `El amigo secreto sorteado es: ${amigoAleatorio}`
    //Limpia la lista para que solo se vea el nombre sorteado
    document.getElementById("listaAmigos").innerHTML = ''
    
}
