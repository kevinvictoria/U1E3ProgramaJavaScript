console.log('activo');

var tex_aux = "";
var frase = [];
var array = [];
var texto = [];

document.querySelector('#boton_mostrar').addEventListener('click', traerDatos);
document.querySelector('#boton_escribir').addEventListener('click', escribirDatos);
document.querySelector('#boton_ordenar').addEventListener('click', ordenarDatos);


function traerDatos(){
   // console.log('funcion activada');
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'archivo.txt', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            tex_aux = this.responseText;
            document.querySelector('#respuesta1').innerHTML = tex_aux;
            //vaciamos frase en array
    texto = tex_aux.split(' ');
    console.log(texto)
        }
    }
    
}




function escribirDatos(){
    var valor = prompt("ingresa una frase: ");
    frase = valor.split(' ')  
}



function ordenarDatos(){
    //Metodo Ordenar 
console.log("Funciono")
for( var i=0; i<(texto.length-1); i++){
    for( var j=0; j<(texto.length-1); j++){
        if((texto[j] == frase[j])!= true){
            var temp = texto[j];
            texto[j] = texto[j+1];
            texto[j+1] = temp;
        }
    }
}
    alert(texto)
    document.querySelector('#respuesta2').innerHTML = texto

}





