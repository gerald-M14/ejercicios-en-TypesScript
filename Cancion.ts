class Cancion {
    private autor: string;

    constructor(private titulo: string, private genero: string) {
        this.autor = '';
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    getAutor(): string {
        return this.autor;
    }

    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
    }
}

// Prueba
const cancion = new Cancion('Bohemian Rhapsody', 'Rock');
cancion.setAutor('Queen');
console.log('Autor:', cancion.getAutor());
cancion.mostrarDatos();
