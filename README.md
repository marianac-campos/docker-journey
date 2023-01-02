# Docker

```docker rmi $(docker images -q)```

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
