class Empleado {
  constructor(cod, nombre, tlf) {
    this.cod = cod;
    this.nombre = nombre;
    this.tlf = tlf;
  }
  muestraEmpleado() {
    console.log(`Empleado: ${this.cod} -- ${this.nombre}`);
  }
}


export { Empleado }