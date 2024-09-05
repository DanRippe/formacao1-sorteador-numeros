let txtResultado = document.getElementById('resultado');

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);

    let arrayNumsSorteados = [];
    let numero;

    let i = 0;
    for (i = 0; i < quantidade; i++) { 
        numero = sortearNumAleatorio(numeroInicial, numeroFinal);

        while (arrayNumsSorteados.includes(numero)) {
            numero = sortearNumAleatorio(numeroInicial, numeroFinal);
        }

        arrayNumsSorteados.push(numero);
    }

    txtResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${arrayNumsSorteados}</label>`;

    //desabilitaBotao(String('btn-sortear'));
    //habilitaBotao(String('btn-reiniciar'));
}

function reiniciar() {
    txtResultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    //habilitaBotao(String('btn-sortear'));
    //desabilitaBotao(String('btn-reiniciar'));
}


function sortearNumAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function habilitaBotao(btn) {
    let botao = document.getElementById(btn);
    if (botao.classList.contains('container_botao-desabilitado')) {
        botao.classList.remove('container_botao-desabilitado');
        botao.classList.add('container_botao');
    }
}

function desabilitaBotao(btn) {
    let botao = document.getElementById(btn);
    if (botao.classList.contains('container_botao')) {
        botao.classList.remove('container_botao');
        botao.classList.add('container_botao-desabilitado');
    }
}