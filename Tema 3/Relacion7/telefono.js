function Telefono (num){
    //? Propiedades
    this.num = num;
    this.numLlamadas = 0;

    //? Métodos
    this.llamar = function () {
        this.numLlamadas++;
        return this.numLlamadas;
    }
}
