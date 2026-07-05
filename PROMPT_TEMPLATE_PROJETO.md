# Prompt padrão — landing page de projeto (GitHub Pages)

Copie o bloco abaixo e cole no Claude Code dentro do repositório do projeto
(preenchendo os campos entre colchetes). Ele recria o mesmo estilo visual e a
mesma arquitetura técnica usada em rpaiva-dev/landing-page.

---

Quero criar uma landing page para este projeto, publicada via GitHub Pages,
seguindo exatamente o mesmo padrão técnico e visual do meu portfólio pessoal
(rpaiva-dev/landing-page). Siga estas diretrizes:

## Stack e arquitetura
- Um único arquivo `index.html` na raiz do repositório, sem pastas `css/`/`js/`
  separadas, sem build step, sem framework, sem dependências externas (exceto
  fonte do Google Fonts via `<link>`).
- Todo CSS embutido em uma tag `<style>` no `<head>`; todo JS embutido em uma
  tag `<script>` antes do fechamento do `<body>`.
- Fonte: "Manrope" (400/500/600/700/800) via Google Fonts.
- Pasta `assets/` para imagens/ícones, se necessário.
- Isso evita qualquer problema de caminho relativo quebrado no GitHub Pages
  (Settings → Pages → branch `main` / pasta raiz).

## Design system (variáveis CSS em `:root`)
```css
--bg: #ffffff;
--bg-soft: #f5f5f7;
--text: #1d1d1f;
--text-soft: #6e6e73;
--line: #d2d2d7;
--accent: #0071e3;        /* trocar pela cor de destaque do projeto, se fizer sentido */
--accent-hover: #005bb5;
--dark: #1d1d1f;
--radius: 14px;
--max-width: 1000px;
--transition: 0.2s ease;
```
Estilo geral: clean, estilo "Apple/SaaS minimalista", bastante espaço em
branco, cantos arredondados (`--radius`), sombras suaves só no hover,
tipografia com `letter-spacing` levemente negativo nos títulos grandes.

## Estrutura de seções (nesta ordem)
1. **Header** fixo (`position: sticky`) com blur de fundo, nav central e um
   botão CTA destacado à direita (ex.: "Contato" ou "Ver repositório").
2. **Hero** (`#inicio`): título grande (`clamp(2.5rem, 6vw, 4rem)`), subtítulo,
   texto curto de introdução, dois botões de ação (`btn-primary` e
   `btn-outline`).
3. **Seções de conteúdo** específicas do projeto — adaptar conforme o caso,
   por exemplo:
   - Sobre o projeto / problema que resolve
   - Funcionalidades / features (grid de cards, mesmo padrão de
     `.project-card` ou `.tech-item`)
   - Stack tecnológica (grid `.tech-grid` com ícones)
   - Como usar / instalação (bloco de código ou passos numerados)
   - Screenshots ou demo (se aplicável)
4. **Seção de contato/links** (`section-dark`, fundo escuro) com links para o
   repositório GitHub, documentação, autor, etc.
5. **Footer** simples com copyright.

Alternar fundo entre seções usando as classes `.section`, `.section-alt`
(fundo `--bg-soft`) e `.section-dark` (fundo `--dark`, texto branco) para dar
ritmo visual, como no portfólio original.

## Componentes reutilizáveis a implementar
- `.btn` / `.btn-primary` / `.btn-outline` — botões pill com hover
  (`translateY(-1px)`).
- `.project-card` / `.tech-item` / `.cert-badge` — cards com borda 1px
  `--line`, `--radius`, hover levantando (`translateY(-2px/-3px)`) e mudando
  cor da borda.
- `.tag-list` — lista de "chips" (tecnologias, tags) em pill com fundo
  `--bg-soft`.
- Classe `.reveal` + `.reveal.in-view` com `IntersectionObserver` no JS para
  fade-in + slide-up ao rolar a página (mesma animação do portfólio).
- Menu mobile: nav-links colapsados com botão hambúrguer (`.nav-toggle`),
  exibidos em `@media (max-width: 640px)`.

## Internacionalização (opcional, mas recomendado)
Se o projeto fizer sentido em dois idiomas, usar o mesmo padrão do
portfólio: atributo `data-i18n="chave.subchave"` em cada elemento de texto,
mais um objeto JS de traduções (`{ pt: {...}, en: {...} }`) e um botão de
toggle PT/EN no header (`.lang-toggle`) que troca `textContent`/`innerHTML`
via JS e persiste a escolha em `localStorage`.

## Conteúdo
- Adaptar todas as seções ao contexto específico deste projeto: **[nome do
  projeto]**, **[descrição curta em 1-2 frases]**, **[stack usada]**,
  **[link do repositório]**, **[demo ao vivo, se houver]**.
- Título da aba (`<title>`) e meta description específicos do projeto.
- Idioma padrão do conteúdo: **[pt-BR / en]**.

## Deploy
GitHub Pages: Settings → Pages → Source = branch `main` / pasta `/ (root)`.
Repositório: **[preencher URL do repo]**.

## Entregável
Gerar/atualizar um único `index.html` completo e funcional, pronto para
commit e push direto na branch `main`.
