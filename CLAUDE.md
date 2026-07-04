# landing-page

Site pessoal profissional (Rodrigo Paiva — Cientista de Dados / Engenheiro de IA),
publicado via GitHub Pages. Seções: hero, experiência (timeline), projetos,
conteúdos/blog técnico, tecnologias, sobre (com formação e certificações) e contato.

## Stack

Um único arquivo `index.html`, sem pastas de CSS/JS separadas, sem build step,
sem framework, sem dependências externas — tudo (estilos e script) fica embutido
no próprio `index.html` via `<style>`/`<script>`. Isso evita qualquer problema de
caminho relativo quebrado no GitHub Pages.

## Estrutura

```
index.html         # página inteira: HTML + CSS + JS embutidos
assets/             # imagens/ícones (vazio por enquanto)
.claude/skills/     # skills específicas deste projeto (Claude Code)
```

## Convenções

- Manter tudo em um único arquivo estático para deploy direto no GitHub Pages
  (branch `main`, pasta raiz) — não reintroduzir pastas `css/`/`js/` separadas
  a menos que necessário.
- Conteúdo em português, com toggle PT/EN embutido via `data-i18n`.
- Textos de resumo (projeto AR, artigo de Indústria 5.0) são rascunhos —
  revisar com o usuário para maior precisão.

## Deploy

GitHub Pages: Settings → Pages → Source = branch `main` / pasta `/ (root)`.
Repositório remoto: https://github.com/rpaiva-dev/landing-page
