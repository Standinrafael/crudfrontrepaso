import axios from "axios";

export const insertarPersona = async (body) => {
  return await insertar(body);
};

export const listaPersonas = async () => {
  return await listaPer();
};

export const eliminarPersona = async (id) => {
  return await eliminar(id);
};

export const buscarPersona = async (id) => {
  return await buscarPersonaPorID(id);
};

export const actualizarPersona = async (id, body) => {
  return await actualizar(id, body);
};

const insertar = async (body) => {
  const data = axios
    .post(`http://localhost:8080/personas/insertar`, body)
    .then((r) => r.data);
  return data;
};

const listaPer = async () => {
  const data = axios.get(`http://localhost:8080/personas`).then((r) => r.data);
  console.log(data);
  return data;
};

const eliminar = async (id) => {
  const data = axios
    .delete(`http://localhost:8080/personas/eliminar/${id}`)
    .then((r) => r.data);
  return data;
};

const buscarPersonaPorID = async (id) => {
  const data = axios
    .get(`http://localhost:8080/personas/${id}`)
    .then((r) => r.data);
  return data;
};

const actualizar = async (id, body) => {
  axios
    .put(`http://localhost:8080/personas/actualizar/${id}`, body)
    .then((r) => r.data);
};
