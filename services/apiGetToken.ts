import axios from "axios";

const apiGetToken = axios.create({
    baseURL:"https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/magistrado/obterdados/",
});

export default apiGetToken;