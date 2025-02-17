function exibirMensagem() {
    var nome = document.getElementById('nome').value;
    var cidade = document.getElementById('cidade').value;
    var moraNaCidade = document.querySelector('input[name="moraNaCidade"]:checked').value;

   
    var mensagem = `Bem-vindo(a) ${nome}, a cidade escolhida foi ${cidade}. Você mora na cidade: ${moraNaCidade === 'sim' ? 'sim' : 'não'}.`;

    document.getElementById('mensagem').textContent = mensagem;
}
