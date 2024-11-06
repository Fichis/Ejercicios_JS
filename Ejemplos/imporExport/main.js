import { Usuario } from "./modulos/usuario.mjs";
import { Empleado } from "./modulos/empleado.mjs";

function CreaUsuario(dni, nombre, edad) {
    let usuario = new Usuario(dni, nombre, edad);
    return usuario;
}

(function () {
    const arrUsuarios = [];
    arrUsuarios[0] = new Usuario("77945209A", "Adolfo", 22);
    arrUsuarios[1] = new Usuario("12345678B", "Erik", 21);

    arrUsuarios.forEach((element) => {
      element.showMe();
    });
})()

/* let us1 = CreaUsuario("77945209A","Adolfo", 22);
console.log(us1); */