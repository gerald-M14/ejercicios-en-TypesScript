class Cuenta {
    constructor(
        private nombre: string,
        private cantidad: number,
        private tipoCuenta: string,
        private numeroCuenta: string
    ) {}

    depositar(monto: number): void {
        if (monto < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00.');
        } else {
            this.cantidad += monto;
            console.log(`Se ha depositado correctamente: $${monto}`);
        }
    }

    retirar(valor: number): void {
        if (valor < 5) {
            console.log('El monto a retirar debe ser mayor a $5.00.');
        } else if (valor > this.cantidad) {
            console.log('No hay suficiente saldo en la cuenta.');
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado $${valor}. Saldo actual: $${this.cantidad}`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`);
    }
}

// Prueba
const cuenta = new Cuenta('Geraldhy Messu', 500, 'Ahorro', '123-456-789-2453');
cuenta.mostrarDatos();
cuenta.depositar(50);
cuenta.retirar(30);
cuenta.retirar(200);
