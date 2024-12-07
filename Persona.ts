abstract class Persona {
    constructor(
        protected nombre: string,
        protected apellido: string,
        protected direccion: string,
        protected telefono: string,
        protected edad: number
    ) {}

    esMayorDeEdad(): void {
        console.log(this.edad >= 18 ? 'Es mayor de edad.' : 'Es menor de edad.');
    }

    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number,
        sueldo: number
    ) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
        this.imprimirSueldo();
    }
}

// Prueba
const empleado = new Empleado('Ana', 'López', 'Carrasquilla, panama', '61848234', 22, 2000);
empleado.esMayorDeEdad();
empleado.mostrarDatos();
