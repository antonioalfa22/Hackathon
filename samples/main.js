
document.getElementById("Bombo").style.visibility = 'hidden';
document.getElementById("Caja").style.visibility = 'hidden';
document.getElementById("HitHat").style.visibility = 'hidden';
document.getElementById("Hits").style.visibility = 'hidden';
document.getElementById("Platillos").style.visibility = 'hidden';
document.getElementById("Tom").style.visibility = 'hidden';

setInterval(limpiarImagenes,800);
function limpiarImagenes() {
	document.getElementById("Bombo").style.visibility = 'hidden';
	document.getElementById("Caja").style.visibility = 'hidden';
	document.getElementById("HitHat").style.visibility = 'hidden';
	document.getElementById("Hits").style.visibility = 'hidden';
	document.getElementById("Platillos").style.visibility = 'hidden';
	document.getElementById("Tom").style.visibility = 'hidden';
}

"use strict";
class Bateria {
    constructor () {
    	this.bombo = new Audio('https://github.com/antonioalfa22/Hackathon/blob/master/sounds/bombo.wav?raw=true');
    	this.caja = new Audio('https://github.com/antonioalfa22/Hackathon/blob/master/sounds/caja.wav?raw=true');
    	this.hithat = new Audio('https://github.com/antonioalfa22/Hackathon/blob/master/sounds/hithat.wav?raw=true');
    	this.hits = new Audio('https://github.com/antonioalfa22/Hackathon/blob/master/sounds/hits.wav?raw=true');
    	this.platillo = new Audio('https://github.com/antonioalfa22/Hackathon/blob/master/sounds/platillo.wav?raw=true');
    	this.tom = new Audio('https://github.com/antonioalfa22/Hackathon/blob/master/sounds/tom.wav?raw=true');
    }
    leer(args){
        var long = args.length;
        for(var i=0; i< long; i++){
            if(args[i]){
                pintar(this.getItem(args,i));
            }
        }
    }

    tocarBombo() {
 		document.getElementById("Bombo").style.visibility = 'visible';	
 		this.bombo.currentTime=0;
 		this.bombo.play();
		}
 	tocarCaja() {
 		document.getElementById("Caja").style.visibility = 'visible';	
 		this.caja.currentTime=0;
 		this.caja.play();
 	}
 	tocarHitHat() {
 		document.getElementById("HitHat").style.visibility = 'visible';
 		this.hithat.currentTime=0;
 		this.hithat.play();
 	}
 	tocarHits() {
 		document.getElementById("Hits").style.visibility = 'visible';
 		this.hits.currentTime=0;
 		this.hits.play();
 	}
 	tocarPlatillos() {
 		document.getElementById("Platillos").style.visibility = 'visible';
 		this.platillo.currentTime=0;
 		this.platillo.play();
 	}
 	tocarTom() {
 		document.getElementById("Tom").style.visibility = 'visible';
 		this.tom.currentTime=0;
 		this.tom.play();
 	}

    getItem(pos){
        // Caja
        if(i==0){
            this.tocarCaja();
        }
        // HitHat
        else if(i==1){
            this.tocarHithat();
        }
        // Hits
        else if(i==2){
            this.tocarHits();
        }
        // Platillo
        else if(i==3){
            this.tocarPlatillos();
        }
        // Tom
        else if(i==4){
            this.tocarTom();
        }
        // Bombo
        else if(i==5){
            this.tocarBombo();
        }
    }
}
var bateria = new Bateria();
document.getElementById("Titulo").value = msg.payload;
