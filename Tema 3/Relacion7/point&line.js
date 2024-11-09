function Punto(x,y){
    this.posX = x;
    this.posY = y;
}

function Recta(punto1, punto2){
    this.posInicial = (punto1.posX + ", " + punto1.posY);
    this.posFinal = (punto2.posX + ", " + punto2.posY);
}