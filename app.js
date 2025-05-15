//Aqui eu vou "achar" o botão "add", e guardar ele em uma variavel pra 
//usar depois
const addTaskBtn = document.getElementById('add-task-btn');

//agora vou usar uma função própria do js... ela já é padrão da linguagem
//voce pode simplesmente escrever e ela já funciona, não depende de nada
//externo.. serve pra ficar "vigiando/escutando" o elemento lá do html
// o que eu quero aqui, é que ela saiba quando eu clicar no botão
//eeeee tbm dizer assim pra ele: quero que vc preste atenção pra se alguém
//clicar, tá? e aí dps que clicarem vc pode por favor chamar aquela 
//função de adicionar?
//aí fazemos assim:

addTaskBtn.addEventListener('click', addTask);

//beleza, o botão foi clicado e a gente ficou sabendo... e agora??
//o próximo passo é pegar aquilo que foi escrito naquela barrinha
//pra isso precisamos "achar" a barrinha

const addTaskInput = document.getElementById('add-task');

//ok, o que a gente quer fazer aqui é pegar o texto que escrevemos na
//barrinha, e colocar ele como um item da lista né?
//já achamos onde está a barrinha, agora precisamos achar o texto que ta la
// pra isso tem mais uma habilidade do js, padrão dele tbm
//mas antes vamos criar uma função, pq ela vai ser usada várias vezes
//vamos precisar dela várias vezes

//e antes precisamos achar a lista tbm, já que o item vai dentro dela
const taskList = document.getElementById('task-list')
//achouu

function addTask(){
    // aqui vamos pegar o texto por acessar o valor (o que está dentro)
    //da barrinha

    const taskText = addTaskInput.value.trim();

    const li = document.createElement('li');
    li.textContent = taskText;

    taskList.appendChild(li)
    addTaskInput.value = ''; //pra limpar/resetar a barrinha depois de adicionar um item

    
}
