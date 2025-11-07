# 🐳 Docker Compose Example

Este projeto demonstra como **dockerizar** um backend Node.js (Express) com **PostgreSQL** para operações CRUD.

---

## 🚀 Criando e executando o ambiente

Os comandos abaixo constroem a imagem da aplicação e inicializam todo o ambiente com o banco de dados:

```bash
# 1️⃣ Construir a imagem da aplicação Node.js
docker build -t my-node-app .

# 2️⃣ Subir o ambiente completo (Node + PostgreSQL)
docker compose up --build
```

## ⚠️ Esses comandos limpam tudo — containers, imagens e, portanto, todos os dados salvos no banco. Use com cuidado!

```bash
# 1️⃣ Remover todos os containers (em execução ou parados)
docker rm -f $(docker ps -aq)

# 2️⃣ Remover todas as imagens Docker
docker rmi -f $(docker images -aq)

# 2️⃣ Remover todos os volumes
docker volume rm $(docker volume ls -q)
```