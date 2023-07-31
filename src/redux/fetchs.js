/** @format */

import { ODataEntity, ODataFetchFactory } from "@brunomon/odata-fetch-factory";
import { fetchFactory } from "../libs/fetchFactory";

let webApiAmparos = SERVICE_URL;
let webApi = SERVICE_URL + "/api";

export const OspeconServicios = ODataFetchFactory({
    fetch: fetch,
    domain: "https://www.uocra.net/OspeconServicios",
});

export const consultarFetch = fetchFactory(webApi, "Consulta"); //Llamo al Index del controller
