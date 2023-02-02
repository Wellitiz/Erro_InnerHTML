window.onload = function () {
    const Tx_Gerado=document.querySelector("#Tx_Gerado");
    const btn = document.querySelector("#btn");
    const ms = document.querySelector("#ms");
    const fx = document.querySelector(".fechar");
    const texte = document.querySelector(".texte");




    // Função de Gerar DIV
    btn.addEventListener("click", function() {
        Tx_Gerado.innerHTML = "<div class='texte'> <h1>Olá mundo</h1> <p>Esse é um texto de teste</p> <button class='fechar'> Fechar </button> </div>";
        console.log('clicou');
    });



    // Função de Mostrar e fechar na Div
    fx.addEventListener('click', function() {

        if(texte.style.display === 'none') {
            texte.style.display = 'block';
        } else {
            texte.style.display = 'none';
        }
    });



    // Função de Mostrar e fechar no Botão Superior
    ms.addEventListener('click', function() {

        if(texte.style.display === 'none') {
            texte.style.display = 'block';
        } else {
            texte.style.display = 'none';
        }

    });

}

////////////////////////////////////////////////////////////////

const Tx_Ger=document.querySelector(".Tx_Ger");
const btn2 = document.querySelector("#btn2");
const fechar = document.querySelector(".fechar");
const card2 = document.querySelector(".card2");



btn2.addEventListener("click", function() {
        Tx_Ger.innerHTML = "<div class='card2'> <h1>Olá mundo</h1> <p>Esse é um texto de teste</p> <button class='esconder'> Esconder </button> </div>";
        console.log('clicou');
    });


fechar.addEventListener('click', function() {

     if(card2.style.display === 'none') {
        card2.style.display = 'block';
    } else {
        card2.style.display = 'none';
    }
});