const problemasRegistrados = [];

function adicionarProblema(descricao) {
    problemasRegistrados.push({ descricao });
}

function exibirProblemas() {
    const listaProblemas = document.getElementById('listaProblemas');
    listaProblemas.innerHTML = ''; 

    problemasRegistrados.forEach((problema, index) => {
        const row = listaProblemas.insertRow();
        const cellIndex = row.insertCell(0);
        const cellDescricao = row.insertCell(1);

        cellIndex.textContent = index + 1;
        cellDescricao.textContent = problema.descricao;
    });
}

const form = document.getElementById('registroProblema');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const descricao = document.getElementById('descricao').value;
    adicionarProblema(descricao);
    exibirProblemas();
    form.reset();
});

exibirProblemas();
