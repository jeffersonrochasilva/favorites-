import { defineStore } from "pinia";

export const usuarioStore = defineStore("usuario", {
  state: () => {
    return {
      listaPessoas: [
        {
          id: 7,
          nome: "joão",
          sobrenome: "silva",
          idade: "20",
        },
        {
          id: 8,
          nome: "maria",
          sobrenome: "souza",
          idade: "25",
        },
        {
          id: 9,
          nome: "josé",
          sobrenome: "junior",
          idade: "30",
        },
      ],
    };
  },
});
