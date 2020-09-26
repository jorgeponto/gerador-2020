# gerador / <em lang="en">Generator</em>

[português](#pt-PT) | [english](#en)

<div id="pt-PT" lang="pt-PT">

<abbr title="versão portuguesa">pt-PT</abbr>

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
</div>

---

<div id="en" lang="en">
 
 <abbr title="English version">EN</abbr>

Generator of Accessibility and Usability Statement

## Installing the Accessibility Statement Generator

Copy all the files, except those inside the `server` folder, to the Web server that will serve the Generator.

In the `js / generator.js` file, update the` fetchServer` variable to point to the address where the accessibility statement loading service is available from a URL.

## Installation of the service to obtain the accessibility statement from a URL

Copy the file `server / server.js` to the location where this service will be executed.

In the `server / server.js` file set the value of the constants:
- `hostname`: service address (must match the one indicated in` fetchServer` in the generator)
- `port`: service port (must match the one indicated in` fetchServer` in the generator)
- `origin`: address (including port if necessary) of the machine where the Generator is made available (where requests for this service come from)

Run the service using the command

```
node server.js
```


</div>
 
