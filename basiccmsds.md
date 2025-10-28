# Lista de Comandos Básicos do Docker

- **`cat <arquivo>` (dentro do contêiner)**
  - **Descrição**: Exibe o conteúdo de um arquivo.
  - **Partes**:
    - `cat`: Comando Linux para mostrar conteúdo.
    - `<arquivo>`: Ex: `cat index.js`.

- **`DOCKER_BUILDKIT=0 docker build -t <nome>:<tag> .`**
  - **Descrição**: Constrói uma imagem sem usar o BuildKit, revertendo para o builder clássico.
  - **Partes**:
    - `DOCKER_BUILDKIT=0`: Variável de ambiente que desativa o BuildKit para o comando.
    - `docker`: Executável principal do Docker.
    - `build`: Subcomando para construir uma imagem.
    - `-t <nome>:<tag>`: Define o nome e a tag da imagem.
    - `.`: Especifica o diretório atual como contexto de build.

- **`docker build -t <nome>:<tag> .`**
  - **Descrição**: Constrói uma imagem Docker a partir de um Dockerfile no diretório especificado.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `build`: Subcomando para construir uma imagem a partir de um Dockerfile.
    - `-t <nome>:<tag>`: Define o nome e a tag da imagem (ex.: `minha-imagem:v1`). O `-t` significa "tag".
    - `.`: Especifica o diretório atual como o contexto de build, onde o Dockerfile deve estar presente.

- **`docker builder prune -a -f`**
  - **Descrição**: Limpa o cache de builds, removendo todos os dados não utilizados.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `builder prune`: Subcomando para limpar o cache do Buildx ou do builder padrão.
    - `-a`: Remove todos os dados de cache, não apenas os não referenciados.
    - `-f`: Força a remoção sem confirmação.

- **`docker buildx build -t <nome>:<tag> --load .`**
  - **Descrição**: Constrói uma imagem usando o Buildx (ferramenta avançada para builds) e carrega a imagem localmente.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `buildx build`: Subcomando do Buildx para realizar builds avançados, suportando múltiplas plataformas.
    - `-t <nome>:<tag>`: Define o nome e a tag da imagem, como no comando `build`.
    - `--load`: Instrui o Buildx a carregar a imagem resultante no armazenamento local do Docker (em vez de apenas exportar).
    - `.`: Especifica o diretório atual como contexto de build, onde o Dockerfile está localizado.

- **`docker buildx create --name <nome> --driver docker-container --use`**
  - **Descrição**: Cria um novo builder Buildx e o define como ativo.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `buildx create`: Subcomando para criar um novo builder.
    - `--name <nome>`: Define um nome para o builder (ex.: `meu-builder`).
    - `--driver docker-container`: Especifica o tipo de driver, que usa um contêiner Docker para builds.
    - `--use`: Define o builder recém-criado como o ativo para builds futuros.

- **`docker buildx ls`**
  - **Descrição**: Lista os builders configurados no Buildx.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `buildx ls`: Subcomando que lista os builders disponíveis, mostrando nome, driver e status.

- **`docker container prune`**
  - **Descrição**: Remove todos os contêineres parados, liberando espaço.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `container prune`: Subcomando que remove todos os contêineres no estado "exited".

- **`docker exec -it <container-id> bash`**
  - **Descrição**: Acessa um contêiner em execução de forma interativa, iniciando um shell bash.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `exec`: Subcomando para executar um comando dentro de um contêiner em execução.
    - `-i`: Mantém a entrada padrão (STDIN) aberta para interação.
    - `-t`: Aloca um terminal pseudo-TTY para simular um ambiente de terminal.
    - `<container-id>`: Identificador do contêiner onde o comando será executado.
    - `bash`: O comando a ser executado, iniciando um shell interativo.

- **`docker exec <container> cat /app/<arquivo>`**
  - **Descrição**: Mostra conteúdo de um arquivo do contêiner **sem entrar**.
  - **Partes**:
    - `docker exec`: Executa comando no contêiner.
    - `<container>`: Nome ou ID.
    - `cat /app/<arquivo>`: Exibe arquivo.

- **`docker image ls`**
  - **Descrição**: Lista todas as imagens Docker disponíveis localmente no sistema.
  - **Partes**:
    - `docker`: Executável principal do Docker para gerenciar contêineres e imagens.
    - `image ls`: Subcomando que lista as imagens disponíveis, mostrando detalhes como nome, tag, ID e tamanho.

- **`docker image prune -a`**
  - **Descrição**: Remove todas as imagens não utilizadas (sem contêineres associados).
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `image prune`: Subcomando para remover imagens não utilizadas.
    - `-a`: Remove todas as imagens sem contêineres associados, não apenas as "dangling".

- **`docker image rm <image-id>`**
  - **Descrição**: Remove uma ou mais imagens Docker pelo seu ID.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `image rm`: Subcomando para remover imagens.
    - `<image-id>`: Identificador único da imagem a ser removida (pode ser obtido com `docker image ls`).
    - **Nota**: Use `-f` (force) para forçar a remoção, mesmo se a imagem estiver em uso.

- **`docker info`**
  - **Descrição**: Exibe informações detalhadas sobre o ambiente Docker, como número de contêineres e imagens.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `info`: Subcomando que fornece um resumo do estado do Docker no sistema.

- **`docker logs <container-id>`**
  - **Descrição**: Exibe os logs (saída padrão e de erro) de um contêiner.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `logs`: Subcomando para recuperar logs de um contêiner.
    - `<container-id>`: Identificador do contêiner cujos logs serão exibidos.

- **`docker logs $(docker ps -q --filter label=org.docker.container.driver=buildx_buildkit)`**
  - **Descrição**: Exibe os logs do contêiner BuildKit ativo, útil para depuração de builds.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `logs`: Subcomando para recuperar logs.
    - `$(...)`: Subshell que executa um comando interno e passa seu resultado.
    - `docker ps`: Lista contêineres em execução.
    - `-q`: Retorna apenas os IDs dos contêineres.
    - `--filter label=org.docker.container.driver=buildx_buildkit`: Filtra contêineres com o rótulo específico do BuildKit.

- **`docker ps`**
  - **Descrição**: Lista os contêineres em execução no momento.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `ps`: Subcomando que lista contêineres ativos, mostrando ID, nome, imagem usada e status.
    - **Nota**: Use `-a` para listar todos os contêineres, incluindo os parados.

- **`docker pull <nome>:<tag>`**
  - **Descrição**: Baixa uma imagem do Docker Hub ou outro registro configurado.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `pull`: Subcomando para baixar imagens de um repositório remoto.
    - `<nome>:<tag>`: Nome da imagem e sua tag específica (ex.: `nginx:latest`).

- **`docker rm <container-id>`**
  - **Descrição**: Remove um contêiner parado.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `rm`: Subcomando para remover contêineres.
    - `<container-id>`: Identificador único do contêiner a ser removido.
    - **Nota**: Use `-f` (force) para remover um contêiner mesmo se estiver em execução.

- **`docker rm node-app -f`**
  - **Descrição**: Remove um contêiner com força, mesmo se estiver em execução.
  - **Partes**:
    - `docker`: Executável principal.
    - `rm`: Remove contêiner.
    - `node-app`: Nome do contêiner.
    - `-f`: Força parada e remoção.

- **`docker rm node-app -fv`**
  - **Descrição**: Remove um contêiner com força e remove volumes associados.
  - **Partes**:
    - `docker`: Executável principal.
    - `rm`: Remove contêiner.
    - `-f`: Força parada.
    - `-v`: Remove volumes anônimos associados.
    - `node-app`: Nome do contêiner.

- **`docker run -p <porta-host>:<porta-contêiner> -d --name <nome> <imagem>`**
  - **Descrição**: Executa um contêiner a partir de uma imagem, mapeando portas, rodando em segundo plano e nomeando o contêiner.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `run`: Subcomando para criar e iniciar um novo contêiner a partir de uma imagem.
    - `-p <porta-host>:<porta-contêiner>`: Mapeia uma porta do host para uma porta do contêiner (ex.: `8080:80`).
    - `-d`: Executa o contêiner em modo detached (em segundo plano, sem ocupar o terminal).
    - `--name <nome>`: Define um nome personalizado para o contêiner (ex.: `meu-app`).
    - `<imagem>`: Nome da imagem usada para criar o contêiner (ex.: `nginx`).

- **`docker run -v .:/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image`**
  - **Descrição**: Executa um contêiner a partir da imagem `node-app-image`, configurando volumes, mapeando portas, rodando em segundo plano e nomeando o contêiner.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `run`: Subcomando para criar e iniciar um contêiner.
    - `-v .:/app:ro`: Monta o diretório atual do host (`.`) no caminho `/app` do contêiner como somente leitura (`ro`).
    - `-v /app/node_modules`: Cria um volume anônimo para o diretório `/app/node_modules` no contêiner, evitando que as dependências Node.js do host sejam usadas.
    - `-p 3000:3000`: Mapeia a porta 3000 do host para a porta 3000 do contêiner.
    - `-d`: Executa o contêiner em modo detached (em segundo plano).
    - `--name node-app`: Define o nome do contêiner como `node-app`.
    - `node-app-image`: Nome da imagem usada para criar o contêiner.

- **`docker run -v .:/app:ro -v /app/node_modules --env PORT=4000 -p 3000:4000 -d --name node-app node-app-image`**
  - **Descrição**: Executa um contêiner com volume read-only, volume anônimo para `node_modules`, define variável `PORT` e mapeia portas.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `run`: Cria e inicia o contêiner.
    - `-v .:/app:ro`: Monta código do host como somente leitura.
    - `-v /app/node_modules`: Cria volume anônimo para evitar conflito com `node_modules` do host.
    - `--env PORT=4000`: Define variável de ambiente `PORT=4000`.
    - `-p 3000:4000`: Mapeia porta 3000 (host) → 4000 (contêiner).
    - `-d`: Modo detached.
    - `--name node-app`: Nome do contêiner.
    - `node-app-image`: Imagem base.

- **`docker run -v .:/app:ro -v /app/node_modules --env-file ./.env -p 3000:4000 -d --name node-app node-app-image`**
  - **Descrição**: Executa um contêiner carregando variáveis de ambiente de um arquivo `.env`.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `run`: Cria e inicia o contêiner.
    - `-v .:/app:ro`: Monta diretório atual como read-only.
    - `-v /app/node_modules`: Volume anônimo para `node_modules`.
    - `--env-file ./.env`: Carrega todas as variáveis do arquivo `.env`.
    - `-p 3000:4000`: Mapeia porta.
    - `-d`: Detached.
    - `--name node-app`: Nome do contêiner.
    - `node-app-image`: Imagem.

- **`docker stop <container-id>`**
  - **Descrição**: Para a execução de um contêiner em execução.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `stop`: Subcomando para parar um contêiner, enviando um sinal para encerrar o processo.
    - `<container-id>`: Identificador único do contêiner (obtido com `docker ps`).

- **`docker version`**
  - **Descrição**: Exibe a versão do cliente e do servidor Docker instalados.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `version`: Subcomando que mostra informações detalhadas sobre as versões do Docker.

- **`docker volume ls`**
  - **Descrição**: Lista todos os volumes (anônimos e nomeados) no sistema.
  - **Partes**:
    - `docker`: Executável principal.
    - `volume ls`: Lista volumes com driver e nome.

- **`docker volume prune`**
  - **Descrição**: Remove todos os volumes anônimos não utilizados.
  - **Partes**:
    - `docker`: Executável principal.
    - `volume prune`: Limpa volumes órfãos.
    - **Nota**: Use `-f` para pular confirmação.

- **`docker volume rm <volume-id>`**
  - **Descrição**: Remove um volume específico pelo ID.
  - **Partes**:
    - `docker`: Executável principal.
    - `volume rm`: Remove volume.
    - `<volume-id>`: ID do volume (ex: `1b667e916680...`).

- **`exit` (dentro do contêiner)**
  - **Descrição**: Sai do shell interativo do contêiner.
  - **Partes**:
    - `exit`: Encerra a sessão `bash`.

- **`ls` (dentro do contêiner)**
  - **Descrição**: Lista arquivos e pastas no diretório atual.
  - **Partes**:
    - `ls`: Comando Linux padrão.
    - **Exemplo**: `ls -la` → lista com detalhes.

- **`printenv` (dentro do contêiner)**
  - **Descrição**: Exibe todas as variáveis de ambiente no contêiner.
  - **Partes**:
    - `printenv`: Comando Linux para listar variáveis.
    - **Exemplo**: `printenv | grep PORT` → filtra `PORT`.

- **`touch <arquivo>` (dentro do contêiner)**
  - **Descrição**: Cria um arquivo vazio (só funciona se o volume **não for `:ro`**).
  - **Partes**:
    - `touch`: Cria ou atualiza timestamp.
    - `<arquivo>`: Ex: `touch novo.txt`.
    - **Erro se `:ro`**: `Read-only file system`.

- **`wsl --shutdown`**
  - **Descrição**: Encerra todas as distribuições do WSL 2, útil para resolver erros no Docker Desktop no Windows.
  - **Partes**:
    - `wsl`: Comando do Windows Subsystem for Linux.
    - `--shutdown`: Subcomando que força a parada de todas as instâncias do WSL 2.