// simulador.js
import { db } from "./firebaseConfig.js";
import {
  ref,
  push
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

window.simular = async () => {
  try {
    const email = document.getElementById("email").value.trim();

    await push(ref(db, "simulacoes"), {
      email: email || "vazio",
      status: email ? "digitado" : "não digitado",
      data: new Date().toLocaleString()
    });

    // 👉 REDIRECIONA PRA REVELAÇÃO
    window.location.href = "revelacao.html";

  } catch (erro) {
    console.error("Erro ao salvar:", erro);
    alert("Erro ao salvar no Firebase.");
  }
};