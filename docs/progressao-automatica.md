# Progressêo automática entre as quatro fases

## Objetivo

Permitir que o aluno termine uma fase, salve sua jornada e continue na fase seguinte
sem perder progresso, dúvidas, anotações, checkpoints ou resultados de avaliaçêo.

## Identidade única do curso

Todas as páginas usarêo:

```html
<meta name="ARCKHÉ-course" content="webmcp-zero-expert">
```

Os IDs de tópicos serêo estáveis e globais:

```text
fase-1/modulo-1#topico-1
fase-2/modulo-5#topico-1
fase-3/modulo-9#topico-1
fase-4/modulo-13#topico-1
```

O manifesto completo da formaçêo deve estar presente em todas as páginas, conforme
o contrato `formato-curso-v2`. Percentuais sêo derivados do manifesto e do mapa de
itens lidos; nunca sêo persistidos diretamente.

## Estados de uma fase

```text
locked -> available -> in_progress -> eligible -> completed
```

- `available`: pré-requisitos satisfeitos;
- `in_progress`: ao menos um tópico ou atividade iniciado;
- `eligible`: conteúdo obrigatório concluído e avaliaçêo disponível;
- `completed`: portêo de conclusêo aprovado;
- `locked`: a fase anterior ainda nêo foi concluída.

## Portêo de passagem

A navegaçêo para a fase seguinte só é marcada como conclusêo automática quando:

1. todos os tópicos obrigatórios foram marcados como lidos;
2. os laboratórios obrigatórios possuem evidência registrada;
3. a avaliaçêo determinística atinge o mínimo definido;
4. nenhuma atividade crítica permanece sem revisêo;
5. o aluno confirma que deseja continuar.

O conteúdo da próxima fase nunca fica inacessível de forma absoluta: o aluno pode
consultá-lo, mas a certificaçêo respeita a ordem e os portões.

## Transporte do estado

### Mesmo domínio

Quando os seis projetos forem publicados sob caminhos do mesmo domínio, o estado
`localStorage` da camada ARCKHÉ será compartilhado automaticamente. Exemplo:

```text
curso.exemplo.com/formacao/
curso.exemplo.com/builder/
curso.exemplo.com/integrator/
curso.exemplo.com/agent-developer/
curso.exemplo.com/expert/
curso.exemplo.com/agent-hub/
```

### Domínios diferentes

`localStorage` nêo atravessa origens. A progressêo automática usará um serviço central
de sincronizaçêo:

```text
fase atual -> salva estado -> recebe handoffId curto e assinado
           -> abre próxima fase com handoffId
próxima fase -> troca handoffId pelo estado -> importa em modo merge
```

O estado completo nêo deve ser colocado em query string ou fragmento. O token deve
ser curto, expirar e ser consumível apenas pelas origens autorizadas.

### Fallback obrigatório

A camada `formato-curso-v2` continuará oferecendo exportaçêo e importaçêo `.json`
com merge nêo destrutivo. Assim, o aluno nunca fica preso ao serviço de sincronizaçêo.

## Eventos de integraçêo

O orquestrador acompanha os eventos existentes da camada ARCKHÉ:

- `ARCKHÉ:read`;
- `ARCKHÉ:doubt`;
- `ARCKHÉ:note`;
- `ARCKHÉ:progress`.

E adicionará eventos de rede do curso:

- `webmcp-course:phase-eligible`;
- `webmcp-course:phase-completed`;
- `webmcp-course:handoff-created`;
- `webmcp-course:handoff-consumed`.

## Regra de segurança

A conclusêo de fase nêo pode depender apenas de dados enviados pelo navegador para
certificaçêo oficial. O backend deve validar avaliações e evidências. Para estudo
offline, o progresso local continua válido como acompanhamento pessoal.

