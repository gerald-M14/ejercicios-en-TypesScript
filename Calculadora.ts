class Calculadora {
    sumar(valor1: number, valor2: number): number {
        return valor1 + valor2;
    }

    restar(valor1: number, valor2: number): number {
        return valor1 - valor2;
    }

    multiplicar(valor1: number, valor2: number): number {
        return valor1 * valor2;
    }

    dividir(valor1: number, valor2: number): number {
        if (valor2 === 0) {
            throw new Error('No se puede dividir entre cero.');
        }
        return valor1 / valor2;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(numero: number): number {
        if (numero < 0) throw new Error('El factorial no está definido para números negativos.');
        return numero === 0 ? 1 : numero * this.factorial(numero - 1);
    }
}

// Prueba
const calculadora = new Calculadora();
console.log('Suma:', calculadora.sumar(5, 3));
console.log('Resta:', calculadora.restar(10, 6));
console.log('Multiplicación:', calculadora.multiplicar(7, 8));
console.log('División:', calculadora.dividir(20, 4));
console.log('Potencia:', calculadora.potencia(2, 3));
console.log('Factorial:', calculadora.factorial(5));
