var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    Cuenta.prototype.depositar = function (monto) {
        if (monto < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00.');
        }
        else {
            this.cantidad += monto;
            console.log("Se ha depositado correctamente: $".concat(monto));
        }
    };
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5) {
            console.log('El monto a retirar debe ser mayor a $5.00.');
        }
        else if (valor > this.cantidad) {
            console.log('No hay suficiente saldo en la cuenta.');
        }
        else {
            this.cantidad -= valor;
            console.log("Ha retirado $".concat(valor, ". Saldo actual: $").concat(this.cantidad));
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, ", Tipo de Cuenta: ").concat(this.tipoCuenta, ", N\u00FAmero de Cuenta: ").concat(this.numeroCuenta));
    };
    return Cuenta;
}());
// Prueba
var cuenta = new Cuenta('Juan Pérez', 100, 'Ahorros', '123-456-789');
cuenta.mostrarDatos();
cuenta.depositar(50);
cuenta.retirar(30);
cuenta.retirar(200);
