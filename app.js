let txtResultado = document.getElementById('resultado');
let btnSortear = 'btn-sortear';
let btnReiniciar = 'btn-reiniciar';

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);

    let arrayNumsSorteados = [];
    let numero;
    
    if (numeroInicial >= numeroFinal){
        alert('O número inicial não deve ser maior que o número final.');
    } else {
        let i = 0;
        for (i = 0; i < quantidade; i++) { 
            numero = sortearNumAleatorio(numeroInicial, numeroFinal);

        while (arrayNumsSorteados.includes(numero)) {
            numero = sortearNumAleatorio(numeroInicial, numeroFinal);
        }

        arrayNumsSorteados.push(numero);
        }
    
        txtResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${arrayNumsSorteados}</label>`;

        desabilitaBotao(btnSortear);
        habilitaBotao(btnReiniciar);
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    txtResultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    habilitaBotao(btnSortear);
    desabilitaBotao(btnReiniciar);
}


function sortearNumAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function habilitaBotao(btn) {
    let botaoD = document.getElementById(btn);
    if (botaoD.classList.contains('container__botao-desabilitado')) {
        botaoD.classList.remove('container__botao-desabilitado');
        botaoD.classList.add('container__botao');
    }
}

function desabilitaBotao(btn) {
    let botaoH = document.getElementById(btn);
    if (botaoH.classList.contains('container__botao')) {
        botaoH.classList.remove('container__botao');
        botaoH.classList.add('container__botao-desabilitado');
    }
}