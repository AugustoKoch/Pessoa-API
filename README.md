# Pessoa-API
API de cadastro de pessoas, criada para projeto final na materia de Desenvolvimento Web (ADS). Os seguintes requisitos foram passados:

>Criem uma página html para realizar o cadastro de pessoa.

  * A página deverá se chamar novo.html e utilizar o bootstrap para aplicar estilização em tela.
  * Os campos nome, e-mail e telefone são obrigatórios, ou seja, o usuário não conseguirá enviar os dados para o servidor se não preencher esses campos. (utilize a propriedade adequada para o html entender que esse campo é obrigatório).
  * Ao clicar em cancelar, a página deverá limpar todos os campos preenchidos.
  * Ao clicar em Salvar, você deverá criar um alerta que os dados foram salvos com sucesso.(criem um evento javascript para capturar o click do botão).

>Criem uma página html para listar todos os registros de pessoas cadastradas.
  * A página deverá se chamar index.html e utilizar o bootstrap para aplicar estilização em tela.
  * Ao clicar no botão com ícone de remover, a página deverá exibir um pop-up de confirmação, com a seguinte mensagem : “Deseja remover esse registro ?”.
  * Ao confirmar a remoção, o sistema deverá remover a linha da tabela.(criem um evento javascript para capturar o click do botão).

>Criem uma página html para realizar o cadastro de pessoa.
  * A página deverá se chamar editar.html e utilizar o bootstrap para aplicar estilização em tela.
  * Os campos nome, e-mail e telefone são obrigatórios, ou seja, o usuário não conseguirá enviar os dados para o servidor se não preencher esses campos. (utilize a propriedade adequada para o html entender que esse campo é obrigatório).
  * O campo email deve estar desabilitado para edição.Ao clicar em cancelar, a página deverá limpar todos os campos preenchidos.
  * Ao clicar em Salvar, você deverá criar um alerta que os dados foram salvos com sucesso.(criem um evento javascript para capturar o click do botão).

>Obs: Para cada página html, criem um arquivo js para realizar as lógicas com javascript.

### Criar um projeto backend com spring boot chamado pessoa-api.
  - Esse projeto deverá ser criado com as dependências necessárias  para realizar o crud no banco de dados. (jpa, web, lombok, driver mysql, )
  - Criar a Classe Pessoa com os atributos (id, nome, nome, e-mail, telefone, endereço, ativo)
  - Criar o Repositório chamado PessoaRepository.

>Criar o controller chamado PessoaController.
No controller deverá ter os seguintes métodos :
  - buscar todos os registros.
  - buscar único registro por id.
  - salvar nova pessoa.
  - atualizar os dados de uma pessoa.
  - remover uma pessoa pelo id.


>Desenvolver a comunicação do front-end com a api do back-end.
