document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const botaoParaCor = document.getElementById("theme-toggle");

  
    body.classList.add("dark-theme");

   
    botaoParaCor.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            botaoParaCor.textContent = "Trocar para Tema Preto";
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            botaoParaCor.textContent = "Trocar para Tema Branco";
        }
    });
});
