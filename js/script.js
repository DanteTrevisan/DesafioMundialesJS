let edad = parseInt(prompt("Ingrese su edad"));

if (edad == 84){
    alert("Vivio exactamente 21 mundiales")
}else{
    let resto = edad/4 - Math.floor(edad/4);
    if (resto <= .5){
        alert(`VIvio ${Math.floor(edad/4)} Mundiales`);
    }else{
        alert(`VIvio ${Math.ceil(edad/4)} Mundiales`);
    }
}

