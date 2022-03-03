<h1 align="center"> FoodX.</h1>

<div align="center">
  <img src="logo-foodx.png">
</div>

<br/>

### 🎯 Sobre

O **FoodX** é uma plataforma WEB e MOBILE para compra de qualquer tipo de comida ou bebida, isso fica a preferência do usuário.

A API do **FoodX** irá servir os dados para a plataforma WEB e Mobile disponível para Android.

### Aplicação Utilizada para Teste

Todas as rotas foram testadas utilizando o [Insomnia](https://insomnia.rest/download/).

### Recursos da API

:busts_in_silhouette: **Criação de perfil de usuário**

- [x] Permite que um usuário consiga criar a sua conta no sistema;
- [x] Permite que um usuário consiga buscar suas informações;
- [x] Permite que um usuário consiga criar a sua conta sem cadastrar uma foto de perfil;
- [x] Permite que um usuário consiga criar a sua conta sem cadastrar uma cartão de crédito;

:lock: **Recuperação de senha**

- [x] Permite que um usuário consiga recuperar a senha informando o e-mail cadastrado;
- [x] A API envia para o usuário um e-mail con instruções de recuperação de senha;
- [x] A API envia um link com token por e-mail para resetar a senha e por segurança o token enviado expira em 2h;
- [x] Cadastro e autenticação de usuários com geração de JwToken;
- [x] Autenticação de usuários com JwToken;

:busts_in_silhouette: **Atualização de perfil de usuário**

- [x] Permite usuário cadastrar-se no sistena e atualizar seu perfil (incluindo imagem de avatar);
- [x] Validação de e-mails no cadastro, não é possível cadastrar dois usuários com mesmo e-mail;
- [x] Para atualizar a senha, o usuário deve informar a senha antiga e a nova senha;

:date: **Agendamento de serviços**

- [x] Usuário poderá está fazendo agendamento para receber um pedido em terderminado horário;

:shope: **Fazeer Comprar no sistema**

- [x] Usuário poderá está fazendo uma compra de um ou mais produtos em nosso sistema;
- [x] Usuário para fazer uma comprar no sistema ele terá que está cadastrado e deverá está autenticado na hora de fazer seu pedido;
- [x] Usuário poderá fazer uma comprar, e ele poderá estar passando seu pedido no crédito ate 3x;
- [x] Usuário poderá está escolhendo o produto de preferência e adicinar ao carrionho e comprar mais tarde ou ate no outro dia;
- [x] Usuário poderá está fazendo sua escolha, receber o pedido em casa ou ir fazer sua própia retirada no estabelecimento;
- [x] Usuário quando fizer seu pedido, durante os primeiro 5 minutos ele poderá está fazendo o cancelamento sem ser cobrado algum valor sobre o pedido;
- [x] Usuário quando fizer seu pedido, ele será capaz de está acompanhando a entrega do pedido atè a sua casa em tempo real;
- [x] Usuário quando seu pedido estiver a caminho ele poderá está fazendo uma ligação para o motoboy ou estabelecimento;

### Banco de Dados e Estratégias de Armazenamento

Para banco de dados, foi utilizado o **Mysql** para armazenar os dados que envolvem relacionamentos da regra de negócio da aplicação.

### Ferramentas, Técnicas e Bibliotecas da API

- [x] Aplicação Utilizando a Metodologia Clean-Code (Clean-Code);
- [x] Utilização do [nestjs](https://nestjs.com/) Nest. js é um framework para construir backend em Node. js que trás o modelo arquitetural mais utilizado atualmente de maneira fácil, e aproveitando os principais frameworks.
- [x] Utilização do [typescript](https://www.typescriptlang.org/) fazer tipagem em noso código;
- [x] Utilização do [mysql](https://www.npmjs.com/package/mysql2) fazer armazenamento da nossas informações;
- [x] Utilizado o [uuid](https://www.npmjs.com/package/uuid) Um identificador único universal (do inglês universally unique identifier - UUID);
- [x] Utilização do [jwt](https://jwt.io/) para trabalhar com autenticação de usuário;
- [x] Utilização do [bcrypt.js](https://www.npmjs.com/package/bcryptjs) para trabalhar com hash de senhas de usuário exe: [h84uh734f3];

## 👨🏻‍💻 Roda Projeto em Sua Máquina

- Clone the project

```bash
  git clone https://github.com/Weverson-Luan/FOODX.git
```

- Go to the project directory

```bash
  cd food-x
```

- Install dependencies

```bash
  npm install or yarn install
```

<div align="center">
  <small>@Weverson Luan Sousa - 2022</small>
</div>
