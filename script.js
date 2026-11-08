console.log("Studio Aurora iniciado!");

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        console.log(`Navegando para: ${link.textContent}`);
    });
});