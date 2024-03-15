function buscarRegistroPorId() {

    const parametros = new URLSearchParams(window.location.search);

    const idPessoa = parametros.get('id');

    const url = `http://localhost:8080/pessoas?id=${idPessoa}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#id').value = data.id;
            document.querySelector('#nome').value = data.nome;
            document.querySelector('#email').value = data.email;
            document.querySelector('#telefone').value = data.telefone;
            document.querySelector('#endereco').value = data.endereco;
            document.querySelector('#ativo').checked = data.ativo;
           
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}


function bodyJsonPessoa() {

    const id = document.querySelector('#id').value;
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#telefone').value;
    const endereco = document.querySelector('#endereco').value;
    const ativo = document.querySelector('#ativo').checked;


    const pessoa = {
        id : id,
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: endereco,
        ativo: ativo,
    };

    const json = JSON.stringify(pessoa);

    return json;
}

function redirecionarListagem(){
    window.location.href = './index.html';
}

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const bodyJson = bodyJsonPessoa();

    const url = `http://localhost:8080/pessoas`;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: bodyJson
    })
        .then(function (response) {
            if (response.ok) {
                alert("Dados registrados com sucesso");
                redirecionarListagem();
            } else {
                alert("Erro ao enviar o formulário");
            }
        })
        .catch(function (error) {
            console.error(error);
        });

});


buscarRegistroPorId();