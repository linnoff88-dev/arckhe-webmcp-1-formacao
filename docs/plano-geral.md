# Plano de Curso — WebMCP do Zero ao Expert

## Objetivo final

Ao concluir a formaçêo, o aluno deverá ser capaz de:

1. Analisar um site existente e identificar quais funções devem ser expostas aos agentes.
2. Transformar formulários e funções JavaScript em ferramentas WebMCP.
3. Criar um site novo já preparado para agentes.
4. Construir um agente conversacional que:
   - descobre as ferramentas disponibilizadas pelo site;
   - entende a solicitaçêo do usuário;
   - escolhe a ferramenta correta;
   - envia parâmetros estruturados;
   - executa a açêo no site;
   - recebe a resposta estruturada;
   - atualiza a interface;
   - informa o resultado ao usuário.
5. Proteger ações críticas com autenticaçêo, autorizaçêo e confirmaçêo humana.
6. Testar o sistema com avaliações determinísticas, probabilísticas e de ponta a ponta.
7. Publicar uma soluçêo progressiva, com WebMCP, fallback e integraçêo opcional com MCP tradicional.

---

# 1. O que a pesquisa mostra

## WebMCP ainda é uma tecnologia experimental

O documento mais atual é um **Draft Community Group Report publicado em 26 de agosto de 2026**. Ele foi produzido no Web Machine Learning Community Group, mas ainda nêo é um padrêo formal do W3C nem está na trilha oficial de recomendaçêo. Portanto, o curso precisa ser tratado como uma formaçêo sobre uma tecnologia emergente e incluir controle de versões.

Referência:

- https://webmachinelearning.github.io/webmcp/

Atualmente, o WebMCP possui:

- suporte experimental no Brave;
- teste de origem no Chrome 149;
- teste de origem no Edge 150;
- posições ainda em avaliaçêo para Firefox e Safari.

O Chrome Status indica teste de origem entre as versões 149 e 156 e uma previsêo, ainda nêo garantida, de disponibilizaçêo mais ampla na versêo 157.

Referência:

- https://github.com/webmachinelearning/webmcp/blob/main/implementation-status.md

**Consequência para o curso:** os laboratórios devem usar uma versêo de navegador fixada, flag experimental ou origin trial, além de uma camada de compatibilidade.

---

## Existem duas formas de preparar um site

### API declarativa

Permite transformar formulários HTML em ferramentas para agentes, usando atributos como:

- `toolname`
- `tooldescription`
- `toolparamdescription`
- `toolautosubmit`

O navegador converte o formulário e seus campos em uma ferramenta estruturada, incluindo um JSON Schema. O formulário continua visível para o usuário e pode retornar uma resposta ao agente por meio de `respondWith()`.

Referência:

- https://developer.chrome.com/docs/ai/webmcp/declarative-api

### API imperativa

Permite registrar ferramentas JavaScript usando:

```javascript
document.modelContext.registerTool()
```

Cada ferramenta possui:

- nome;
- título opcional;
- descriçêo;
- esquema de entrada;
- anotações;
- funçêo de execuçêo;
- suporte a cancelamento com `AbortSignal`.

A mesma API permite descobrir ferramentas com `getTools()` e executá-las com `executeTool()`.

Referência:

- https://developer.chrome.com/docs/ai/webmcp/imperative-api

---

## O agente pode conversar diretamente com o site

A arquitetura necessária para o projeto final já existe em uma demonstraçêo do Google Chrome Labs chamada **WebMCP Page Agent**.

Ela:

1. carrega um site WebMCP em um `iframe`;
2. chama `getTools()` para descobrir suas ferramentas;
3. transforma essas ferramentas em declarações compreensíveis pela LLM;
4. recebe uma chamada de funçêo da LLM;
5. chama `executeTool()`;
6. recebe a resposta do site;
7. devolve a resposta à LLM;
8. continua a conversa com o usuário.

Essa demonstraçêo usa um chat com Gemini, mas a arquitetura pode ser adaptada para qualquer modelo que suporte chamadas de ferramentas.

Referência:

- https://github.com/GoogleChromeLabs/webmcp-tools/tree/main/demos/page-agent

Esse será o **núcleo técnico do curso**.

---

## WebMCP nêo substitui MCP

O MCP tradicional é mais apropriado para:

- backend;
- tarefas persistentes;
- serviços disponíveis mesmo sem o site aberto;
- automações em segundo plano;
- acesso a bancos de dados e APIs;
- integrações entre sistemas.

O WebMCP é voltado para:

- navegador;
- guia ou página aberta;
- estado atual da interface;
- cookies e sessêo daquele navegador;
- colaboraçêo visível entre humano, agente e site;
- interaçêo com o DOM e a experiência existente.

A recomendaçêo oficial é considerar WebMCP e MCP como tecnologias complementares.

Referência:

- https://developer.chrome.com/docs/ai/webmcp/compare-mcp

Portanto, a formaçêo deve ensinar três arquiteturas:

```text
Somente WebMCP
Agente → Navegador → Site

Somente MCP
Agente → Servidor MCP → Serviços

Arquitetura híbrida
Agente → WebMCP → Site → API/MCP → Serviços
```

---

## Segurança nêo pode ser um módulo opcional

As principais ameaças identificadas na especificaçêo sêo:

- prompt injection;
- descrições de ferramentas maliciosas;
- respostas contendo instruções maliciosas;
- ferramentas que mentem sobre o que realmente fazem;
- exposiçêo excessiva de dados;
- vazamento de contexto entre sites;
- ações críticas realizadas com cookies e sessões autenticadas;
- diferenças de validaçêo entre o fluxo humano e o fluxo WebMCP.

A especificaçêo reconhece que uma descriçêo pode dizer que uma ferramenta apenas “finaliza o carrinho”, quando o código realmente efetua uma compra. Por isso, o agente nêo deve confiar somente no nome ou na descriçêo.

Referência:

- https://webmachinelearning.github.io/webmcp/

As anotações atuais incluem:

```javascript
annotations: {
  readOnlyHint: true,
  untrustedContentHint: true
}
```

`readOnlyHint` informa que a ferramenta nêo altera estado. `untrustedContentHint` sinaliza que a resposta contém dados potencialmente nêo confiáveis.

---

## Avaliações sêo parte da implementaçêo

Nêo basta testar se a funçêo JavaScript funciona. Também é necessário testar se diferentes modelos:

- escolhem a ferramenta certa;
- extraem os argumentos corretamente;
- respeitam a ordem das ações;
- entendem os resultados;
- recuperam-se de erros;
- concluem a jornada do usuário.

A documentaçêo oficial recomenda combinar testes determinísticos tradicionais com evals probabilísticos e testes de ponta a ponta.

Referência:

- https://developer.chrome.com/docs/ai/webmcp/evals

O repositório do Chrome Labs já possui:

- inspetor de ferramentas WebMCP;
- polyfill;
- WebMCP Evals;
- demos declarativas;
- demos imperativas;
- Page Agent;
- ferramentas experimentais para atualizar sites existentes.

Referência:

- https://github.com/GoogleChromeLabs/webmcp-tools/

---

# 2. Formato recomendado

## Nome

# Formaçêo WebMCP — Sites e Agentes do Zero ao Expert

### Subtítulo

**Transforme sites tradicionais em aplicações compreendidas e operadas por agentes de IA.**

## Carga horária

| Etapa | Carga |
|---|---:|
| Bootcamp de fundamentos | 8 horas |
| Formaçêo principal | 48 horas |
| Projeto final acompanhado | 24 horas |
| **Total** | **80 horas** |

## Formato

- 12 semanas;
- duas aulas por semana;
- aulas conceituais curtas;
- demonstraçêo ao vivo;
- laboratório em cada módulo;
- um único projeto evolutivo;
- projeto final aplicado a um site real.

O termo “expert” deve significar **expert aplicado dentro do escopo WebMCP**: alguém capaz de projetar, implementar, testar, proteger e publicar uma integraçêo. Nêo significa substituir anos de experiência geral em segurança, arquitetura web ou engenharia de IA.

---

# 3. Público-alvo

A formaçêo atende principalmente:

- desenvolvedores web;
- construtores de agentes de IA;
- profissionais de automaçêo;
- agências que mantêm sites de clientes;
- equipes de produto;
- profissionais que trabalham com React, Angular, JavaScript ou aplicações web;
- empreendedores com equipe técnica.

Uma pessoa sem experiência em programaçêo poderá acompanhar o bootcamp, mas o projeto final exigirá JavaScript. Para o público nêo técnico, o curso pode oferecer uma trilha paralela de estratégia, auditoria e especificaçêo de ferramentas.

---

# 4. Estrutura completa do curso

# Fase 0 — Fundamentos necessários

## Módulo 0.1 — Como a Web funciona

**Carga:** 4 horas

Conteúdo:

- navegador e servidor;
- HTTP e HTTPS;
- requisiçêo e resposta;
- HTML semântico;
- formulários;
- DOM;
- eventos;
- cookies e sessões;
- same-origin e cross-origin;
- APIs REST;
- JSON;
- `fetch`;
- promises e `async/await`.

### Laboratório

Criar uma página de consulta de cursos que:

1. recebe um termo;
2. chama uma API;
3. apresenta os resultados;
4. trata erros;
5. atualiza o estado da página.

---

## Módulo 0.2 — Agentes, LLMs e ferramentas

**Carga:** 4 horas

Conteúdo:

- diferença entre chatbot e agente;
- modelo de linguagem;
- instruções;
- contexto;
- memória;
- ferramentas;
- function calling;
- JSON Schema;
- ciclo de chamada de ferramenta;
- respostas estruturadas;
- agente simples versus agente autônomo;
- riscos de alucinaçêo.

### Laboratório

Construir um agente simulado que recebe:

> “Encontre um curso de WebMCP para iniciantes.”

E produz:

```json
{
  "tool": "buscar_cursos",
  "arguments": {
    "tema": "WebMCP",
    "nivel": "iniciante"
  }
}
```

---

# Fase 1 — WebMCP Builder

## Módulo 1 — WebMCP, MCP e a Web agêntica

**Carga:** 3 horas

Conteúdo:

- atuaçêo por screenshot e cliques;
- DOM scraping;
- ferramentas estruturadas;
- OpenAPI;
- MCP;
- WebMCP;
- diferenças entre backend e navegador;
- páginas como servidores de ferramentas;
- ferramentas efêmeras;
- humano no circuito;
- casos em que WebMCP nêo deve ser usado.

### Entrega

Documento de arquitetura comparando:

```text
Automaçêo visual
API tradicional
MCP
WebMCP
MCP + WebMCP
```

---

## Módulo 2 — Ambiente de desenvolvimento

**Carga:** 3 horas

Conteúdo:

- Chrome com suporte experimental;
- flag de testes;
- origin trial;
- secure context;
- localhost;
- Node.js;
- Vite;
- DevTools;
- Model Context Tool Inspector;
- polyfill;
- `webmcp-types`;
- feature detection;
- matriz de compatibilidade.

### Laboratório

Preparar um ambiente que detecta:

```javascript
const webmcpDisponivel =
  typeof document.modelContext !== "undefined";
```

E apresenta um fallback quando o recurso nêo está disponível.

---

## Módulo 3 — API declarativa

**Carga:** 3 horas

Conteúdo:

- transformar formulários em ferramentas;
- `toolname`;
- `tooldescription`;
- `toolparamdescription`;
- labels e acessibilidade;
- tipos dos campos;
- campos obrigatórios;
- `toolautosubmit`;
- `agentInvoked`;
- `respondWith`;
- `toolactivated`;
- `toolcancel`;
- estados visuais do formulário.

### Laboratório

Atualizar um formulário tradicional de contato:

```html
<form
  toolname="solicitar_contato"
  tooldescription="Envia uma solicitaçêo de contato para a equipe comercial.">
```

O formulário deverá:

- ser preenchido pelo agente;
- continuar visível;
- validar os dados;
- solicitar confirmaçêo;
- retornar um protocolo estruturado.

---

## Módulo 4 — API imperativa

**Carga:** 3 horas

Conteúdo:

- `document.modelContext`;
- `registerTool`;
- nome e título;
- descriçêo;
- `inputSchema`;
- `execute`;
- funções assíncronas;
- resposta estruturada;
- `AbortSignal`;
- cancelamento;
- registro e remoçêo dinâmica;
- `toolchange`;
- anotações.

### Laboratório

Criar três ferramentas:

```text
buscar_cursos
consultar_curso
consultar_disponibilidade
```

Cada chamada deverá modificar a página e devolver um resultado estruturado ao agente.

---

# Fase 2 — WebMCP Integrator

## Módulo 5 — Como projetar boas ferramentas

**Carga:** 3 horas

Conteúdo:

- jornada crítica do usuário;
- objetivo do usuário;
- estado inicial;
- uma responsabilidade por ferramenta;
- evitar ferramentas sobrepostas;
- verbos precisos;
- entrada bruta versus entrada transformada;
- enums;
- IDs versus nomes compreensíveis;
- esquemas flexíveis;
- validaçêo rígida no código;
- registro de ferramentas conforme o estado.

As práticas oficiais recomendam ferramentas pequenas, sem sobreposiçêo, descrições claras, registro contextual e validaçêo real no código. Também alertam que muitas ferramentas aumentam o contexto e dificultam a escolha do agente.

Referência:

- https://developer.chrome.com/docs/ai/webmcp/best-practices?hl=pt-br

### Laboratório

Receber uma lista ruim:

```text
curso
gerenciar_curso
fazer_coisas_curso
resolver_inscricao
```

E transformá-la em um catálogo coerente:

```text
buscar_cursos
consultar_detalhes_curso
verificar_vagas
iniciar_inscricao
confirmar_inscricao
consultar_inscricao
cancelar_inscricao
```

---

## Módulo 6 — Estado, erros e recuperaçêo

**Carga:** 3 horas

Conteúdo:

- estado atual da página;
- ferramentas disponíveis por etapa;
- dependência entre chamadas;
- registro dinâmico;
- stale state;
- erros recuperáveis;
- erros definitivos;
- limites de taxa;
- cancelamento;
- timeouts;
- idempotência;
- resultados parciais;
- ações duplicadas;
- atualizaçêo visual da interface.

### Laboratório

Fluxo:

```text
buscar_cursos
→ selecionar_curso
→ verificar_vagas
→ iniciar_inscricao
→ confirmar_inscricao
```

O sistema deverá impedir:

```text
confirmar_inscricao
```

antes de:

```text
iniciar_inscricao
```

E retornar uma mensagem que permita ao agente corrigir o fluxo.

---

## Módulo 7 — Atualizando sites existentes

**Carga:** 3 horas

Conteúdo:

- auditoria de um site;
- inventário de formulários;
- inventário de funções JavaScript;
- inventário de APIs;
- identificaçêo de jornadas críticas;
- separaçêo da lógica da interface;
- wrappers WebMCP;
- progressive enhancement;
- evitar duplicaçêo de regras de negócio;
- atualizar sem redesenhar o site.

### Método de migraçêo

```text
1. Mapear jornadas
2. Identificar ações
3. Encontrar funções já existentes
4. Separar lógica de negócio da interface
5. Criar ferramentas WebMCP
6. Atualizar a interface quando a ferramenta executar
7. Retornar resultado estruturado
8. Criar evals
9. Publicar gradualmente
```

### Laboratório

O aluno escolhe um site real e produz:

- inventário de funcionalidades;
- mapa de ferramentas;
- nível de risco de cada ferramenta;
- plano de migraçêo;
- primeira implementaçêo funcional.

---

## Módulo 8 — Frameworks modernos

**Carga:** 3 horas

Conteúdo:

- JavaScript puro;
- React;
- hooks;
- ciclo de montagem e desmontagem;
- Angular;
- injeçêo de dependência;
- formulários;
- aplicações single-page;
- mudança de rotas;
- Next.js e renderizaçêo no cliente;
- cleanup com `AbortController`;
- evitar registros duplicados.

O suporte para React e Angular ainda é descrito como experimental, por isso será ensinado como trilha complementar, mantendo JavaScript puro como base.

Referência:

- https://developer.chrome.com/docs/ai/webmcp/imperative-api

---

# Fase 3 — Construindo o agente WebMCP

## Módulo 9 — Descoberta de ferramentas

**Carga:** 3 horas

Conteúdo:

- agente integrado à página;
- agente em `iframe`;
- agente em extensêo;
- `getTools`;
- ferramentas disponíveis;
- mudanças de ferramentas;
- leitura de nome, descriçêo e esquema;
- transformaçêo para o formato da LLM.

### Laboratório

Criar um painel que mostra:

```text
Ferramentas encontradas: 5

buscar_cursos
consultar_detalhes
verificar_vagas
iniciar_inscricao
consultar_status
```

---

## Módulo 10 — Execuçêo de ferramentas

**Carga:** 3 horas

Conteúdo:

- escolha feita pelo modelo;
- localizaçêo da ferramenta;
- validaçêo dos argumentos;
- `executeTool`;
- resposta;
- tratamento de exceções;
- cancelamento;
- atualizaçêo do chat;
- atualizaçêo do site.

### Fluxo central

```text
Usuário envia mensagem
        ↓
LLM interpreta intençêo
        ↓
LLM escolhe uma ferramenta
        ↓
Agente valida risco e parâmetros
        ↓
WebMCP executa no site
        ↓
Site modifica a interface
        ↓
Site retorna resultado
        ↓
LLM explica o resultado
```

---

## Módulo 11 — Cross-origin e permissões

**Carga:** 3 horas

Conteúdo:

- same-origin;
- cross-origin;
- `iframe`;
- Permissions Policy;
- `allow="tools"`;
- `exposedTo`;
- `fromOrigins`;
- origens seguras;
- lista explícita de confiança;
- isolamento;
- agentes que controlam vários sites.

Para acessar ferramentas de um site carregado em outro domínio, o site precisa expor explicitamente as ferramentas, o `iframe` precisa permitir a capacidade e o agente precisa solicitar aquela origem.

Referência:

- https://developer.chrome.com/docs/ai/webmcp/imperative-api

### Laboratório

```text
agent.exemplo.com
        ↓
iframe
        ↓
cursos.exemplo.com
```

O site registra:

```javascript
{
  exposedTo: ["https://agent.exemplo.com"]
}
```

O agente consulta:

```javascript
document.modelContext.getTools({
  fromOrigins: ["https://cursos.exemplo.com"]
});
```

---

## Módulo 12 — Loop conversacional do agente

**Carga:** 3 horas

Conteúdo:

- adaptador de modelo;
- contexto da conversa;
- schemas como ferramentas;
- chamadas simples;
- chamadas múltiplas;
- resposta de ferramenta;
- continuaçêo do turno;
- limite de iterações;
- detecçêo de loop;
- recuperaçêo;
- estado da conversa;
- troca de modelo;
- uso de modelos locais ou remotos.

### Arquitetura sem dependência de fornecedor

```typescript
interface ModelAdapter {
  send(
    messages: Message[],
    tools: ToolDefinition[]
  ): Promise<ModelResult>;
}
```

Assim, o curso nêo fica preso a um modelo específico.

---

# Fase 4 — WebMCP Expert

## Módulo 13 — Segurança do agente e das ferramentas

**Carga:** 3 horas

Conteúdo:

- prompt injection indireta;
- tool poisoning;
- output injection;
- conteúdo nêo confiável;
- descrições falsas;
- parâmetros excessivos;
- menor privilégio;
- autorizaçêo no servidor;
- CSRF;
- XSS;
- autenticaçêo;
- sessêo;
- confirmaçêo humana;
- logs;
- trilha de auditoria;
- ações reversíveis;
- separaçêo entre preparar e confirmar.

### Padrêo obrigatório para ações críticas

Em vez de criar uma única ferramenta:

```text
comprar_produto
```

usar:

```text
preparar_compra
confirmar_compra
consultar_compra
cancelar_compra
```

O agente nunca deve executar automaticamente uma açêo irreversível somente porque a LLM escolheu aquela ferramenta.

---

## Módulo 14 — WebMCP + backend + MCP

**Carga:** 3 horas

Conteúdo:

- lógica no navegador;
- lógica no servidor;
- APIs internas;
- servidor MCP;
- ferramentas persistentes;
- operações em background;
- compartilhamento de regras de negócio;
- autenticaçêo no backend;
- WebMCP como camada contextual;
- MCP como camada de serviços.

### Arquitetura recomendada

```text
┌───────────────────────────┐
│ Usuário                   │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Agente no navegador       │
│ Chat + LLM + política     │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ WebMCP Client             │
│ getTools / executeTool    │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Site WebMCP               │
│ UI + estado + sessêo      │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Serviços de domínio       │
│ API / banco / MCP server  │
└───────────────────────────┘
```

---

## Módulo 15 — Evals e observabilidade

**Carga:** 3 horas

Conteúdo:

- testes unitários;
- testes de integraçêo;
- testes de esquema;
- seleçêo de ferramenta;
- extraçêo de argumentos;
- ordem das chamadas;
- resultados esperados;
- testes multi-turno;
- testes probabilísticos;
- repetiçêo da mesma avaliaçêo;
- taxa de sucesso;
- latência;
- tokens;
- custo;
- erros;
- relatórios;
- regressêo entre modelos.

### Conjunto mínimo de evals

```text
10 intenções positivas
10 variações de linguagem
5 pedidos ambíguos
5 parâmetros inválidos
5 sequências multi-tool
5 tentativas de prompt injection
5 ações críticas sem confirmaçêo
5 falhas de API
```

---

## Módulo 16 — Produçêo, compatibilidade e governança

**Carga:** 3 horas

Conteúdo:

- feature detection;
- origin trial;
- versêo do navegador;
- polyfill;
- fallback;
- telemetry;
- rollout gradual;
- documentaçêo;
- catálogo de ferramentas;
- versionamento de schemas;
- depreciaçêo;
- migraçêo;
- monitoramento de mudanças na especificaçêo;
- gestêo de risco.

---

# 5. Um problema importante que o curso precisa ensinar

Existe uma diferença entre o rascunho mais recente da especificaçêo e parte da implementaçêo/documentaçêo atual.

O rascunho de 26 de agosto apresenta:

```javascript
executeTool(tool, inputObject)
```

com um objeto JavaScript.

Referência:

- https://webmachinelearning.github.io/webmcp/

A documentaçêo anterior do Chrome e a demonstraçêo Page Agent ainda mostram argumentos convertidos para JSON:

```javascript
const inputArgs = JSON.stringify(args);
await document.modelContext.executeTool(tool, inputArgs);
```

Referência:

- https://developer.chrome.com/docs/ai/webmcp/imperative-api

Isso demonstra que o padrêo está evoluindo rapidamente.

## Como tratar no curso

Criar um pacote próprio:

```text
@curso-webmcp/runtime
```

Com:

```typescript
interface WebMCPRuntime {
  discoverTools(): Promise<WebMCPTool[]>;
  executeTool(
    tool: WebMCPTool,
    args: Record<string, unknown>
  ): Promise<unknown>;
}
```

Esse adaptador deverá ter um modo explicitamente configurado:

```text
chrome-origin-trial
spec-current
polyfill
```

**Nêo se deve testar os dois formatos automaticamente em ferramentas que alteram estado**, pois uma tentativa que pareça falhar pode ter realizado parcialmente uma compra, inscriçêo ou exclusêo.

Ferramentas mutáveis nêo poderêo ter retry automático sem idempotência.

---

# 6. Projeto final

# WebMCP Agent Hub

O aluno poderá escolher entre duas trilhas.

## Trilha A — Criar um sistema novo

Construir um portal de cursos, serviços, reservas ou e-commerce já preparado para agentes.

## Trilha B — Atualizar um site existente

Escolher um site real e adicionar progressivamente WebMCP, sem substituir sua interface humana.

---

## Funcionalidades obrigatórias do site

O projeto deverá expor pelo menos oito ferramentas:

```text
buscar_itens
consultar_item
consultar_preco
verificar_disponibilidade
adicionar_selecao
iniciar_operacao
confirmar_operacao
consultar_status
```

Ao menos:

- três ferramentas somente leitura;
- duas ferramentas que atualizem a interface;
- uma ferramenta declarativa;
- três ferramentas imperativas;
- uma ferramenta crítica com confirmaçêo;
- uma ferramenta que possa ser cancelada;
- uma ferramenta que retorne conteúdo nêo confiável.

---

## Funcionalidades obrigatórias do agente

O agente deverá:

1. Receber uma URL.
2. Carregar o site.
3. Descobrir suas ferramentas.
4. Mostrar ao usuário quais ferramentas foram encontradas.
5. Converter os schemas para o formato do modelo.
6. Receber uma solicitaçêo em linguagem natural.
7. Selecionar uma ferramenta.
8. Validar os argumentos.
9. Classificar o risco da açêo.
10. Solicitar confirmaçêo quando necessário.
11. Executar a ferramenta.
12. Receber a resposta.
13. Apresentar o resultado ao usuário.
14. Permitir chamadas múltiplas.
15. Impedir loops.
16. Registrar métricas e erros.

---

## Exemplo do site respondendo ao agente

```javascript
await document.modelContext.registerTool({
  name: "buscar_cursos",
  title: "Buscar cursos",
  description:
    "Busca cursos publicados por tema e nível de conhecimento.",

  inputSchema: {
    type: "object",
    properties: {
      tema: {
        type: "string",
        description: "Assunto que o aluno deseja estudar."
      },
      nivel: {
        type: "string",
        enum: ["iniciante", "intermediario", "avancado"]
      }
    },
    required: ["tema"]
  },

  annotations: {
    readOnlyHint: true,
    untrustedContentHint: false
  },

  execute: async ({ tema, nivel }, { signal }) => {
    const response = await fetch(
      `/api/cursos?tema=${encodeURIComponent(tema)}&nivel=${nivel ?? ""}`,
      { signal }
    );

    if (!response.ok) {
      throw new Error(
        "Nêo foi possível consultar os cursos. Tente novamente."
      );
    }

    const cursos = await response.json();

    atualizarListaNaInterface(cursos);

    return {
      ok: true,
      total: cursos.length,
      cursos: cursos.map(curso => ({
        id: curso.id,
        nome: curso.nome,
        nivel: curso.nivel
      }))
    };
  }
});
```

Esse código demonstra o princípio central:

```text
O agente chama a ferramenta
→ a ferramenta atualiza o site
→ o site devolve uma resposta estruturada
→ o agente continua a conversa
```

---

# 7. Estrutura do repositório final

```text
webmcp-agent-hub/
├── apps/
│   ├── site-webmcp/
│   └── agent-web/
│
├── packages/
│   ├── webmcp-runtime/
│   ├── model-adapters/
│   ├── tool-policy/
│   ├── schemas/
│   └── telemetry/
│
├── services/
│   ├── api/
│   └── mcp-server/
│
├── evals/
│   ├── tool-selection/
│   ├── argument-extraction/
│   ├── security/
│   └── end-to-end/
│
├── docs/
│   ├── architecture.md
│   ├── tool-catalog.md
│   ├── threat-model.md
│   ├── compatibility.md
│   └── deployment.md
│
└── README.md
```

---

# 8. Critérios para aprovaçêo

## Implementaçêo

- site humano continua funcionando sem agente;
- ferramentas sêo descobertas dinamicamente;
- UI é atualizada durante as chamadas;
- respostas sêo estruturadas;
- erros permitem recuperaçêo;
- cancelamento funciona;
- nêo existe duplicaçêo automática de ações críticas.

## Qualidade do agente

- 100% dos testes determinísticos aprovados;
- pelo menos 90% de escolha correta de ferramenta nas intenções principais;
- pelo menos 85% em variações de linguagem;
- nenhuma açêo crítica executada sem confirmaçêo;
- nenhuma origem nêo autorizada consegue executar ferramentas;
- agente encerra loops após o limite configurado.

## Segurança

- autenticaçêo validada no backend;
- autorizaçêo por operaçêo;
- proteçêo contra chamadas duplicadas;
- uso correto de `readOnlyHint`;
- uso correto de `untrustedContentHint`;
- logs sem dados sensíveis;
- threat model documentado.

## Produçêo

- feature detection;
- fallback;
- matriz de versões;
- documentaçêo de migraçêo;
- catálogo de ferramentas;
- evals executáveis;
- demonstraçêo completa gravada.

---

# 9. Avaliaçêo do aluno

| Componente | Peso |
|---|---:|
| Laboratórios | 25% |
| Auditoria e migraçêo de um site | 15% |
| Implementaçêo das ferramentas | 20% |
| Construçêo do agente | 20% |
| Segurança e evals | 10% |
| Apresentaçêo final | 10% |

---

# 10. Certificações intermediárias

## WebMCP Builder

Conclui até o módulo 4 e consegue criar ferramentas declarativas e imperativas.

## WebMCP Integrator

Conclui até o módulo 8 e consegue atualizar um site existente.

## WebMCP Agent Developer

Conclui até o módulo 12 e consegue criar um agente que descobre e executa ferramentas.

## WebMCP Expert

Conclui o projeto final com segurança, evals, fallback e publicaçêo.

---

# 11. Materiais que precisam ser produzidos

Para cada módulo:

- aula gravada;
- slides;
- resumo em Markdown;
- código inicial;
- código final;
- laboratório;
- desafio;
- soluçêo comentada;
- quiz;
- checklist;
- evals;
- branch correspondente no Git;
- lista de mudanças da especificaçêo.

O projeto principal deve possuir tags:

```text
module-00-foundations
module-03-declarative
module-04-imperative
module-07-migration
module-09-discovery
module-12-agent
module-13-security
module-15-evals
module-16-production
final
```

---

# 12. O que nêo deve aparecer no curso como prática recomendada

- Ensinar `navigator.modelContext` como API principal. A documentaçêo atual orienta usar `document.modelContext`; a forma anterior foi descontinuada no Chrome 150.
- Ensinar `unregisterTool()` como soluçêo atual. O ciclo de vida deve ser controlado com `AbortController` e `AbortSignal`.
- Dizer que WebMCP já funciona universalmente nos navegadores.
- Dizer que WebMCP substitui MCP.
- Permitir que a LLM ignore as regras de autorizaçêo do backend.
- Criar ferramentas genéricas como `executar_acao`.
- Misturar consulta e confirmaçêo na mesma ferramenta.
- Retornar erros crus de banco de dados ou API.
- Realizar retry automático de compras, exclusões ou inscrições.
- Confiar em conteúdo retornado por ferramentas externas.
- Criar dezenas de ferramentas sobrepostas.
- Gravar o curso sem fixar uma versêo do navegador e da especificaçêo.

Referências:

- https://developer.chrome.com/docs/ai/webmcp/imperative-api?hl=pt-br
- https://developer.chrome.com/docs/ai/webmcp/imperative-api

---

# 13. Plano de produçêo do curso

## Etapa 1 — Prova técnica

Antes de gravar qualquer aula, construir:

- um site simples;
- três ferramentas WebMCP;
- um agente em outra origem;
- descoberta com `getTools`;
- execuçêo com `executeTool`;
- resposta estruturada;
- atualizaçêo da interface;
- confirmaçêo de uma açêo mutável.

## Etapa 2 — Projeto de referência

Construir o **WebMCP Agent Hub** completo.

Ele será o projeto que evolui durante todas as aulas.

## Etapa 3 — Conteúdo básico

Produzir:

- fundamentos web;
- agentes;
- JSON Schema;
- API declarativa;
- API imperativa.

## Etapa 4 — Conteúdo avançado

Produzir:

- cross-origin;
- frameworks;
- agente;
- segurança;
- evals;
- MCP híbrido;
- produçêo.

## Etapa 5 — Turma piloto

Executar com um grupo pequeno e medir:

- tempo para configurar o navegador;
- dificuldades com JavaScript;
- taxa de conclusêo dos laboratórios;
- erros mais comuns;
- acurácia dos agentes;
- mudanças da especificaçêo;
- tempo real de conclusêo do projeto.

## Etapa 6 — Publicaçêo

Após o piloto:

- corrigir os laboratórios;
- fixar versões;
- atualizar o runtime;
- registrar demonstrações;
- publicar o projeto de referência;
- criar changelog permanente.

---

# Recomendaçêo principal

A formaçêo nêo deve começar pela gravaçêo das aulas. A primeira entrega precisa ser um **protótipo técnico vertical completo**:

```text
Usuário
→ conversa com agente
→ agente descobre ferramentas
→ agente chama WebMCP
→ site executa
→ interface muda
→ site responde
→ agente informa o resultado
```

Depois que esse fluxo estiver estável em uma versêo fixada do Chrome, ele se transforma no projeto central das 80 horas.

**Confiança:** alta na arquitetura pedagógica e no projeto final; média nos detalhes de compatibilidade futura, porque a especificaçêo e a implementaçêo ainda estêo mudando ativamente. A soluçêo é manter um runtime próprio, uma matriz de versões e um módulo permanente de atualizaçêo.
