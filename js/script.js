debugger;
let usuario = prompt("Ingrese que operacion matematica desea realizar con los simbolos de +, -, *, /, ^(potencia), %(modulo o resto). Para salir ingrese 'f' o 'F' (sin comillas)");
let numero1;
let numero2;
while (usuario != "F" && usuario != "f") {
    numero1 = parseFloat(prompt("Ingrese el primer numero"));
    numero2 = parseFloat(prompt("Ingrese el segundo numero"));
    if (usuario == "+") {
        alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    } else if (usuario == "-") {
        alert(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    } else if (usuario == "*") {
        alert(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    } else if (usuario == "/") {
        if (numero2 == 0) {
            alert("Division por cero, ingrese un numero DISTINTO de cero");
            numero2 = parseFloat(prompt("Ingrese el segundo numero"));
            alert(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        }
        alert(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    } else if (usuario == "%") {
        alert(`${numero1} % ${numero2} = ${numero1 % numero2}`);
    } else if (usuario == "^") {
        alert(`${numero1} ^ ${numero2} = ${numero1 ** numero2}`);
    } else {
        alert("Operador ingresado incorrecto, ingrese +, -, *, /, ^(potencia), %(modulo o resto). Para salir ingrese 'f' o 'F' (sin comillas)")
    }

    usuario = prompt("Ingrese que operacion matematica desea realizar con los simbolos de +, -, *, /, ^(potencia), %(modulo o resto). Para salir ingrese 'f' o 'F' (sin comillas)");
       
}

alert("Saliendo");

