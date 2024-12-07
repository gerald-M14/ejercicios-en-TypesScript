var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", G\u00E9nero: ").concat(this.genero, ", Autor: ").concat(this.autor));
    };
    return Cancion;
}());
// Prueba
var cancion = new Cancion('Bohemian Rhapsody', 'Rock');
cancion.setAutor('Queen');
console.log('Autor:', cancion.getAutor());
cancion.mostrarDatos();
