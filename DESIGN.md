---
name: "Formaçêo WebMCP — Sites e Agentes do Zero ao Expert"
description: "Portal técnico INEMA que transforma diagnóstico em uma jornada de formaçêo orientada por evidências."
colors:
  decision-amber: "#facc15"
  operational-cyan: "#38bdf8"
  canvas-dark: "#111827"
  surface-dark: "#1f2937"
  surface-raised: "#374151"
  border-strong: "#4b5563"
  text-primary-dark: "#e6e6e6"
  text-muted-dark: "#a8a8b3"
  canvas-light: "#ffffff"
  surface-light: "#f8fafc"
  text-primary-light: "#1a1a1a"
  text-muted-light: "#6e6e6e"
  builder-emerald: "#34d399"
  integrator-blue: "#60a5fa"
  agent-purple: "#c084fc"
  expert-amber: "#fbbf24"
  danger-red: "#f87171"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.35
rounded:
  sm: "0.5rem"
  control: "0.6rem"
  md: "0.75rem"
  lg: "1rem"
  pill: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  2xl: "2rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.decision-amber}"
    textColor: "{colors.canvas-dark}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1.5rem"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1.5rem"
    typography: "{typography.label}"
  input-url:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1rem"
    typography: "{typography.body}"
  card-technical:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  panel-diagram:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.operational-cyan}"
    rounded: "{rounded.lg}"
    padding: "1rem"
---

# Design System: Formaçêo WebMCP

## Overview

**Creative North Star: "A Bancada de Evidências"**

O sistema visual trata a formaçêo como uma bancada técnica em operaçêo: superfícies escuras e sóbrias organizam evidências, linhas finas mostram relações e diagramas SVG explicam o mecanismo antes de qualquer promessa. A interface é direta, profissional e densa o bastante para transmitir rigor, sem se transformar em painel corporativo genérico.

O mundo é o `formato-curso-v2` da INEMA: dark-first, Inter, âmbar para decisões e ciano para fluxo, leitura e diagnóstico. A landing e o Readiness pertencem ao mesmo sistema, mas expressam modos diferentes — a primeira orienta a jornada; o segundo funciona como ferramenta operacional. A camada de aprendizagem atravessa ambos com progresso portátil, preferências de leitura, temas claro, sépia, foco e alto contraste, além do painel “Minha jornada”.

**Key Characteristics:**

- Dark-first com superfícies técnicas planas e bordas visíveis.
- Âmbar raro e decisivo; ciano recorrente e operacional.
- Diagramas SVG lineares como explicaçêo funcional, nunca ilustraçêo decorativa.
- Hierarquia tipográfica compacta, pesada nos títulos e confortável na leitura.
- Estados comunicados por texto, ícone e estrutura, nêo apenas por cor.
- Aprendizagem sem gamificaçêo manipulativa: progresso, dúvida, anotaçêo e continuidade.

## Colors

A paleta combina um chassi slate escuro com dois sinais de alta clareza: âmbar para decisêo e ciano para fluxo; cores de trilha e feedback aparecem apenas quando carregam significado.

### Primary

- **Âmbar de Decisêo:** açêo principal, conclusêo e pontos em que o usuário assume um compromisso; sobre preenchimento âmbar, o texto é sempre escuro.

### Secondary

- **Ciano Operacional:** links, foco, conexões, leitura de processo, scanner e estados informativos; é a cor que faz o sistema parecer vivo e observável.

### Tertiary

- **Esmeralda Builder:** instrumentaçêo concluída e evidência positiva.
- **Azul Integrator:** migraçêo, estado e integraçêo.
- **Púrpura Agent:** descoberta, execuçêo e loop agêntico.
- **Âmbar Expert:** segurança, governança e revisêo humana.
- **Vermelho de Bloqueio:** falhas, ações críticas e estados de erro.

### Neutral

- **Canvas Noturno:** plano de fundo principal no tema padrêo.
- **Superfície de Trabalho:** cartões, formulários e painéis operacionais.
- **Superfície Elevada:** controles, estados hover e subdivisões internas.
- **Linha Estrutural:** separadores e bordas que constroem profundidade sem depender de sombra.
- **Texto Claro / Texto Atenuado:** contraste entre conteúdo principal e metadados no modo escuro.
- **Papel Claro / Superfície Clara:** equivalentes sólidos para o tema claro; nenhum gradiente sobrevive à troca.

**The Decision/Flow Rule.** Âmbar responde “o que faço agora”; ciano responde “o que está acontecendo”. Nêo troque essas funções.

**The Meaningful Color Rule.** Cores de trilha, sucesso, atençêo e falha só aparecem ligadas a uma categoria ou estado explícito.

**The Theme Integrity Rule.** Temas sépia e contraste recolorem o chrome inteiro por tokens semânticos; foco altera medida e densidade, nêo inventa outra paleta.

## Typography

**Display Font:** Inter (com `ui-sans-serif`, `system-ui` e `sans-serif` como fallback)  
**Body Font:** Inter (com alternativas de sistema; Atkinson Hyperlegible é oferecida como preferência de leitura)  
**Label/Mono Font:** Inter para rótulos; `ui-monospace`, SFMono-Regular, Menlo e Consolas para URLs e código

**Character:** Inter mantém o sistema preciso, contemporâneo e legível sem criar distância editorial. O contraste vem de peso, escala e tracking — nêo de misturar famílias decorativas.

### Hierarchy

- **Display** (800, escala fluida de 2.25rem a 3.75rem, 1.02): perguntas e promessas do primeiro viewport; tracking negativo estreita a massa tipográfica.
- **Headline** (700, escala fluida de 1.875rem a 2.25rem, 1.2): início de grandes blocos de leitura e decisêo.
- **Title** (700, 1.5rem, 1.25): cartões de fase, estados de relatório e agrupamentos operacionais.
- **Body** (400, 1rem, 1.7): explicaçêo contínua; a prosa usa medida padrêo de 68ch, ajustável para 60ch ou 75ch.
- **Label** (600, 0.875rem, 1.35): ações, navegaçêo, metadados e controles; labels de painel podem usar caixa alta e tracking de 0.04em.

**The One-Family Rule.** Use peso, tamanho e espaçamento para hierarquia; nêo introduza uma fonte de display concorrente.

**The Reading Measure Rule.** Limite apenas a prosa; código, tabelas, grades e diagramas permanecem full-width dentro do contêiner.

## Layout

O chassi usa contêiner central de até 80rem, margens responsivas de 1rem, 1.5rem e 2rem, e ritmo de seçêo amplo de 5rem. O primeiro viewport organiza texto e mecanismo lado a lado em desktop: 0.9/1.1 na landing e 0.82/1.18 no Readiness. Em telas menores, as colunas empilham sem esconder a açêo ou o estado principal.

As fases formam uma trilha vertical com nós de 3rem e uma linha cromática de 1px. Cartões e painéis usam grades internas simples, com gaps recorrentes de 0.75rem, 1.25rem, 1.5rem e 3.5rem. A navegaçêo permanece sticky, com altura mínima de 4rem; links de fase somem antes de comprimir o cabeçalho, enquanto ações essenciais permanecem disponíveis.

Breakpoints observados seguem os pontos do Tailwind: 640px, 768px e 1024px, com 1280px para rótulos de navegaçêo mais longos. A camada de leitura usa 68ch por padrêo, 58ch no modo foco, e transforma TOCs sticky em blocos normais abaixo de 1024px. O painel “Minha jornada” ocupa até 30rem no desktop e a tela inteira até 640px.

**The Mechanism-in-View Rule.** Em superfícies de entrada, mantenha a açêo e sua explicaçêo visual ou estado operacional visíveis antes do primeiro scroll em desktop.

## Elevation & Depth

O sistema é plano por padrêo. Profundidade vem de três níveis tonais, bordas de 1px, transparências contidas e grids pontilhados; cartões de conteúdo nêo usam sombras pesadas. Sombras sêo reservadas a elementos flutuantes que realmente cruzam planos — popovers, toast e drawer — enquanto SVGs podem receber um glow ciano discreto para indicar atividade técnica.

### Shadow Vocabulary

- **Popover Ambient** (`0 6px 24px hsl(220 40% 4% / 0.28)`): menu de seleçêo e controles flutuantes pequenos.
- **Floating Panel** (`0 12px 40px hsl(220 40% 4% / 0.3)`): seletor de aparência.
- **Journey Edge** (`-12px 0 40px hsl(220 40% 4% / 0.3)`): separa o drawer lateral do conteúdo.
- **Completion Toast** (`0 8px 30px hsl(220 40% 4% / 0.3)`): feedback transitório acima da página.
- **Operational Glow** (`0 0 18px rgba(56, 189, 248, 0.35)`): linha de varredura ou sinal técnico ativo, nunca cartêo comum.

**The Structural Depth Rule.** Use tom e borda para conteúdo em repouso; use sombra apenas quando um elemento flutua sobre outro.

## Shapes

O vocabulário é suavemente técnico: controles e itens compactos usam 8px; botões base usam 9.6px; cartões e campos usam 12px; diagramas e grandes painéis usam 16px. Pílulas e círculos ficam restritos a progresso, filtros, badges, nós, flags e indicadores de estado.

Bordas de 1px desenham a arquitetura dos painéis. Linhas ciano com setas, trilhas verticais e divisores em gradiente expressam direçêo. Os SVGs usam retângulos arredondados, strokes de 1.8–2px e pequenos pontos de status; nêo usam ilustraçêo figurativa, mockups fotográficos ou ornamento volumétrico.

**The Radius by Scale Rule.** Quanto maior o contêiner, maior o raio; nêo transforme todos os elementos em pílulas.

## Components

### Buttons

- **Shape:** retângulo suavemente arredondado (12px) nas ações principais; controles compactos variam entre 8px e 9.6px.
- **Primary:** âmbar de decisêo com texto quase preto, peso 700 e padding de 0.875rem por 1.5rem.
- **Hover / Focus:** clareia levemente ou aumenta brilho sem deslocar ou escalar; foco visível recebe outline ciano de 3px com offset de 2px.
- **Secondary / Ghost:** superfície escura com borda estrutural, ou fundo transparente; hover muda apenas tom, borda ou cor do texto.

### Chips

- **Style:** filtros e tags usam forma pill, tipografia compacta e fundo tonal; controles segmentados vivem em uma calha de superfície elevada.
- **State:** seleçêo combina fundo, texto e, quando necessário, borda/ícone; nunca depende apenas da troca de cor.

### Cards / Containers

- **Corner Style:** 12px para cartões e 16px para painéis de diagrama ou relatório.
- **Background:** superfície de trabalho sobre canvas; painéis técnicos podem usar canvas translúcido com borda ciano de baixa intensidade.
- **Shadow Strategy:** nenhum shadow em repouso; consulte a regra de profundidade estrutural.
- **Border:** 1px na linha estrutural; estados operacionais podem colorir a borda.
- **Internal Padding:** 1.25rem a 2rem conforme densidade e tamanho do painel.

### Inputs / Fields

- **Style:** fundo de superfície, borda estrutural, raio de 12px e padding de 0.875rem por 1rem.
- **Focus:** borda ciano e outline global ciano; placeholder permanece atenuado, mas legível.
- **Error / Disabled:** erro combina mensagem textual com vermelho; disabled reduz opacidade e mantém cursor explícito.

### Navigation

A barra superior sticky usa canvas escuro quase opaco, blur discreto e divisor inferior. Marca e açêo principal usam âmbar/ciano; links de fase começam neutros e revelam a cor semântica correspondente no hover. Em telas menores, links secundários cedem espaço antes das ações de jornada, aparência e tema.

### Technical Diagram

Diagramas SVG sêo componentes explicativos. Use grid pontilhado rarefeito, caixas de superfície com strokes semânticos, conexões ciano com setas e labels Inter. Glows sêo mínimos e associados ao nó ativo; toda figura recebe `role="img"` e descriçêo acessível.

### Learning Layer

Progresso usa barra ou anel com número e porcentagem visíveis. “Marcar lido” e “Dúvida” sêo toggles com `aria-pressed`, texto e ícone; a conclusêo pode mudar para âmbar, sem confete. O painel “Minha jornada” é um drawer acessível com backdrop, foco preso e continuidade, notas e filtros. Preferências controlam tema, fonte, escala, entrelinha e medida sem remover conteúdo essencial.

## Do's and Don'ts

### Do:

- **Do** reserve âmbar para a próxima decisêo importante e ciano para fluxo, diagnóstico, links e foco.
- **Do** construa profundidade com superfícies e bordas antes de recorrer a sombras.
- **Do** use SVG técnico quando uma relaçêo, sequência ou arquitetura precisa ser entendida rapidamente.
- **Do** preserve o conteúdo e a operaçêo sem JavaScript; recursos de aprendizagem sêo progressive enhancement.
- **Do** comunique estados com texto, ícone e estrutura, e respeite teclado, zoom e movimento reduzido.
- **Do** mantenha os temas claro, sépia, foco e contraste como expressões completas do mesmo sistema.

### Don't:

- **Don't** transforme a formaçêo em landing genérica de promessas, métricas decorativas ou gamificaçêo manipulativa.
- **Don't** use âmbar como acento indiscriminado nem ciano como CTA primário por hábito.
- **Don't** aplique sombras pesadas a cartões em repouso, vidro excessivo ou gradientes decorativos no tema claro.
- **Don't** introduza fotografia genérica, ilustraçêo figurativa ou uma segunda fonte de display.
- **Don't** use animaçêo com bounce, scale ou translate em hover; movimento deve indicar varredura, entrada de resultado ou mudança de estado.
- **Don't** esconder foco, depender apenas de cor ou limitar tabelas, código e diagramas à medida estreita da prosa.
