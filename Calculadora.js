var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (valor1, valor2) {
        return valor1 + valor2;
    };
    Calculadora.prototype.restar = function (valor1, valor2) {
        return valor1 - valor2;
    };
    Calculadora.prototype.multiplicar = function (valor1, valor2) {
        return valor1 * valor2;
    };
    Calculadora.prototype.dividir = function (valor1, valor2) {
        if (valor2 === 0) {
            throw new Error('No se puede dividir entre cero.');
        }
        return valor1 / valor2;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (numero) {
        if (numero < 0)
            throw new Error('El factorial no está definido para números negativos.');
        return numero === 0 ? 1 : numero * this.factorial(numero - 1);
    };
    return Calculadora;
}());
// Prueba
var calculadora = new Calculadora();
console.log('Suma:', calculadora.sumar(5, 3));
console.log('Resta:', calculadora.restar(10, 6));
console.log('Multiplicación:', calculadora.multiplicar(7, 8));
console.log('División:', calculadora.dividir(20, 4));
console.log('Potencia:', calculadora.potencia(2, 3));
console.log('Factorial:', calculadora.factorial(5));
