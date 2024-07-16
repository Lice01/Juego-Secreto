let numerosecreto=0;
let intentos = 0; 
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTM = document.querySelector (elemento);
    elementoHTM.innerHTML= texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    
   
    if (numeroDeUsuario===numerosecreto){
        asignarTextoElemento ('p', `acertate el número en ${intentos} veces ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El usuario no acerto
        if (numeroDeUsuario> numerosecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        }else {
            asignarTextoElemento ('p', 'el número secreto es mayor')
        }
        intentos++; 
        limpiarCaja();
        
        if (intentos > 3 ){
            asignarTextoElemento ('p','ya acabaste con tu numero de intentos');
            reiniciarJuego();

           
        }
    }

    return ;
}
function limpiarCaja () {
   let valorCaja = document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', ' Ya se sortearon todos los números posibles');

    }else {
        // si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); 
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales (){
    asignarTextoElemento('h1' , 'Juego el número secreto!');
    asignarTextoElemento ('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numerosecreto = generarNumeroSecreto ();
    intentos = 1;
}
function reiniciarJuego () {
    //Limpiar la caja, 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    condicionesIniciales();
    // generar el numero aleatorio 
    // iniciarlizar el numero de intentos 
     //desahabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute ('disabled', 'true');

}
condicionesIniciales();