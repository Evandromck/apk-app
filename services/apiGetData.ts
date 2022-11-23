import axios from "axios";


const apiGetdata = axios.create({
    baseURL: "https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/magistrado/obterdados/",
});

export default apiGetdata;