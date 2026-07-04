# landing-page

Site pessoal profissional (Rodrigo Paiva — Cientista de Dados / Engenheiro de IA),
publicado via GitHub Pages. Seções: hero, experiência (timeline), projetos,
conteúdos/blog técnico, tecnologias, certificações, sobre e contato.

## Stack

HTML + CSS + JavaScript puro. Sem build step, sem framework, sem dependências —
o objetivo é que `index.html` funcione tanto localmente (abrindo o arquivo ou
com um servidor estático simples) quanto direto no GitHub Pages.

## Estrutura

```
index.html        # página única (hero, sobre, skills, projetos, contato)
css/style.css      # estilos (usa variáveis CSS para cores/tema)
js/main.js         # menu mobile, scroll suave, ano do footer
assets/            # imagens/ícones (vazio por enquanto)
.claude/skills/    # skills específicas deste projeto (Claude Code)
```

## Convenções

- Manter tudo estático (sem build tools) para deploy direto no GitHub Pages
  (branch `main`, pasta raiz).
- Conteúdo em português.
- Paleta e conteúdo (nome, cargo, projetos, links) são placeholders —
  devem ser substituídos com as informações reais do usuário.

## Deploy

GitHub Pages: Settings → Pages → Source = branch `main` / pasta `/ (root)`.
