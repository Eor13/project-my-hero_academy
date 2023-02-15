//Passo-1 -quando passa o mouse no personagem
const personagens = document.querySelectorAll('.personagem')
personagens.forEach((personagem)=>{
    personagem.addEventListener('mouseenter', () =>{
        
        //Passo 6 - bloquear a seleção do personagem 2.
        const idSelecionado = personagem.attributes.id.value
        if (idSelecionado === "Tomura") return;

        //Passo 2 -  retirar a classe selecionado do pesonagem antigo
        const personagemSelecionado = document.querySelector(".selecionado")
        personagemSelecionado.classList.remove("selecionado")

        //Passo-3 - colocar a classe selecionado no novo pesonagem
        personagem.classList.add('selecionado')

        //Passo-4 -mudar o personagem grande  o a mudança de personagem
        const imagemJogador1 = document.getElementById("personagem-jogador-1")
        imagemJogador1.src= `./src/images/${idSelecionado}.png`

        //Passo-5 -mudar o nome do personagem grande  o a mudança de personagem
        const nomeJogador1 = document.getElementById("nome-jogador-1")
        nomeJogador1.innerText = `${idSelecionado}`
        
    })
}) 
    


