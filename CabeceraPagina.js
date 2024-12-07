var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente);
    };
    CabeceraPagina.prototype.establecerPosicion = function (posicion) {
        return "El t\u00EDtulo aparecer\u00E1 alineado a la ".concat(posicion);
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log(this.obtenerPropiedades());
    };
    return CabeceraPagina;
}());
// Prueba
var cabecera = new CabeceraPagina('Mi Título', 'Rojo', 'Arial');
console.log(cabecera.establecerPosicion('centro'));
cabecera.imprimirPropiedades();
