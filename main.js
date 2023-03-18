const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./img/aprovado.png" alt="Emoji festejando" />'
const imgReprovado = '<img src="./img/reprovado.png" alt="Emoji decepcionado" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima'));


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionalinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionalinha(){

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`A Atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha +=`<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(1);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    console.log(media);
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas+= notas[i];
    }

    return somaDasNotas / notas.length;
}