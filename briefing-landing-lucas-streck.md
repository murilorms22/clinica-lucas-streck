# Briefing: Landing page + página /curso — Clínica Lucas Streck Fisioterapia

> Leia este documento inteiro antes de escrever qualquer código. Ele é a fonte de verdade do projeto. Onde estiver marcado **[CONFIRMAR]**, não invente: deixe um placeholder visível e centralizado em `content/site.ts`.

---

## 1. Contexto e objetivo

- **Cliente:** Clínica Lucas Streck Fisioterapia, Pelotas/RS. Fisioterapia traumato-esportiva. Slogan do Instagram: **"Da reabilitação à performance."**
- **Situação:** o cliente ainda não contratou. Esta página é uma **proposta/protótipo de venda**. Ela precisa impressionar já no primeiro scroll, mas manter cara de página enxuta e profissional, não de portfólio de efeitos.
- **Objetivo da home:** converter visitantes (pacientes e atletas da região) em **agendamentos de avaliação via WhatsApp**.
- **Objetivo da /curso:** vender ingressos do curso presencial de joelho (venda acontece no **Sympla**; a página leva o visitante até lá).
- **Público:** pessoas com dor no joelho/coluna, atletas amadores e profissionais de vários esportes, e (na /curso) estudantes de Fisioterapia e fisioterapeutas.
- **Dispositivo principal:** celular (o tráfego vem do Instagram). Projetar **mobile-first**.
- **Idioma:** pt-BR.

## 2. Regras de ouro (honestidade e escopo)

1. **Não inventar** depoimentos, números, preços, certificações, número de CREFITO, nomes de atletas, nomes de equipe ou serviços que não estejam neste briefing. Tudo que faltar vira placeholder marcado.
2. Não usar nomes, fotos ou escudos de clubes/atletas sem autorização. A parede de camisas aparece só como ambiente, sem destacar marcas.
3. Não baixar/hotlinkar imagens do Instagram. As imagens serão enviadas pelo desenvolvedor e ficam em `public/images/`. Enquanto isso, usar placeholders bonitos (gradiente escuro + textura de gramado), nunca imagens de banco aleatórias que pareçam ser da clínica.
4. Não redesenhar o logo. Criar um componente `<Logo />` que aceite um SVG; enquanto o SVG não chega, usar um wordmark provisório em texto ("LUCAS STRECK / FISIOTERAPIA").
5. Todo texto, link, telefone e dado de contato mora em **um único arquivo** `content/site.ts` (e `content/curso.ts`), para o desenvolvedor editar sem mexer em componentes.

## 3. Dados verificados do cliente

| Item | Valor |
|---|---|
| Nome | Clínica Lucas Streck Fisioterapia (Google: "Fisioterapia Lucas Streck") |
| Instagram | @clinicalucasstreck (perfil pessoal do fisio: @lucasstreck) |
| Bio do Instagram | "Fisioterapeuta · Da reabilitação à performance · Fisioterapia traumato-esportiva · Rua P. Anchieta, 4708" |
| Endereço | R. Padre Anchieta, 4708 — Centro, Pelotas/RS — CEP 96020-350 |
| Telefone / WhatsApp | (53) 98126-2587 → `5553981262587` **[CONFIRMAR que é o WhatsApp de atendimento]** |
| Horário | Fechado aos domingos; abre segunda às 09:00. Horário completo **[CONFIRMAR]** |
| Google Maps | Nota **5,0** com **19 avaliações** |
| Destaques do Instagram | Coluna, Joelho, Novidade, Inauguração, Atendimentos, Atletas |
| Equipe | Lucas + fisioterapeutas funcionários (nomes/fotos **[CONFIRMAR]**) |
| Ambiente | Piso parcialmente em **grama sintética**, ginásio com equipamentos, caixas de madeira, parede com camisas emolduradas, LEDs lineares e spots quentes |

**Avaliações reais do Google (podem ser usadas como prova social, com crédito ao nome e "via Google"; pedir OK ao cliente antes de publicar [CONFIRMAR]):**
- Rafael Gimenes: "Um dos melhores fisioterapeuta da Região. Ambiente confortável e climatizado, além do atendimento excelente do início ao final do tratamento."
- Cristiane Soares: atleta que voltou a jogar após lesões complicadas e faz manutenção semanal.
- Frederico Costa: "Trabalho excelente!"
- Frases de destaque do Google: "Baita estrutura e uma equipe excelente!" · "Profissional de alta qualidade, super indico!"

## 4. O curso (dados do Sympla)

- **Título:** Avaliação e reabilitação do joelho: do raciocínio clínico à prática
- **Link de compra:** https://www.sympla.com.br/evento/curso-avaliacao-de-joelho-na-pratica/3627561
- **Data/hora:** sábado 21/11/2026 às 09h00 até domingo 22/11/2026 às 12h00 (fuso America/Sao_Paulo, UTC-03:00)
- **Formato:** presencial, 2 dias de imersão, com momentos de prática, coffee break/networking e bônus exclusivos para presenciais
- **Local:** Rua Padre Anchieta, 4708, bloco H 302, Pelotas/RS **[CONFIRMAR se é o mesmo local da clínica]**
- **Público:** estudantes de Fisioterapia, fisioterapeutas e profissionais que queiram mais segurança na reabilitação do joelho
- **Conteúdo programático:**
  1. Avaliação clínica do joelho e construção do raciocínio clínico
  2. Principais testes ortopédicos e sua interpretação
  3. Lesões ligamentares: LCA, LCP, LCM e LCL
  4. Lesões meniscais e disfunções femoropatelares
  5. Tendinopatias patelar e do quadríceps
  6. Osteoartrose do joelho e outras disfunções frequentes
  7. Estratégias práticas para alívio dos sintomas e progressão da reabilitação
  8. Aplicação em situações clínicas reais
- **Pagamento:** parcelamento em até 12x no Sympla. **Valor do ingresso e número de vagas: [CONFIRMAR]** (não exibir valor inventado; usar "Ver valores no Sympla").
- **Política:** cancelamento até 7 dias após a compra, desde que solicitado até 48h antes do início.
- **Programação por horário e bônus específicos:** **[CONFIRMAR]**.
- **Imagem de capa oficial do evento:** https://images.sympla.com.br/6ad911f926e5b-lg.jpg (usar só como referência de arte; o desenvolvedor pode mandar o arquivo original).

## 5. Identidade visual (observada nos prints do Instagram e das fotos da clínica)

**Sensação geral:** premium esportivo, escuro, "vestiário de elite + clínica moderna". Fundo preto/carvão, tipografia grande em caixa-alta, contraste alto, toques quentes de dourado e a presença do verde do gramado.

- **Logo:** monograma "LS" em traço contínuo vazado, off-white sobre preto. Lockup na fachada: "LUCAS STRECK" (sans espaçada) acima, monograma no centro, "FISIOTERAPIA" abaixo.
- **Superfícies:** painéis de metal corrugado preto (usar como textura sutil de listras verticais), madeira clara nas caixas do ginásio, grama sintética no piso.
- **Posts do Instagram:** fundos pretos, títulos enormes em sans condensada bold branca, destaque em dourado/âmbar, uma serifada elegante para ênfase (ex.: "É TODO DIA."), e um post com verde-menta neon. Reels com ele falando para a câmera, legenda grande ("Tu tem dor lombar?").

**Tokens sugeridos (validar com conta-gotas no logo e nos posts antes de fechar):**

```css
--bg:         #0A0A0B;  /* fundo principal */
--surface:    #131315;  /* cards */
--surface-2:  #1B1B1E;  /* cards elevados */
--ink:        #F3EFE7;  /* texto principal (off-white quente, como o logo) */
--muted:      #A09C94;  /* texto secundário */
--gold:       #D9A441;  /* destaque, CTA primário (texto preto sobre ele) */
--turf:       #2F8F46;  /* verde gramado: texturas, ícones, atmosfera */
--turf-glow:  #5BE584;  /* usar com muita parcimônia (hover/brilho) */
--wood:       #B98B5E;  /* detalhes quentes pontuais */
```

Regra de uso: **dourado = ação e ênfase**; **verde = atmosfera e textura**; evitar usar os dois como cor de fundo grande ao mesmo tempo. Fundo da página sempre escuro.

**Tipografia (via `next/font`):**
- Display: sans condensada bold em caixa-alta (ex.: Barlow Condensed 700/800 ou Anton)
- Ênfase: serifada itálica elegante (ex.: Instrument Serif), usada em **uma palavra por título**
- Texto: Inter ou Geist

**Tom de voz:** direto, próximo, de quem entende de esporte. O cliente fala "tu" nos Reels; usar **"tu"** nos textos **[CONFIRMAR com o cliente se quer na página]**. Frases curtas. Sem jargão excessivo na home; na /curso, linguagem técnica é bem-vinda.

## 6. Stack recomendada

Priorizar o que é moderno **e** leve. Verificar as versões estáveis mais recentes antes de instalar e fixá-las.

- **Next.js (App Router) + TypeScript** — rotas `/` e `/curso`, SEO, `next/image`, `next/font`
- **Tailwind CSS** (versão atual) com os tokens acima em variáveis CSS
- **Motion (ex-Framer Motion)** — reveals, hover, transições de entrada, textos que "sobem" palavra por palavra
- **GSAP + ScrollTrigger** — usar **só** na seção "Jornada do atleta" (linha desenhada ao rolar / pin). Se ficar pesado ou complexo, cair para Motion `useScroll`
- **Lenis** — scroll suave (desativar com `prefers-reduced-motion`)
- **Radix UI / shadcn** — Accordion (FAQ e conteúdo do curso), Sheet (menu mobile)
- **lucide-react** — ícones
- Deploy: Vercel

**Fora do escopo (para manter simples):** 3D pesado (Three.js/R3F), carrosséis com autoplay infinito, parallax exagerado, partículas, vídeo em tela cheia com som, CMS.

## 7. Efeitos visuais (curadoria; use com critério, um "momento wow" por seção, no máximo)

1. **Hero:** título gigante com reveal por palavra; fundo escuro com **listras de gramado cortado** (repeating-linear-gradient verde bem sutil) + ruído/grain leve; opcional vídeo curto mudo em loop da clínica (`poster` + lazy) se o desenvolvedor enviar.
2. **Marquee** horizontal de especialidades logo abaixo do hero (texto grande, baixo contraste, em loop lento).
3. **Spotlight no cursor** nos cards escuros (desktop); no mobile, só estado de toque.
4. **Botão magnético** no CTA principal (desktop).
5. **Linha do campo:** na "Jornada do atleta", um SVG de linha (estilo marcação de quadra/pista) é desenhado conforme a rolagem, conectando as etapas.
6. **Contador regressivo** para o curso (21/11/2026 09:00, UTC-03:00) com flip/slide suave dos números.
7. **Bento grid** na seção da estrutura com hover de zoom leve nas fotos.
8. Texturas de **metal corrugado** (listras verticais finas) como detalhe de fundo em 1 ou 2 seções.

**Acessibilidade e performance (obrigatórios):** respeitar `prefers-reduced-motion` (animações viram fade simples), contraste AA, foco visível, `alt` real em imagens, imagens em AVIF/WebP via `next/image`, vídeos lazy, meta de Lighthouse ≥ 90 em Performance/Acessibilidade/SEO no mobile.

## 8. Arquitetura

```
app/
  layout.tsx            # fontes, metadata base, Lenis provider, navbar, footer, botão flutuante WhatsApp
  page.tsx              # home (seções abaixo)
  curso/page.tsx        # página do curso
  opengraph-image.tsx   # OG padrão (opcional)
components/
  ui/                   # primitives (button, accordion, sheet)
  layout/               # navbar, footer, floating-whatsapp
  sections/             # hero, marquee, metodo, especialidades, jornada, estrutura, curso-destaque, curso-conteudo, equipe, prova-social, faq, contato
  curso/                # componentes específicos da /curso
  effects/              # marquee, countdown, spotlight-card, magnetic-button, split-text, turf-bg
content/
  site.ts               # contatos, textos, equipe, depoimentos, FAQ
  curso.ts              # dados do curso
public/images/          # assets enviados pelo desenvolvedor
```

**Navbar:** logo à esquerda; links âncora (Método, Especialidades, Estrutura, Equipe, Contato); **botão "Curso de Joelho" destacado (outline dourado)** levando para `/curso`; botão "Agendar" (dourado sólido) levando ao WhatsApp. Sticky, com fundo que escurece/blur após rolar. Menu mobile em Sheet.

**Botão flutuante de WhatsApp** em todas as páginas, mensagem pré-preenchida: `https://wa.me/5553981262587?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o.`

## 9. Home `/` — seções (11, das quais 2 são do curso)

> Textos abaixo são **rascunho de copy** para guiar tom e estrutura; o desenvolvedor pode ajustar em `content/site.ts`.

1. **Hero** — H1: "Da reabilitação à performance." Sub: "Fisioterapia traumato-esportiva em Pelotas. Do joelho à coluna, tu volta pro esporte e pra vida com segurança." CTAs: [Agendar avaliação] (WhatsApp) e [Conhecer o curso] (→ `/curso`). Selo: "5,0 no Google · 19 avaliações".
2. **Faixa de especialidades (marquee)** — Joelho · Coluna · Lesões esportivas · Retorno ao esporte · Exercício terapêutico. (Só usar o que o cliente confirmar; **[CONFIRMAR]** lista final de serviços, por exemplo ombro, pilates e outros.)
3. **Método** — "Não é só tratar a dor. É devolver performance." Explicar a lógica reabilitação → performance em 3 pilares curtos (avaliação, tratamento, preparação para o esporte). Mostrar o monograma LS grande e discreto ao fundo.
4. **Especialidades** — cards: Joelho, Coluna, Lesões esportivas, Retorno ao esporte. Cada um com 1 frase e CTA "Falar sobre isso" (WhatsApp com mensagem específica). Ideia: dores comuns como gancho ("É desgaste?" / "Tu tem dor lombar?"), alinhado aos conteúdos que ele já publica.
5. **Jornada do atleta** — 4 etapas (Avaliação → Diagnóstico funcional → Reabilitação → Retorno ao esporte) com a **linha do campo** desenhando ao rolar (GSAP ScrollTrigger). Mobile: versão vertical simples.
6. **Estrutura da clínica** — bento grid com fotos: gramado sintético, ginásio, equipamentos, parede de camisas, fachada. Título: "Uma clínica que parece um centro de treinamento." Placeholders até chegarem as fotos.
7. **Curso — destaque (seção 1 de 2)** — faixa chamativa com fundo diferenciado: "Curso presencial · 21 e 22 de novembro". Título do curso, **contador regressivo**, local, botão "Quero participar" (→ Sympla) e "Ver detalhes" (→ `/curso`). Se a data já passou, trocar automaticamente por "Edição encerrada · entre na lista de espera" **[CONFIRMAR destino]**.
8. **Curso — o que tu vai aprender (seção 2 de 2)** — grid/bento com os 8 tópicos do conteúdo programático, + chips "Prática", "Coffee break", "Bônus presenciais", "Para estudantes e fisioterapeutas". CTA para `/curso`.
9. **Equipe** — Lucas em destaque + fisioterapeutas (nome, função, foto). **[CONFIRMAR]** nomes, fotos e registros profissionais. Sem dados, mostrar cards-placeholder claramente marcados.
10. **Prova social** — nota 5,0 do Google com as 3 avaliações reais listadas na seção 3 (com "via Google Maps"), em cards com leve rotação/hover. Se o cliente enviar prints ou vídeos de pacientes/atletas, abrir espaço para eles.
11. **FAQ + Contato/CTA final** — Accordion com 5 a 6 perguntas (ex.: "Preciso de encaminhamento médico?" **[CONFIRMAR resposta]**, "Atende convênio?" **[CONFIRMAR]**, "Quanto dura a sessão?" **[CONFIRMAR]**, "Atende atletas de qualquer esporte?"). Bloco final: endereço, horários, botão WhatsApp, link do Instagram, **mapa** (embed do Google Maps) e CTA grande "Agendar minha avaliação".
12. **Footer** — logo, endereço, Instagram, WhatsApp, "© ano Lucas Streck Fisioterapia". (Não é contado entre as seções.)

## 10. Página `/curso`

Mesma identidade, foco em venda. Navbar igual, com o botão "Curso de Joelho" ativo.

1. **Hero do curso** — "Avaliação e reabilitação do joelho: do raciocínio clínico à prática". Data (21 e 22/11/2026), local, formato presencial, **contador regressivo**, CTA principal **"Garantir minha vaga"** (→ Sympla, abre em nova aba) e selo "Parcele em até 12x".
2. **Para quem é** — 3 cards: estudantes de Fisioterapia, fisioterapeutas, profissionais que querem mais segurança na reabilitação do joelho.
3. **O que tu vai aprender** — os 8 tópicos do conteúdo (Accordion ou grid numerado com ícones).
4. **Mais que teoria** — prática, interação, coffee break/networking, bônus exclusivos para presenciais. Visual com fotos do ginásio/gramado.
5. **Sobre o instrutor** — Lucas Streck: apresentação, formação e experiência **[CONFIRMAR todos os dados]**; foto.
6. **Informações práticas** — tabela/cartão: datas e horários, local com mapa, formas de pagamento (12x), política de cancelamento (7 dias após a compra, solicitada até 48h antes do início), **valor [CONFIRMAR]**.
7. **FAQ do curso** — ex.: certificado? material? levar o quê? **[CONFIRMAR respostas]**.
8. **CTA final** — barra fixa no mobile com "Garantir minha vaga" (→ Sympla) enquanto o evento não passou; contador reaparece.

Observações: todos os botões de compra apontam para o link do Sympla da seção 4. Pós-evento: estado "encerrado" controlado por data em `content/curso.ts`.

## 11. SEO e dados estruturados

- `metadata` por página (title, description, OpenGraph, Twitter). Home: "Fisioterapia traumato-esportiva em Pelotas | Lucas Streck". /curso: "Curso de Avaliação e Reabilitação do Joelho | Pelotas".
- JSON-LD: tipo `Physiotherapy` (LocalBusiness) na home com endereço, telefone, redes e nota agregada **somente se o cliente autorizar usar a nota do Google**; tipo `Event` na /curso (nome, datas com fuso, local, URL de ingressos, status).
- `sitemap.xml`, `robots.txt`, favicon com o monograma (quando o SVG chegar).

## 12. Assets que o desenvolvedor vai enviar (e como nomear)

- `logo.svg` (vetor do monograma e do lockup) — essencial
- `hero-clinica.jpg/mp4` — foto ou vídeo curto (≤ 8 s, mudo) da clínica/gramado
- `estrutura-01…06.jpg` — gramado, ginásio, equipamentos, parede de camisas, fachada
- `lucas-retrato.jpg` e `equipe-*.jpg`
- `curso-capa.jpg` (arte oficial do evento)
- Opcional: fotos/vídeos de atletas **com autorização**

Enquanto isso, usar placeholders consistentes com a identidade (gradiente escuro + textura de listras/gramado) com um selo discreto "foto a enviar" apenas em modo desenvolvimento.

## 13. Ordem de trabalho sugerida

1. Ler o briefing e **listar em poucas linhas o plano e as dúvidas** (só as que bloqueiam; o resto vira **[CONFIRMAR]**).
2. Scaffold: Next.js + TS + Tailwind, tokens, fontes, layout (navbar, footer, WhatsApp flutuante, Lenis), `content/`.
3. Home: hero → marquee → método → especialidades → jornada → estrutura → curso (2 seções) → equipe → prova social → FAQ/contato.
4. Página `/curso`.
5. Polimento: responsividade, `prefers-reduced-motion`, performance, SEO/JSON-LD, README com instruções de edição de conteúdo e deploy na Vercel.

## 14. Critérios de aceite

- [ ] Home com **≥ 8 seções**, sendo **2 dedicadas ao curso**, e botão do curso na navbar levando a `/curso`
- [ ] `/curso` completa, com CTAs levando ao Sympla e contador funcionando
- [ ] Identidade fiel: fundo escuro, dourado/verde conforme tokens, tipografia condensada + serifada de ênfase
- [ ] Nenhum dado inventado; pendências marcadas e centralizadas em `content/`
- [ ] Mobile-first impecável (testar 360px, 390px, 768px, 1280px+)
- [ ] `prefers-reduced-motion` respeitado; sem erro de console; `npm run build` e lint passando
- [ ] Lighthouse mobile ≥ 90 (Performance, Acessibilidade, SEO)
- [ ] README explicando como trocar textos, imagens e a data do curso

## 15. Pendências para o desenvolvedor resolver com o cliente

WhatsApp de atendimento · horários completos · lista final de serviços · convênios/encaminhamento · valor e vagas do curso · programação por horário e bônus · local exato do curso · dados/foto/registro do Lucas e da equipe · autorização para usar avaliações do Google e imagens de atletas · arquivo SVG do logo · se quer o "tu" no texto do site.
