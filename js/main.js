const botao = document.getElementsByClassName("theme-switch__checkbox")[0];

botao.onclick = () => {
    document.body.classList.toggle("dark");
}