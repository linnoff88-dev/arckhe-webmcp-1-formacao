# FormaÃ§Ã£o WebMCP â€” do Zero ao Expert

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


RepositÃ³rio central da formaÃ§Ã£o. Apresenta a visÃ£o completa das quatro fases, os
prÃ©-requisitos, a progressÃ£o pedagÃ³gica e os critÃ©rios de certificaÃ§Ã£o.

O diagnÃ³stico inicial Ã© realizado pelo **WebMCP Readiness**, aplicativo independente
que analisa um site e responde se ele estÃ¡ preparado para ser descoberto e operado
por agentes.

## As quatro fases

1. **WebMCP Builder** â€” fundamentos, ambiente e ferramentas declarativas e imperativas.
2. **WebMCP Integrator** â€” desenho de ferramentas, estado, migraÃ§Ã£o e frameworks.
3. **WebMCP Agent Developer** â€” descoberta, execuÃ§Ã£o e loop conversacional.
4. **WebMCP Expert** â€” seguranÃ§a, backend/MCP, evals, produÃ§Ã£o e governanÃ§a.

## Aplicativo WebMCP Readiness

O diagnÃ³stico deve receber uma URL, abrir o site em um navegador controlado e gerar
um relatÃ³rio com:

- compatibilidade do navegador e disponibilidade de `document.modelContext`;
- contexto seguro, origem e polÃ­ticas de permissÃ£o;
- ferramentas declarativas e imperativas encontradas;
- validade dos nomes, descriÃ§Ãµes e schemas;
- classificaÃ§Ã£o entre leitura, mutaÃ§Ã£o e aÃ§Ã£o crÃ­tica;
- confirmaÃ§Ãµes humanas e controles contra duplicidade;
- respostas estruturadas, cancelamento e tratamento de erros;
- sincronizaÃ§Ã£o entre execuÃ§Ã£o da ferramenta e atualizaÃ§Ã£o da interface;
- riscos de seguranÃ§a e conteÃºdo nÃ£o confiÃ¡vel;
- fallback, observabilidade e prontidÃ£o para produÃ§Ã£o.

O resultado terÃ¡ nota, evidÃªncias e recomendaÃ§Ãµes, sem executar automaticamente
aÃ§Ãµes mutÃ¡veis ou irreversÃ­veis.

Use o aplicativo em [webmcp.inema.pro](https://webmcp.inema.pro/) ou consulte o
[repositÃ³rio pÃºblico](https://github.com/inematds/webmcp-readiness). Veja tambÃ©m
[docs/arquitetura-dos-repos.md](docs/arquitetura-dos-repos.md).

## ProgressÃ£o entre repositÃ³rios

A passagem entre fases segue um manifesto comum e preserva o estado da camada de
aprendizagem INEMA. A arquitetura completa estÃ¡ em
[docs/progressao-automatica.md](docs/progressao-automatica.md).

## Executar o Repo 1

O conteÃºdo Ã© estÃ¡tico. Abra `index.html` ou publique a raiz com qualquer servidor
HTTP. Para validar a estrutura, use `npm run check`.

## Entregas implementadas

- landing responsiva da formaÃ§Ã£o;
- mapa das quatro fases e seis repositÃ³rios;
- progresso, jornada e preferÃªncias de leitura INEMA v2;
- integraÃ§Ã£o com o WebMCP Readiness independente;
- diagnÃ³stico, relatÃ³rio e exportaÃ§Ã£o JSON em `webmcp.inema.pro`;
- testes estruturais com `npm run check`.

<!-- inema-backlink:v1 -->
## Mais no INEMA.CLUB

- [Ficha completa deste curso](https://www.inema.club/cursos/246-formacao-webmcp-sites-e-agentes-do-zero-ao-expert/)
- [Guia: como aprender inteligÃªncia artificial](https://www.inema.club/aprender-inteligencia-artificial/)
- [Todos os cursos](https://www.inema.club/cursos/)
<!-- /inema-backlink:v1 -->

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>