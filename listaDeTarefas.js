(() => { //bloqueando o acesso ao conteúdo no console. IIFE - funcao de execução imediata. Colocando todo o arquivo dentro de um escopo fde função. (() => {} )()
    
    const criarTarefa = (evento) => {

    evento.preventDefault() //prevenindo comportamento padrão. Aqui estamos evitando que a pagina recarregue evitando que osdados sejam eviados

    const lista = document.querySelector('[data-list]')//buscando o elemento UL

    const input = document.querySelector('[data-form-input]') //capturando o input e não o seu valor

    const valor = input.value // acessando o valor que foi digitado no input e atribuindo a variavel valor

    const tarefa = document.createElement ('li')//criando uma li e colocando na variavel tarefa

    tarefa.classList.add ('task') //Adicionando uma classe css, nesse caso, estamos adicionando uma classe ao li que foi criado e armazenado na variavel tarefa.

    const conteudo = `<P class ="content">${valor}</P>` //criando um parágrafo. Interpolando cod HTML com JS. Aqui selecionamos a li e criamos um modelo de paragrafo

    tarefa.innerHTML = conteudo //colocando o paragrafo dentro da li. Dessa forma, estamos acessando o conteudo do elemento
    
    tarefa.appendChild(BotaoConclui())// irá adicionar um botao dentro da tarefa que nesse caso, é a li, pois ela é quem está armazenada na variavel tarefa.

    tarefa.appendChild(BotaoDeleta())// irá adicionar um botao dentro da tarefa que nesse caso, é a li, pois ela é quem está armazenada na variavel tarefa.

    lista.appendChild(tarefa)//anexando um elemento dentro do outro, nesse caso, colocando uma li dentro da ul. Aqui está adicionando uma tarefa ao final do nó.
    input.value = " "//limpando o input

    

}


const novaTarefa = document.querySelector('[data-form-button]') //capturando o botão

novaTarefa.addEventListener('click', criarTarefa) //addEventListener () permite configurar funções a serem chamadas quando um evento especificado acontece, como quando um usuário clica em um botão. Neste caso, a função "criarTarefa" será execultada ao ser clicada por meio de um botão, já que novaTarefa vem de uma captura de botão.

const BotaoConclui = () => { //componente 
    const botaoConclui = document.createElement('button') //criando um botao de concluir
    
    botaoConclui.classList.add('check-button')//adicionando uma classe
    botaoConclui.innerText = 'concluir' //texto que será mostrado quando gerar o botão. Ou seja, representa o conteúdo de texto que será renderizado no botão.

    botaoConclui.addEventListener('click', concluirTarefa) //ao clicar nesse botao, a função concluirTarefa será chamada e efetuada.

    return botaoConclui //quem chamar a funcao BotaoConclui, receberá tudo o que aconteceu aqui, nesse caso com a variavel botaoConclui

}

const concluirTarefa = (evento) => {//funcão que trabalha com eventos - componente
    const botaoConclui = evento.target //target = diz qual o alvo do evento. Informa em quem voce clicou. Aqui, vamos subir um no na arvore do DOM, porque o estilo de rabisco será na li. Descobre o elemento que foi clicado

    const tarefaCompleta = botaoConclui.parentElement //parentElement = subindo um elemento. Pegando o pai do botao. Nesse caso, o pai do botao será a li. Ela será riscada. Pega o pai do elemento

    tarefaCompleta.classList.toggle('done')//estilizando a tarefa. toggle = recebe classe do css que vai dar o efeito de rabisco a partir do momento que o botao for clicado. toggle retorna um boleano verdadeiro ou faso, nesse caso, se foi clicado ou não. 
}

const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement ('button')//criando o botao delete 
    botaoDeleta.classList.add('delete-button')//
    botaoDeleta.innerText = 'deletar'//recebendo o nome 
    botaoDeleta.addEventListener('click', deletarTarefa)//quando botaoDelete for clicado, ele irá chamar e efetuar a fução deletarTarefa
    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target; //diz aonde foi clicado, nesse caso , um botão. 
    const tarefaCompleta = botaoDeleta.parentElement;//por estar pegando um elemento a cima do botao, vai deletar o elemento e não o botao. Dessa, forma, ao clicar no botão deletar, vai excluir a li inteira
    tarefaCompleta.remove();//remove o no da arvore
    
    return botaoDeleta;
}
})()