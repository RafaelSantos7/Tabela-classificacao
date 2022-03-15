//variaveis criada para guarda os jogadores e seus valores
var rafael = {nome: "Rafael", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var lucas = {nome: "Lucas", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var joao = {nome: "joao", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};

calculaPontos(rafael); //para que os calculos dos pontos sejam atribuidos direto
rafael.pontos = calculaPontos(rafael);
lucas.pontos = calculaPontos(lucas);
joao.pontos = calculaPontos(joao);

function calculaPontos(jogador) { //somando as vitorias e empates
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos; 
}

var jogadores = [rafael, lucas, joao]

function exibirJogadoresNaTela(jogadores) {
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) { //for criado para que os elementos da tabela sejam atribuidos a cada funcionalidade .nome .vitorias ... para que sejam imprimido na tela o valor e o ponto
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>"+ jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick= 'adicionarVitoria( "+ i +")' >Vitória</button></td>"
        elemento += "<td><button onClick= 'adicionarEmpate("+ i +")' >Empate</button></td>"
        elemento += "<td><button onClick= 'adicionarDerrota("+ i +")' >Derrota</button></td>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento;
}

exibirJogadoresNaTela(jogadores);

function adicionarVitoria(i) { //função para o botão adicionar vitoria funcionar
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) { //função para o botão adiconar empate  funcionar
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) { //função para o botão derrota funcionar, botão derrota so conta a derrota nao adicona ponto
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadoresNaTela(jogadores);
}