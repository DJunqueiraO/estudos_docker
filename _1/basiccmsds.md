# Lista de Comandos Básicos do Docker

- **`cat <arquivo>` (dentro do contêiner)**
  - **Descrição**: Exibe o conteúdo de um arquivo.
  - **Partes**:
    - `cat`: Comando Linux para mostrar conteúdo.
    - `<arquivo>`: Nome do arquivo a ser exibido.

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
    - `-t <nome>:<tag>`: Define o nome e a tag da imagem.
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
    - `-t <nome>:<tag>`: Define o nome e a tag da imagem.
    - `--load`: Instrui o Buildx a carregar a imagem resultante no armazenamento local do Docker.
    - `.`: Especifica o diretório atual como contexto de build, onde o Dockerfile está localizado.

- **`docker buildx create --name <nome> --driver docker-container --use`**
  - **Descrição**: Cria um novo builder Buildx e o define como ativo.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `buildx create`: Subcomando para criar um novo builder.
    - `--name <nome>`: Define um nome para o builder.
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
  - **Descrição**: Mostra conteúdo de um arquivo do contêiner sem entrar.
  - **Partes**:
    - `docker exec`: Executa comando no contêiner.
    - `<container>`: Nome ou ID do contêiner.
    - `cat /app/<arquivo>`: Exibe o arquivo especificado.

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
    - `<image-id>`: Identificador único da imagem a ser removida.
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
    - `logs`: Subcomando (subcomando para recuperar logs).
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
    - `<nome>:<tag>`: Nome da imagem e sua tag específica.

- **`docker rm <container-id>`**
  - **Descrição**: Remove um contêiner parado.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `rm`: Subcomando para remover contêineres.
    - `<container-id>`: Identificador único do contêiner a ser removido.
    - **Nota**: Use `-f` (force) para remover um contêiner mesmo se estiver em execução.

- **`docker rm <container> -f`**
  - **Descrição**: Remove um contêiner com força, mesmo se estiver em execução.
  - **Partes**:
    - `docker`: Executável principal.
    - `rm`: Remove contêiner.
    - `<container>`: Nome ou ID do contêiner.
    - `-f`: Força parada e remoção.

- **`docker rm <container> -fv`**
  - **Descrição**: Remove um contêiner com força e remove volumes associados.
  - **Partes**:
    - `docker`: Executável principal.
    - `rm`: Remove contêiner.
    - `-f`: Força parada.
    - `-v`: Remove volumes anônimos associados.
    - `<container>`: Nome ou ID do contêiner.

- **`docker run -p <porta-host>:<porta-contêiner> -d --name <nome> <imagem>`**
  - **Descrição**: Executa um contêiner a partir de uma imagem, mapeando portas, rodando em segundo plano e nomeando o contêiner.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `run`: Subcomando para criar e iniciar um novo contêiner a partir de uma imagem.
    - `-p <porta-host>:<porta-contêiner>`: Mapeia uma porta do host para uma porta do contêiner.
    - `-d`: Executa o contêiner em modo detached (em segundo plano, sem ocupar o terminal).
    - `--name <nome>`: Define um nome personalizado para o contêiner.
    - `<imagem>`: Nome da imagem usada para criar o contêiner.

- **`docker run -v <host-path>:<container-path>:<mode> -v <container-path> -p <porta-host>:<porta-contêiner> -d --name <nome> <imagem>`**
  - **Descrição**: Executa um contêiner com volume read-only, volume anônimo para diretório específico, mapeando portas e nomeando o contêiner.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `run`: Subcomando para criar e iniciar um contêiner.
    - `-v <host-path>:<container-path>:<mode>`: Monta um caminho do host no contêiner com modo (ex: `ro` para somente leitura).
    - `-v <container-path>`: Cria um volume anônimo para o caminho no contêiner.
    - `-p <porta-host>:<porta-contêiner>`: Mapeia porta do host para o contêiner.
    - `-d`: Executa em modo detached.
    - `--name <nome>`: Define o nome do contêiner.
    - `<imagem>`: Nome da imagem base.

- **`docker run -v <host-path>:<container-path>:<mode> -v <container-path> --env <VAR>=<valor> -p <porta-host>:<porta-contêiner> -d --name <nome> <imagem>`**
  - **Descrição**: Executa um contêiner com volume read-only, volume anônimo, variável de ambiente individual, mapeando portas.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `run`: Cria e inicia o contêiner.
    - `-v <host-path>:<container-path>:<mode>`: Monta caminho com modo.
    - `-v <container-path>`: Volume anônimo.
    - `--env <VAR>=<valor>`: Define uma variável de ambiente.
    - `-p <porta-host>:<porta-contêiner>`: Mapeia porta do host para o contêiner.
    - `-d`: Modo detached.
    - `--name <nome>`: Nome do contêiner.
    - `<imagem>`: Imagem base.

- **`docker run -v <host-path>:<container-path>:<mode> -v <container-path> --env-file <arquivo> -p <porta-host>:<porta-contêiner> -d --name <nome> <imagem>`**
  - **Descrição**: Executa um contêiner carregando variáveis de ambiente de um arquivo, com volumes e mapeamento de portas.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `run`: Cria e inicia o contêiner.
    - `-v <host-path>:<container-path>:<mode>`: Monta caminho com modo.
    - `-v <container-path>`: Volume anônimo.
    - `--env-file <arquivo>`: Carrega variáveis de ambiente do arquivo especificado.
    - `-p <porta-host>:<porta-contêiner>`: Mapeia porta.
    - `-d`: Detached.
    - `--name <nome>`: Nome do contêiner.
    - `<imagem>`: Imagem base.

- **`docker stop <container-id>`**
  - **Descrição**: Para a execução de um contêiner em execução.
  - **Partes**:
    - `docker`: Executável principal do Docker.
    - `stop`: Subcomando para parar um contêiner, enviando um sinal para encerrar o processo.
    - `<container-id>`: Identificador único do contêiner.

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
    - `<volume-id>`: ID do volume.

- **`docker-compose down -v`**
  - **Descrição**: Para e remove contêineres, redes e volumes definidos no `docker-compose.yml`.
  - **Partes**:
    - `docker-compose`: Ferramenta para definir e rodar aplicações multi-contêiner.
    - `down`: Subcomando para desmontar a aplicação.
    - `-v`: Remove volumes anônimos associados aos serviços.

- **`docker-compose up -d`**
  - **Descrição**: Inicia os serviços definidos no `docker-compose.yml` em modo detached (em segundo plano).
  - **Partes**:
    - `docker-compose`: Ferramenta para orquestração.
    - `up`: Subcomando para iniciar os serviços.
    - `-d`: Executa em modo detached.

- **`docker-compose up -d --build`**
  - **Descrição**: Reconstrói as imagens (se necessário) e inicia os serviços em modo detached.
  - **Partes**:
    - `docker-compose`: Ferramenta para orquestração.
    - `up`: Inicia os serviços.
    - `-d`: Modo detached.
    - `--build`: Força a reconstrução das imagens antes de iniciar.

- **`docker-compose up --help`**
  - **Descrição**: Exibe a ajuda completa do comando `up` do Docker Compose, com todas as opções disponíveis.
  - **Partes**:
    - `docker-compose`: Ferramenta principal.
    - `up`: Subcomando para iniciar serviços.
    - `--help`: Mostra documentação detalhada.

- **`exit` (dentro do contêiner)**
  - **Descrição**: Sai do shell interativo do contêiner.
  - **Partes**:
    - `exit`: Encerra a sessão `bash`.

- **`ls` (dentro do contêiner)**
  - **Descrição**: Lista arquivos e pastas no diretório atual.
  - **Partes**:
    - `ls`: Comando Linux padrão.

- **`printenv` (dentro do contêiner)**
  - **Descrição**: Exibe todas as variáveis de ambiente no contêiner.
  - **Partes**:
    - `printenv`: Comando Linux para listar variáveis.

- **`touch <arquivo>` (dentro do contêiner)**
  - **Descrição**: Cria um arquivo vazio (só funciona se o volume não for `:ro`).
  - **Partes**:
    - `touch`: Cria ou atualiza timestamp.
    - `<arquivo>`: Nome do arquivo a ser criado.

- **`wsl --shutdown`**
  - **Descrição**: Encerra todas as distribuições do WSL 2, útil para resolver erros no Docker Desktop no Windows.
  - **Partes**:
    - `wsl`: Comando do Windows Subsystem for Linux.
    - `--shutdown`: Subcomando que força a parada de todas as instâncias do WSL 2.