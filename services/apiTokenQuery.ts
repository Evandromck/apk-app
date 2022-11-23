
import axios from "axios";
import { useState, useEffect } from "react";
//axios para requisição HTTP.

//# No caso de API sendo acessada na mesma máquina.
//Emulador Android Studio
// http://10.0.2.2:3000

//Emulador para iOS
//http://localhost:3000

const apiTokenQuery = axios.create({
  baseURL: "https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/",
});

export default apiTokenQuery;

