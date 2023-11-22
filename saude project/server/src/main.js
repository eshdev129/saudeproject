const sendButton = document.getElementById('sendButton').addEventListener('click', criarCadastro)

const nome = new Nome();
const email = new Email();
const mensagem = new Mensagem();



function criarCadastro(e) {
    e.preventDefault();
    const nome = document.getElementById('contact-name').value;
    console.log(nome);
    const email = document.getElementById('contact-email').value;
    const mensagem = document.getElementById('contact-mensagem').value;

    const contato = []
    contato.push(nome, email, mensagem)
    console.log(contato)
}