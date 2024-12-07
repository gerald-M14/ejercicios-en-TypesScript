class CabeceraPagina {
    constructor(
        private titulo: string,
        private color: string,
        private fuente: string
    ) {}

    obtenerPropiedades(): string {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }

    establecerPosicion(posicion: string): string {
        return `El título aparecerá alineado a la ${posicion}`;
    }

    imprimirPropiedades(): void {
        console.log(this.obtenerPropiedades());
    }
}

// Prueba
const cabecera = new CabeceraPagina('Pagina de prueba', 'Rojo', 'Arial');
console.log(cabecera.establecerPosicion('centro'));
cabecera.imprimirPropiedades();
