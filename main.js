var array_memoria = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var valor_memoria = [];
var memoria_carta_ids = [];
var carta_volteada = 0;
Array.prototype.memoria_carta_embarajar = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function nuevaTabla(){
	carta_volteada = 0;
	var output = '';
    array_memoria.memoria_carta_embarajar();
	for(var i = 0; i < array_memoria.length; i++){
		output += '<div id="carta_'+i+'" onclick="voltearCartaMemoria(this,\''+array_memoria[i]+'\')"></div>';
	}
	document.getElementById('tabla_juego').innerHTML = output;
}
function voltearCartaMemoria(carta,val){
	if(carta.innerHTML == "" && valor_memoria.length < 2){
		carta.style.background = '#FFF';
		carta.innerHTML = val;
		if(valor_memoria.length == 0){
			valor_memoria.push(val);
			memoria_carta_ids.push(carta.id);
		} else if(valor_memoria.length == 1){
			valor_memoria.push(val);
			memoria_carta_ids.push(carta.id);
			if(valor_memoria[0] == valor_memoria[1]){
				carta_volteada += 2;
				// Despejando los dos arrays
				valor_memoria = [];
            	memoria_carta_ids = [];
				// Compruebe si el tablero completo está despejado
				if(carta_volteada == array_memoria.length){
					swal({
						  title: "Lo lograste!",
						  text: "Hiciste un buen trabajo!",
						  imageUrl: "img/gif.webp"
						});
					document.getElementById('tabla_juego').innerHTML = "";
					nuevaTabla();
				}
			} else {
				function voltearAtras(){
				    // las dos cartas se van a voltear
				    var carta_1 = document.getElementById(memoria_carta_ids[0]);
				    var carta_2 = document.getElementById(memoria_carta_ids[1]);
				    carta_1.style.background = 'url(img/logo.png.png) no-repeat';
            	    carta_1.innerHTML = "";
				    carta_2.style.background = 'url(img/logo.png.png) no-repeat';
            	    carta_2.innerHTML = "";
				    // Despejando los dos arrays
				    valor_memoria = [];
            	    memoria_carta_ids = [];
				}
				setTimeout(voltearAtras, 750);
			}
		}
	}
}
nuevaTabla();