# 🔐 Authentication OTP + JWT

Sistema de autenticação moderna com **Node.js**, **Express**, **Prisma** e **PostgreSQL**, utilizando **OTP via e-mail (Mailtrap)** e geração de **JWT** para acesso seguro a rotas privadas.

---

- **Node.js + Express** — Servidor backend rápido e simples.
- **TypeScript** — Tipagem estática para maior segurança no código.
- **Prisma ORM** — Integração e manipulação do banco de dados PostgreSQL.
- **PostgreSQL** — Banco de dados relacional utilizado no projeto.
- **Mailtrap** — Ferramenta para simulação e teste de envio de e-mails.
- **JWT (JSON Web Token)** — Autenticação segura de usuários.

---

```bash
## ⚙️ Configuração do Ambiente

### 1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/authentication-OTP-JWT.git
cd authentication-OTP-JWT

# Instalar dependências
npm install | npm i
```

---

# Configurar variáveis de ambiente
Crie o arquivo .env na raiz do projeto com o seguinte conteúdo:

```bash
PORT=3000
DATABASE_URL="postgresql://postgres:1234@localhost:5432/seu_banco?schema=public"
MAILTRAP_TOKEN="seu_token_mailtrap_aqui"
JWT_SECRET="sua_chave_secreta_jwt"
```
💡 Substitua seu_token_mailtrap_aqui e sua_chave_secreta_jwt pelos valores reais.

--- 

# Configurar o banco de dados
Crie um banco no PostgreSQL e execute as migrações do Prisma:

```bash
npx prisma migrate dev

# Executar o servidor
npm run dev
```

# 🧩 Principais Rotas

Método	Rota	Descrição
GET	  /ping	        - Verifica se o servidor está online
POST	/auth/signup	- Cadastra um novo usuário
POST	/auth/signin	- Envia código OTP para o e-mail
POST	/auth/useotp	- Valida o OTP e retorna o JWT
GET	  /private	    - Rota protegida (requer token JWT)
