/*Crear un programa en Javascript que realice lo siguiente:
3
0, 1, 1.
10
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes combinaciones para asegurarte que funcione correctamente
*/

function number() {
    let num;
    while (true) {
        const numDado = prompt("escribe un número");
        num = parseInt(numDado, 10);

        if (!isNaN(num) && num >= 0) {
            break;
        } else {
            alert("entrada incorrecta, por favor escribe un número");
        }
    }
    return num;
}

function Fibonacci(cantidad) {
    const fibonacci = [0, 1];
    for (let i = 2; i < cantidad; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

function main() {
    const cantidad = number();
    const serieF = Fibonacci(cantidad);

    console.log(`la serie de Fibonacci (con ${cantidad} números):`, serieF);

    // dom
    const resultadoDiv = document.createElement("div");
    resultadoDiv.textContent = `la serie de Fibonacci (con ${cantidad} números): ${serieF.join(", ")}`;
    document.body.appendChild(resultadoDiv);
}

main();