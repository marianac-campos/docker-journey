![docker_github](https://user-images.githubusercontent.com/69722854/210459662-51b06e9b-812d-4d9c-84ae-53a19d955bd7.png)

# What is Docker?
Docker is an open source platform that enables developers to build, deploy, run, update and manage containers—standardized, executable components that combine application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

```docker rmi $(docker images -q)```

## Basic commands

|Parâmetro|Explicação|
|---|---|
|-d|Execução do container em background|
|-i|Modo interativo. Mantém o STDIN aberto mesmo sem console anexado|
|-t|Aloca uma pseudo TTY|
|--rm|Automaticamente remove o container após finalização (Não funciona com -d)|
|--name|Nomear o container|
|-v|Mapeamento de volume|
|-p|Mapeamento de porta|
|-m|Limitar o uso de memória RAM|
|-c|Balancear o uso de CPU|
