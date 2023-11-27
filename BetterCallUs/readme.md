# Como instalar e rodar o projeto

## Requisitos
- Windows
- Instalar NodeJs [aqui](https://nodejs.org/dist/v18.18.2/node-v18.18.2-x64.msi);
  - Instale com todas as dependências, voce pode ver como instalar [aqui](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos#:~:text=A%20instala%C3%A7%C3%A3o%20do%20Node%20no,adicionado%20ao%20PATH%20do%20Windows.).
- Instalar MySQL [aqui](https://dev.mysql.com/downloads/installer/).
  - Instalar as seguintes dependências:
    - Mysql Server Versão 8.0.34;
    - Mysql Workbench 8.0.34;
    - Mysql Router 8.0.34;
    - Mysql Shell 8.0.34.
  - Você pode ver como instalar [aqui](https://dicasdeprogramacao.com.br/como-instalar-o-mysql-no-windows/).

## Execução

## Server.js
  Entre na no arquivo **server.js** (Pode ser encontrado no caminho: "\Sprint-4\BetterCallUs\src\app\src\server") e na linha 15, onde está escrito: password: '---', altere a senha para a de seu usuario do MySql

### MySQL
  Você deve executar todas as linhas do arquivo **BetterCallUs.sql** (Ele pode ser encontrado no caminho: "\Sprint-4\BetterCallUs\src\app\src\server") dentro do MySQL Workbench, selecionando todo as linhas dentro do arquivo, para saber como abrir o arquivo acesse [aqui](https://pt.wikihow.com/Abrir-um-Arquivo-SQL) e para executar o script inteiro você deve clicar e segurar, um atrás do outro, e soltar no útimo o botão, **ctrl + shift + enter**.

### JavaScript
  Primeiramente, você deve, no gerenciador de arquivos, depois de baixado, abrir a pasta **server** e no endereço superior apagar o endereço da pasta, digitar **cmd** e clicar em **enter**, agora dentro da janela voce deve digitar o seguinte comando e aguardar:
```
npm install
```

  Agora você deve acessar a pasta **app**, e dentro dela, clicar no endereço superior apagar o endereço da pasta, digitar **cmd** e clicar em **enter**, agora dentro da janela voce deve digitar o seguinte comando e aguardar:
```
npm install
```

  Volte então para a janela que você abriu dentro da pasta **server**, digite o seguinte código e aguarde:
```
node server.js
```

  Então agora deve-se voltar para a janela que foi aberta a partir da pasta **app**, digitar o seguinte comando e aguardar:
```
npm start
```

  A página deve abrir automaticamente no navegador, caso ela não tenha sida aberta automaticamente, voce pode acessar ela por [aqui](http://localhost:3000).

