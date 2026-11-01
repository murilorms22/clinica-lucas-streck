# Pasta de imagens oficiais (`public/images/`)

## Imagens já configuradas e ativas

- `hero-ls.jpg` — foto principal da Hero (Lucas Streck acompanhando o jogador profissional Erick Farias no gramado sintético)
- `lucas-streck.png` — retrato oficial de Lucas Streck (seção Equipe da Home e Ministrante em `/curso`)
- `lucas-santos.png` — retrato oficial do fisioterapeuta Lucas Santos (seção Equipe da Home)
- `udson-barros.png` — retrato oficial do fisioterapeuta Udson Barros (seção Equipe da Home)

## Imagens opcionais para adicionar quando disponíveis

- `logo.svg` — vetor do monograma e/ou lockup oficial (após adicionar, defina `logoSvgPath: "/images/logo.svg"` em `content/site.ts`)
- `estrutura-01.jpg` a `estrutura-05.jpg` — fotos dedicadas da estrutura (gramado sintético, ginásio, equipamentos, parede de camisas, fachada)
- `curso-capa.jpg` — arte oficial de capa do Curso de Avaliação e Reabilitação do Joelho

Assim que qualquer arquivo adicional acima é colocado nesta pasta, o componente `<ClinicMedia />` detecta sua presença automaticamente e passa a renderizá-lo com `next/image` (AVIF/WebP).
