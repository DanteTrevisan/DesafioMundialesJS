debugger;
let usuario;
let numero2;
let numero1 = prompt("Ingrese el primer numero");
if (numero1 != "F" && numero1 != "f") {
    usuario = prompt("Ingrese que operacion matematica desea realizar con los simbolos de +, -, *, /, ^(potencia), %(modulo o resto). Para salir ingrese 'f' o 'F' (sin comillas)");
    if (usuario !== "F" && usuario != "f") {
        numero2 = prompt("Ingrese el segundo numero");
        if (numero2 == "F" || numero2 == "f") {
            alert("Saliendo")
        }
    }
    else {
        alert("Saliendo")
    }
} else {
    alert("Saliendo")
}
while (usuario != "F" && usuario != "f" && numero1 != "f" && numero2 != "f" && numero1 != "F" && numero2 != "F" && usuario == "/") {
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
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

    numero1 = prompt("Ingrese el primer numero");
    if (numero1 !== "F" && numero1 !== "f") {
        usuario = prompt("Ingrese que operacion matematica desea realizar con los simbolos de +, -, *, /, ^(potencia), %(modulo o resto). Para salir ingrese 'f' o 'F' (sin comillas)");
        if (usuario != "F" && usuario != "f") {
            numero2 = prompt("Ingrese el segundo numero");
            if (numero2 === "F" || numero2 === "f") {
                alert("Saliendo")
            }
        }
        else {
            alert("Saliendo")
        }
    } else {
        alert("Saliendo")
    }

}

