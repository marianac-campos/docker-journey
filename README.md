![docker_github](https://user-images.githubusercontent.com/69722854/210459662-51b06e9b-812d-4d9c-84ae-53a19d955bd7.png)

# What is Docker?
Docker is an open source platform that enables developers to build, deploy, run, update and manage containers—standardized, executable components that combine application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

# Docker vs VM
![image](https://user-images.githubusercontent.com/69722854/211675478-d14f0797-8525-49ea-a9b3-dbe39ce06899.png)


# Docker framework
![image](https://user-images.githubusercontent.com/69722854/211675798-e444c4ab-c5c6-46f4-bb6c-84b948216862.png)

**Namespace** => Garante a isolação dos containers tendo sub-processos resposáveis por cada parte:<br />
  **PID -** isola os processos rodando dentro do container
  **NET -** provê isolamento das inferfaces de rede
  **IPC -** isola a comunicação entre os processos e a memória compartilhada
  **MNT -** isola sistemas de arquivo
  **UTS -** isola o container do kernel, agindo dessa forma como se ele fosse outro host.
  
 **Cgroups** - define como e qual será o consumo de recursos para cada container (automaticamente ou manualmente)


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
