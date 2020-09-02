# gerador
 Gerador da Declaração de Acessibilidade e Usabilidade

## Instalação do Gerador de Declarações de Acessibilidade 

Copiar todos os ficheiros, excepto os dentro da pasta `servidor`, para o servidor Web que irá servir o Gerador.

No ficheiro `js/generator.js` atualizar a variável `fetchServer` para apontar para o endereço onde é disponibilizado o serviço de carregamento de declarações de acessibilidade a partir de um URL.

## Instalação do serviço de obtenção de declarações de acessibilidade a partir de um URL

Copiar o ficheiro `servidor/server.js` para o local onde será executado este serviço.

No ficheiro `servidor/server.js` configurar o valor das constantes:
- `hostname`: endereço do serviço (deve coincidir com o indicado em `fetchServer` no gerador)
- `port`: porto do serviço (deve coincidir com o indicado em `fetchServer` no gerador)
- `origin`: endereço (incluindo porto se for necessário) da máquina onde é disponibilizado o Gerador (de onde vêm os pedidos a este serviço)

Executar o serviço correndo
```
node server.js
```