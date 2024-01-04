<template>
  <div>
    <h1>Editar Persona con ID: {{ ids }}</h1>
  </div>
  <br />
  <div id="central">
    <table id="uno">
      <tr>
        <td><label for="">Nombre: </label></td>
        <td><input type="text" required v-model="nombre" id="idNombre" /></td>
        <td>
          <label for="" style="display: none">{{ nombre }}</label>
        </td>
      </tr>
      <tr>
        <td><label for="">Direccion: </label></td>
        <td>
          <input type="text" required v-model="direccion" id="idDireccion" />
        </td>
        <td>
          <label for="" style="display: none">{{ direccion }}</label>
        </td>
      </tr>
      <tr>
        <td><label for="">Edad: </label></td>
        <td><input type="number" required v-model="edad" id="idEdad" /></td>
        <td>
          <label for="" style="display: none">{{ edad }}</label>
        </td>
      </tr>
    </table>
    <br />
    <table>
      <tr>
        <td><button @click="actualizar()">Actualizar</button></td>
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

  <button id="back" @click="Regresar">ATRAS</button>
</template>

<script>
import { actualizarPersona } from "@/js/ProcesarPersona";
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
  props: {
    ids: null,
    nombres: {
      type: String,
    },
    direcciones: {
      type: String,
    },
    edades: {
      type: String,
    },
  },
  methods: {
    valoresDefinidos() {
      document.getElementById("idNombre").value = this.nombres;
      document.getElementById("idDireccion").value = this.direcciones;
      document.getElementById("idEdad").value = this.edades;
    },
    async actualizar() {
      const persona = {
        id: this.ids,
        nombre: this.nombre,
        direccion: this.direccion,
        edad: this.edad,
      };
      if (this.nombre == null || this.direccion == null || this.edad == null) {
        this.mensaje = "Llene todos los parametros";
      } else {
        await actualizarPersona(this.ids, persona);
        (this.nombre = null), (this.direccion = null), (this.edad = null);
        this.mensaje = "Se ha actualizado correctamente";
        this.regresar();
      }
    },
    regresar() {
      this.$router.replace("/mostrar");
    },
    Regresar() {
      router.push("/mostrar");
    },
  },
  mounted() {
    this.valoresDefinidos();
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