# Cooking v2.0 :tomato:

Cooking v2.0 é um projeto avaliativo para as disciplinas de Desenvolvimento de Aplicações WEB e Desenvolvimento de Sites WEB do curso Superior em Sistemas para Internet, do [Instituto Federal Sul-Rio-Grandense](http://www.pelotas.ifsul.edu.br/), Campus Pelotas-RS.

## Clonando o Repositório

Selecione uma pasta no seu computador (recomendamos a htdocs), e utilize o git para clonar os arquivos. Execute o comando abaixo:

```bash
git clone https://github.com/leoadamo/cookingv2.0.git
```

## Instalação

Utilize o package manager [npm](https://www.npmjs.com/) para instalar as dependências do projeto, executando o seguinte comando:

```bash
npm install
```

## Importando a base de dados

Após ter feito o clone do repositório para sua máquina e também ter instalado todas as dependências do projeto, é necessário importar a estrutura da base de dados. Para isso, utilizando o phpMyAdmin, crie um novo banco e dê o nome de **_cookingv2.0_**.

Em seguida, procure o diretório **_database_** na pasta raíz do projeto. Dentro dele estará o arquivo que será importado no phpMyAdmin para, enfim, criar as tabelas do banco.

## Instalando o Gulp global

Este comando, instalará o gulp globalmente em sua máquina, possibilitando que você faça uso de alguns comandos da interface de linha de comando (o gulp cli, ou command line interface).

```bash
npm install gulp-cli -g
```

## Rodando o projeto

Para rodar o projeto, utilizaremos o comando abaixo, que se encarregará de subir um servidor local, utilizando o BrowserSync e também otimizará todos os assets, colocando na pasta **_dist_**, que irá conter os arquivos prontos para o deploy em produção.

Com isso, rode o projeto executando:

```bash
gulp
```

## Limpando a dist

Se por algum motivo, você desejar limpar todos os assets que foram injetados na dist ou também precise limpar algum cache, utilize o comando abaixo que se encarregará de fazer o serviço sujo.

```bash
gulp clear
```

Uma vez que limpamos a dist, podemos rodar novamente o comando que injeta todos os assets otimizados nela, com isso nosso projeto estará sempre livre de cache ou arquivos desnecessários :tada:

```bash
gulp
```

## Contribuições

Caso perceba algum bug ou até mesmo alguma melhoria no código, sinta-se a vontade para efetuar a correção e abrir uma [pull request](https://github.com/leoadamo/cookingv2.0/pulls) para que possamos incorporar suas edições ao código.

## Autores

O projeto foi totalmente desenvolvido por este que voz escreve - Leonardo Adamoli - e pela minha colega Nathalia Garcia. Caso tenha interesse, siga nossos perfis nas redes sociais

[LinkedIn Leonardo](https://www.linkedin.com/in/adamolileonardo/) | [LinkedIn Nathalia](https://www.linkedin.com/in/nathaliagarcia8/)
