## Funcionalidades
Esse produto nada mais é do que uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. Ela possui todas as funcionalidades mais comuns em redes sociais:

1. **Cadastro**

    O usuário só precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 carácteres. 

2. **Login**

    Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. *

3. **Informações do próprio perfil**

    A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco de dados (id e email)

4. **Criar receitas**

    O usuário  pode criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo e data de criação

5. **Seguir usuário**

    Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. 


## Instruções

* `npm install`:
Instala as dependências do projeto.

* `touch .env` : 
Cria o arquivo `.env` com as informações do seu banco de dados.
```
DB_HOST = host
DB_USER = usuario
DB_PASS = senha
DB_NAME = seu banco de dados
```

### Criar  tabelas
* `npm run createTables`:
Cria as tabelas pré-configuradas para o projeto.

### Executar o projeto

* `npm run build`: 
Transplila todo o projeto e cria  pasta build.

* `npm run start`: 
Inicia a conexão com o banco de dados e roda o projeto.

* `npm run dev`: oferece um executável que reinicia o processo do node toda vez que um arquivo muda (executa suas alterações instantaneamente), e também transpila o TypeScript.

* `ctrl + C`: Parar a execução do servidor.
