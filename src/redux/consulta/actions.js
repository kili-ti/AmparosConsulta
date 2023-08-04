/** @format */

export const CONSULTAR = "[CONSULTA] Get";
export const CONSULTAR_SUCCESS = "[CONSULTA] Get success";
export const CONSULTAR_ERROR = "[CONSULTA] Get Error";

export const consultar = (nrocarpeta) => ({
    type: CONSULTAR,
    carpeta: nrocarpeta,
});
