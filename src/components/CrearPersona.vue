<template>
  <div>
    <h1>INGRESE LOS DATOS DE LA PERSONA PARA SU REGISTRO</h1>
    <br />
    <div id="central">
      <table id="uno">
        <tr>
          <td><label for="">Nombre: </label></td>
          <td><input v-model="nombre" required type="text" /></td>
        </tr>
        <tr>
          <td><label for="">Direccion: </label></td>
          <td><input v-model="direccion" required type="text" /></td>
        </tr>
        <tr>
          <td><label for="">Edad: </label></td>
          <td><input v-model="edad" required type="number" /></td>
        </tr>
      </table>

      <table>
        <tr>
          <td><button @click="Insertar()">Ingresar Datos</button></td>
        </tr>
        <tr>
          <td>
            <label for="">{{ mensaje }}</label>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <br />

    <button id="back" @click="regresar">ATRAS</button>
  </div>
</template>
<script>
import { insertarPersona } from "@/js/ProcesarPersona";
import router from "@/router/router";

export default {
  data() {
    return {
      nombre: null,
      direccion: null,
      edad: null,
      mensaje: null,
    };
  },
  methods: {
    async Insertar() {
      const per = {
        nombre: this.nombre,
        direccion: this.direccion,
        edad: this.edad,
      };
      if (this.nombre == null || this.direccion == null || this.edad == null) {
        console.log("insertado");
        this.mensaje = "Llene todos los parametros";
      } else {
        await insertarPersona(per);
        (this.mensaje = "Se ha ingresado correctamente"),
          this.nombre == null,
          this.direccion == null,
          this.edad == null;
      }
    },
    regresar() {
      router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0 auto;
  color: brown;
}

#central table {
  margin: 0 auto;
}

#uno {
  background-color: #ffebcd;
}
td {
  padding: 25px;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

label {
  display: inline-block;
  font-weight: 600;
  margin-bottom: 5px;
  color: #555;
  transition: color 0.3s ease-in-out;
}

button {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #007bff; /* Color base para el botón */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #0056b3; /* Color un poco más oscuro al pasar el cursor */
  transform: translateY(
    -2px
  ); /* Pequeña animación para un efecto de elevación */
}

#back {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #dc3545; /* Color de fondo rojo intenso */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none; /* Si es un enlace, elimina el subrayado */
}

#back:hover {
  background-color: #c82333; /* Color un poco más oscuro al pasar el cursor */
}
</style>