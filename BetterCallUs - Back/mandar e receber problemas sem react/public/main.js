document.addEventListener('DOMContentLoaded', () => {

    const problemaForm = document.getElementById('problemaForm');
    const problemaTable = document.getElementById('problemaTable');

    // Função para buscar e exibir os problemas
    async function fetchProblemas() {
        const response = await fetch('/problemas', {
            method: 'GET',
        });

        if (response.ok) {
            const problemas = await response.json();
            // Limpar a tabela
            problemaTable.querySelector('tbody').innerHTML = '';

            // Preencher a tabela com os problemas
            problemas.forEach((problema) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${problema.titulo}</td>
                    <td>${problema.descricao}</td>
                `;
                problemaTable.querySelector('tbody').appendChild(row);
            });
        }
    }

    // Adicionar um ouvinte para o formulário
    problemaForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;

        const response = await fetch('/inserirProblema', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titulo, descricao })
        });

        if (response.ok) {
            alert('Problema inserido com sucesso no banco de dados!');
            document.getElementById('titulo').value = '';
            document.getElementById('descricao').value = '';
            // Atualizar a tabela após a inserção
            fetchProblemas();
        } else {
            alert('Erro ao inserir o problema no banco de dados.');
        }

    });

    // Buscar e exibir problemas ao carregar a página
    fetchProblemas();
});
