document.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');  
    })
    document.addEventListener('DOMContentLoaded',function(){

        const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
        const opcoesDeAcessbilidade=document.getElementById('opcoes-acessibilidade');
        
        botaoDeAcessibilidade.addEventListener('click',function(){
            botaoDeAcessibilidade.classList.toggle('rotacao-botao');
            opcoesDeAcessbilidade.classList.toggle('apresenta-lista');
        
        const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true';
        