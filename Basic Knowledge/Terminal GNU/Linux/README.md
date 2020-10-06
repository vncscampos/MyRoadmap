O terminal do linux também conhecido como shell, é um programa que recebe comandos do usuário a partir do teclado e repassa-os  às camadas de baixo nível do sistema operacional. O interpretador de comandos (bash, zsh, csh, tesh, sh) é quem executa comandos digitados no terminal.

## Lista de comandos mais comuns

* `Exit`            - faz logout da sessão atual
* `ls`              - lista diretórios
* `ls -al`          - lista mostrando também arquivos ocultos
* `cd dir`          - muda do diretório atual para o especificado (substituir a variável dir pelo nome da pasta)
* `cd`              - muda para o diretório /home (arquivos pessoais)
* `pwd`             - mostra o caminho do diretório atual
* `mkdir dir*`      - criar um diretório especificado (substituir a variável dir pelo nome da pasta)
* `rm arq`          - apaga o arquivo especificado (substituir a variável arq pelo nome do arquivo que se quer excluir)
* `rm -r dir`       - apaga o diretório especificado (substituir a variável dir pelo nome da pasta)
* `rm -f arq`       - apaga o arquivo especificado forçadamente (-f de force) (substituir a variável arq pelo nome do arquivo que se quer excluir)
* `rm -rf dir`      - apaga o diretório especificado forçadamente (substituir a variável dir pelo nome da pasta)
* `cp -r arq1 arq2` - copia o “arquivo1” para o “arquivo2” (substituir a variável arq* pelo nome do arquivo)
* `cp -r dir1 dir2` - copia o diretório1 para o diretório2; cria o diretório2 caso não exista (substituir a variável dir pelo nome do diretório)
* `mv arq1 arq2`    - dupla função: pode ser usado para renomear ou mover arquivo1 para arquivo2. Se arquivo2 for um diretório existente, move arquivo1 para dentro do diretório “arquivo2” (substituir a variávelarq pelo nome do arquivo)
* `touch arq`       - cria ou atualiza o arquivo (substituir a variável arq pelo nome do arquivo)
* `cat > arq`       - direciona a entrada padrão para um arquivo (substituir a variável arq pelo nome do arquivo)
* `more arq`        - mostra o conteúdo de um arquivo (substituir a variável arq pelo nome do arquivo)
* `head arq`        - mostra as primeiras 10 linhas de um arquivo (substituir a variável arq pelo nome do arquivo)
* `tail arq`        - mostra as últimas 10 linhas de um arquivo (substituir a variável arq pelo nome do arquivo)
* `tail -f arq`     - mostra o conteúdo de um arquivo enquanto ele é atualizado (aumenta de tamanho), iniciando com as últimas 10 linhas (substituir a variável arq pelo nome do arquivo)
* `ps`              - mostra os processos de usuário ativos em tempo real￼
* `top`             - mostra todos os processos rodando em tempo real
* `kill pid`        - mata um processo específico pelo número ID (substituir pid pelo número do processo)
* `killall proc`    - mata todos os processos com o nome especificado (proc, de processos (substituir proc pelo nome do processo)
* `bg`              - lista trabalhos parados ou em segundo plano ou pode continua-los também
* `fg`              - traz o trabalho mais recente para o primeiro plano
* `fg trab`         - traz o trabalho “trab” para o primeiro plano (substituir trab pelo nome do processo)
* `find / -name file1` - busca de arquivo e diretório da raiz do sistema.
* `locate \*.ps:`   - encontrar arquivos com a extensão .ps primeiro executado com o comando “updatedb’

## Outros comandos úteis
* `chmod 777`                   - leitura (r), gravação (w) e execução (x) para todos (“usuário”, “grupo” e “outros”)
* `ssh -p porta usuário@host`   - conecta ao host na porta especificada
* `comando | grep sequência`    - pesquisa pela sequência na saída do comando 
* `whoami`                      - mostra como quem você está logado
* `ifconfig`                    - mostra a configuração da rede

## Alguns comandos para informações do sistema

* `uname -m`                - mostre a arquitetura da máquina.
* `uname -r`                - mostre versão do kernel usada.
* `dmidecode -q`            - mostre os componentes do sistema (hardware).
* `hdparm -i /dev/hda`      - mostre as características de um disco rígido.
* `hdparm -tT /dev/sda`     - execute teste de leitura em um disco rígido.
* `cat /proc/cpuinfo`       - exiba informações da CPU.
* `cat /proc/interrupts`    - mostre interrupções.
* `cat /proc/meminfo`       - verificar a utilização de memória.
* `ls -lSr |more`           - estimar o espaço usado pelo diretório ‘dir1’.
* `du -sh dir1`             - mostre o tamanho dos arquivos e diretórios ordenados por tamanho.
* `cat /proc/version`       - exiba a versão do kernel.
* `cat /proc/net/dev`       - mostre estatísticas e adaptadores de rede.
* `cat /proc/mounts`        - mostre o sistema de arquivos montado.
* `lspci -tv`               - exiba os dispositivos PCI.
* `lsusb -tv`               - mostre os dispositivos USB.
* `date`                    - mostre a data do sistema.
* `clock -w`                - salve as alterações para a data na BIOS.

Deus abençoe a fonte: https://www.uniaogeek.com.br/guia-de-comandos-shell-terminal-gnulinux/