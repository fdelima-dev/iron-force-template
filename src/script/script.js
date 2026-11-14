const pergunta = document.querySelectorAll('.pergunta');

pergunta.forEach(function(pergunta){
    pergunta.addEventListener('click', function(){
        const resposta = pergunta.nextElementSibling;
        resposta.classList.toggle('active');
    })
})