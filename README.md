# Clínica Lucas Streck Fisioterapia — Landing Page + `/curso`

Protótipo/proposta comercial da landing page principal (`/`) e da página de vendas do curso presencial de joelho (`/curso`) para a **Clínica Lucas Streck Fisioterapia** (Pelotas/RS).

## Stack

- **Next.js 16 (App Router) + React 19 + TypeScript**
- **Tailwind CSS v4** (tokens de identidade em variáveis CSS em `app/globals.css`)
- **Motion (`motion/react`)** (reveals, split-text por palavra no Hero, botão magnético, contador regressivo)
- **GSAP + ScrollTrigger** (usado exclusivamente na linha de campo desenhada ao rolar na seção *Jornada do Atleta*)
- **Lenis** (scroll suave, desativado automaticamente com `prefers-reduced-motion: reduce`)
- **Radix UI** (`@radix-ui/react-accordion` e `@radix-ui/react-dialog` para FAQ, módulos do curso e Sheet mobile)
- **Lucide React** (ícones)

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` (Home) e `http://localhost:3000/curso` (Curso de Joelho).

Para validar tipagem, lint e build de produção:

```bash
npm run lint
npm run build
```

---

## Como editar textos, contatos, pendências `[CONFIRMAR]` e datas

Todo o conteúdo textual, telefone/WhatsApp, links, equipe, avaliações e FAQs está centralizado em **apenas dois arquivos**, sem necessidade de editar componentes React:

1. **`content/site.ts`** — dados da clínica, WhatsApp (`WHATSAPP_NUMBER`), endereço, links do Instagram, copy das seções da Home, equipe, avaliações do Google e FAQ da clínica.
   - **Autorização do Google Reviews:** quando o cliente autorizar o uso das avaliações e da nota 5,0, altere `googleRating.authorizedByClient` para `true`. Isso oculta o selo `[CONFIRMAR]` na seção de prova social e habilita automaticamente o `aggregateRating` no JSON-LD (`Physiotherapy`) da Home.
   - **Logo oficial em SVG:** ao receber `logo.svg`, salve em `public/images/logo.svg` e altere `brand.logoSvgPath` para `"/images/logo.svg"`. Para o favicon, salve o monograma em `app/icon.svg` (e remova `app/icon.tsx`).

2. **`content/curso.ts`** — título, link do Sympla, datas ISO com fuso (`America/Sao_Paulo`, UTC-03:00), local, público-alvo, os 8 módulos do conteúdo programático, dados do ministrante e FAQ do curso.
   - **Alterar data do curso / estado pós-evento:** edite `startDateIso` (ex.: `"2026-11-21T09:00:00-03:00"`) e `endDateIso`. Enquanto a data atual for anterior a `startDateIso`, o contador regressivo e os botões para o Sympla ficam ativos (incluindo a barra fixa no mobile em `/curso`). Assim que `startDateIso` passa, a Home e `/curso` trocam automaticamente para o estado *"Edição encerrada · entre na lista de espera"*.

---

## Imagens em `public/images/`

Já integradas e ativas no projeto:
- `public/images/hero-ls.jpg` — Hero principal (com bullet flutuante de Erick Farias) e destaque prático em `/curso`
- `public/images/lucas-streck.png` — Lucas Streck (Equipe + Ministrante em `/curso`)
- `public/images/lucas-santos.png` — Lucas Santos (Equipe)
- `public/images/udson-barros.png` — Udson Barros (Equipe)

Fotos opcionais adicionais (basta salvar em `public/images/` com os nomes abaixo para ativação automática via `next/image` AVIF/WebP):
- `logo.svg` (e preencher `brand.logoSvgPath: "/images/logo.svg"` em `content/site.ts`)
- `estrutura-01.jpg` a `estrutura-05.jpg`
- `curso-capa.jpg`

---

## Checklist de pendências com o cliente (`[CONFIRMAR]`)

Busque por `[CONFIRMAR` em `content/site.ts` e `content/curso.ts` antes de publicar:

- [ ] Confirmar se `(53) 98126-2587` é o WhatsApp oficial de atendimento
- [ ] Horário completo de funcionamento (segunda a sábado)
- [ ] Domínio final do site (`siteContent.meta.siteUrl`)
- [ ] Lista final de especialidades/serviços
- [ ] Respostas oficiais do FAQ da clínica (encaminhamento médico, convênios/reembolso, duração da sessão)
- [ ] Nomes, fotos, mini-bios e números de CREFITO de Lucas Streck e dos fisioterapeutas da equipe
- [ ] Autorização formal para publicar nota e avaliações do Google Maps (e texto literal da avaliação de Cristiane Soares)
- [ ] Preferência pelo uso de `"tu"` nos textos do site
- [ ] Curso: valor do ingresso/lotes, número de vagas, cronograma detalhado de horários, bônus presenciais, confirmação do Bloco H 302, certificado/carga horária e destino oficial da lista de espera pós-evento
- [ ] Arquivo `logo.svg` oficial

---

## Deploy na Vercel

1. Suba o repositório no GitHub/GitLab/Bitbucket.
2. Importe o projeto na [Vercel](https://vercel.com/new) (preset **Next.js** detectado automaticamente).
3. Atualize `siteContent.meta.siteUrl` em `content/site.ts` com a URL final de produção para que `opengraph-image`, `sitemap.xml`, `robots.txt` e JSON-LD apontem para o domínio correto.

