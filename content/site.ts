export interface NavItem {
  label: string;
  href: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface SpecialtyCard {
  id: string;
  tag: string;
  hook: string;
  title: string;
  description: string;
  ctaLabel: string;
  whatsappMessage: string;
  iconName: "activity" | "spine" | "flame" | "trophy";
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  tag: string;
}

export interface StructureItem {
  id: string;
  title: string;
  caption: string;
  imagePath: string;
  spanClass: string;
  accent: "turf" | "gold" | "wood" | "neutral";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tag: string;
  /** Preencher CREFITO quando confirmado; enquanto vazio, não exibe badge na tela */
  registration?: string;
  bio: string;
  imagePath: string;
  featured?: boolean;
}

export interface GoogleReview {
  id: string;
  author: string;
  source: string;
  quote: string;
  isLiteralQuote: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// [CONFIRMAR com o cliente se (53) 98126-2587 é o WhatsApp oficial de atendimento]
export const WHATSAPP_NUMBER = "5553981262587";

export function buildWhatsAppUrl(message: string, phone = WHATSAPP_NUMBER): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const siteContent = {
  meta: {
    siteUrl: "https://lucasstreckfisio.com.br", // [CONFIRMAR domínio final]
    title: "Fisioterapia traumato-esportiva em Pelotas | Lucas Streck",
    description:
      "Da reabilitação à performance. Fisioterapia traumato-esportiva em Pelotas/RS para dores no joelho, coluna, lesões esportivas e retorno seguro ao esporte.",
    locale: "pt_BR",
  },

  brand: {
    name: "Clínica Lucas Streck Fisioterapia",
    googleName: "Fisioterapia Lucas Streck",
    shortUpper: "LUCAS STRECK",
    shortLower: "FISIOTERAPIA",
    monogram: "LS",
    slogan: "Da reabilitação à performance.",
    /** Quando o cliente enviar public/images/logo.svg, preencher "/images/logo.svg" */
    logoSvgPath: null as string | null,
  },

  contact: {
    phoneDisplay: "(53) 98126-2587",
    whatsappNumber: WHATSAPP_NUMBER,
    defaultWhatsappMessage: "Olá! Vim pelo site e quero agendar uma avaliação.",
    instagramClinicHandle: "@clinicalucasstreck",
    instagramClinicUrl: "https://www.instagram.com/clinicalucasstreck/",
    instagramPersonalHandle: "@lucasstreck",
    instagramPersonalUrl: "https://www.instagram.com/lucasstreck/",
    address: {
      street: "R. Padre Anchieta, 4708",
      neighborhood: "Centro",
      city: "Pelotas",
      state: "RS",
      postalCode: "96020-350",
      country: "BR",
      fullDisplay: "R. Padre Anchieta, 4708 — Centro, Pelotas/RS — CEP 96020-350",
      mapsQueryUrl:
        "https://www.google.com/maps/search/?api=1&query=Rua+Padre+Anchieta+4708+Centro+Pelotas+RS+96020-350",
      mapsEmbedUrl:
        "https://maps.google.com/maps?q=Rua%20Padre%20Anchieta%2C%204708%20-%20Centro%2C%20Pelotas%20-%20RS%2C%2096020-350&t=&z=16&ie=UTF8&iwloc=&output=embed",
    },
    hours: {
      // [CONFIRMAR horário completo de segunda a sábado]
      summary: "Segunda a sábado (início às 09:00) · Fechado aos domingos",
      note: "Consulte disponibilidade de horários pelo WhatsApp",
    },
  },

  googleRating: {
    score: "5,0",
    scoreNumeric: 5.0,
    count: 19,
    badgeLabel: "5,0 no Google · 19 avaliações",
    /**
     * Manter `false` até o cliente autorizar formalmente o aggregateRating no JSON-LD.
     */
    authorizedByClient: false,
  },

  navigation: {
    links: [
      { label: "Método", href: "/#metodo" },
      { label: "Especialidades", href: "/#especialidades" },
      { label: "Estrutura", href: "/#estrutura" },
      { label: "Equipe", href: "/#equipe" },
      { label: "Contato", href: "/#contato" },
    ] satisfies NavItem[],
    courseCta: {
      label: "Curso de Joelho",
      href: "/curso",
    },
    primaryCta: {
      label: "Agendar",
      whatsappMessage: "Olá! Vim pelo site e quero agendar uma avaliação.",
    },
  },

  hero: {
    eyebrow: "Fisioterapia Traumato-Esportiva · Pelotas/RS",
    headlinePrefix: "Da reabilitação à",
    headlineEmphasis: "performance.",
    subtitle:
      "Fisioterapia traumato-esportiva em Pelotas. Do joelho à coluna, tu volta pro esporte e pra vida com segurança.",
    primaryCtaLabel: "Agendar avaliação",
    primaryCtaMessage: "Olá! Vim pelo site e quero agendar uma avaliação.",
    secondaryCtaLabel: "Conhecer o curso",
    secondaryCtaHref: "/curso",
    mediaImagePath: "/images/hero-ls.jpg",
    mediaVideoPath: null as string | null,
    mediaCaption:
      "Lucas Streck acompanhando o jogador de futebol profissional Erick Farias no gramado sintético da clínica",
    floatingBadge: {
      name: "Erick Farias",
      role: "Jogador de futebol profissional",
    },
  },

  marquee: {
    // [CONFIRMAR lista final de serviços com o cliente]
    items: [
      "Joelho",
      "Coluna",
      "Lesões esportivas",
      "Retorno ao esporte",
      "Exercício terapêutico",
    ],
  },

  metodo: {
    eyebrow: "O Método",
    headlinePrefix: "Não é só tratar a dor. É devolver",
    headlineEmphasis: "performance.",
    lead:
      "Sair da crise é apenas o primeiro passo. Na clínica, o tratamento une raciocínio clínico e progressão ativa no ginásio para que tu não fique preso apenas à maca — e volte a se movimentar com confiança.",
    pillars: [
      {
        number: "01",
        title: "Avaliação precisa",
        description:
          "Escuta clínica, testes específicos e análise do movimento para entender a origem real da tua dor ou limitação.",
      },
      {
        number: "02",
        title: "Tratamento ativo",
        description:
          "Controle de sintomas aliado a exercício terapêutico progressivo, respeitando o tempo biológico e a tua rotina.",
      },
      {
        number: "03",
        title: "Preparação pro esporte",
        description:
          "Transição estruturada da maca para o gramado sintético: força, estabilidade, gesto esportivo e retorno seguro.",
      },
    ] satisfies PillarItem[],
  },

  especialidades: {
    eyebrow: "Especialidades",
    headlinePrefix: "Onde a dor trava o teu",
    headlineEmphasis: "jogo.",
    subtitle:
      "Atendimento direcionado para quem quer resolver a dor pela raiz — seja para treinar em alto nível, jogar no fim de semana ou viver sem limitação.",
    cards: [
      {
        id: "joelho",
        tag: "Joelho",
        hook: "\"É desgaste? Vou precisar parar de jogar?\"",
        title: "Reabilitação de Joelho",
        description:
          "Lesões ligamentares (LCA, LCP, colaterais), menisco, dor anterior, tendinopatias e pós-operatório com progressão segura.",
        ctaLabel: "Falar sobre isso",
        whatsappMessage:
          "Olá! Vim pelo site e quero agendar uma avaliação para dor/lesão no joelho.",
        iconName: "activity",
      },
      {
        id: "coluna",
        tag: "Coluna",
        hook: "\"Tu tem dor lombar que volta toda semana?\"",
        title: "Coluna e Dor Lombar",
        description:
          "Abordagem ativa para dor lombar, cervical, irradiações e rigidez — recuperando mobilidade e tolerância à carga no dia a dia.",
        ctaLabel: "Falar sobre isso",
        whatsappMessage:
          "Olá! Vim pelo site e quero agendar uma avaliação para dor na coluna.",
        iconName: "spine",
      },
      {
        id: "lesoes-esportivas",
        tag: "Esporte",
        hook: "\"Sentiu fisgada, entorse ou sobrecarga no treino?\"",
        title: "Lesões Esportivas",
        description:
          "Tratamento de lesões musculares, articulares e tendíneas em atletas amadores e profissionais de diferentes modalidades.",
        ctaLabel: "Falar sobre isso",
        whatsappMessage:
          "Olá! Vim pelo site e quero agendar uma avaliação para uma lesão esportiva.",
        iconName: "flame",
      },
      {
        id: "retorno-ao-esporte",
        tag: "Performance",
        hook: "\"Já não dói parado, mas falta confiança em campo?\"",
        title: "Retorno ao Esporte",
        description:
          "Critérios funcionais, ganho de força, mudança de direção e impacto no gramado antes de tu voltar a competir pra valer.",
        ctaLabel: "Falar sobre isso",
        whatsappMessage:
          "Olá! Vim pelo site e quero saber mais sobre acompanhamento para retorno ao esporte.",
        iconName: "trophy",
      },
    ] satisfies SpecialtyCard[],
  },

  jornada: {
    eyebrow: "Jornada do Paciente e Atleta",
    headlinePrefix: "Do primeiro exame à linha de",
    headlineEmphasis: "chegada.",
    subtitle:
      "Cada fase tem critério claro para avançar — sem achismo e sem pular etapa.",
    steps: [
      {
        step: "01",
        tag: "Ponto de partida",
        title: "Avaliação individual",
        description:
          "Entendemos teu histórico, tua rotina de treino ou trabalho e testamos na prática o que está gerando dor ou compensação.",
      },
      {
        step: "02",
        tag: "Clareza clínica",
        title: "Diagnóstico funcional",
        description:
          "Tu sai sabendo o que está acontecendo, o que pode ou não fazer agora e qual é o plano objetivo de recuperação.",
      },
      {
        step: "03",
        tag: "Evolução guiada",
        title: "Reabilitação progressiva",
        description:
          "Controle de dor combinado com ganho gradual de mobilidade, força e controle motor no ginásio da clínica.",
      },
      {
        step: "04",
        tag: "De volta à ativa",
        title: "Retorno ao esporte",
        description:
          "Simulação dos gestos da tua modalidade no gramado sintético para que tu retorne com confiança e performance.",
      },
    ] satisfies JourneyStep[],
  },

  estrutura: {
    eyebrow: "Estrutura",
    headlinePrefix: "Uma clínica que parece um centro de",
    headlineEmphasis: "treinamento.",
    subtitle:
      "Ambiente climatizado no Centro de Pelotas, projetado para integrar atendimento clínico, força e gesto esportivo real.",
    items: [
      {
        id: "gramado",
        title: "Piso em grama sintética",
        caption: "Área dedicada para corrida, mudança de direção, saltos e retorno ao esporte.",
        imagePath: "/images/estrutura-01.jpg",
        spanClass: "md:col-span-7 md:row-span-2",
        accent: "turf",
      },
      {
        id: "ginasio",
        title: "Ginásio integrado",
        caption: "Iluminação em LEDs lineares, spots quentes e espaço amplo para exercício terapêutico.",
        imagePath: "/images/estrutura-02.jpg",
        spanClass: "md:col-span-5",
        accent: "gold",
      },
      {
        id: "equipamentos",
        title: "Equipamentos e caixas pliométricas",
        caption: "Caixas de madeira e recursos para progressão de força, estabilidade e impacto.",
        imagePath: "/images/estrutura-03.jpg",
        spanClass: "md:col-span-5",
        accent: "wood",
      },
      {
        id: "ambiente-esportivo",
        title: "Atmosfera do esporte",
        caption: "Parede com camisas emolduradas que respira cultura esportiva do início ao fim da sessão.",
        imagePath: "/images/estrutura-04.jpg",
        spanClass: "md:col-span-6",
        accent: "neutral",
      },
      {
        id: "fachada",
        title: "Localização central em Pelotas",
        caption: "Rua Padre Anchieta, 4708 — acesso fácil e ambiente confortável e climatizado.",
        imagePath: "/images/estrutura-05.jpg",
        spanClass: "md:col-span-6",
        accent: "gold",
      },
    ] satisfies StructureItem[],
  },

  equipe: {
    eyebrow: "Equipe",
    headlinePrefix: "Quem conduz a tua",
    headlineEmphasis: "evolução.",
    subtitle:
      "Atendimento próximo, olhar técnico e acompanhamento do início ao fim do tratamento.",
    // [CONFIRMAR registros CREFITO e especializações adicionais quando enviados]
    members: [
      {
        id: "lucas-streck",
        name: "Lucas Streck",
        role: "Fisioterapeuta · Fisioterapia Traumato-Esportiva",
        tag: "Fundador",
        registration: "",
        bio: "Fisioterapeuta à frente da clínica em Pelotas/RS, com atuação dedicada à reabilitação traumato-esportiva, joelho, coluna e retorno seguro à performance.",
        imagePath: "/images/lucas-streck.png",
        featured: true,
      },
      {
        id: "lucas-santos",
        name: "Lucas Santos",
        role: "Fisioterapeuta · Fisioterapia Traumato-Esportiva",
        tag: "Equipe",
        registration: "",
        bio: "Fisioterapeuta da equipe Clínica Lucas Streck, atuando na reabilitação funcional, exercício terapêutico e acompanhamento próximo em cada etapa da evolução.",
        imagePath: "/images/lucas-santos.png",
        featured: false,
      },
      {
        id: "udson-barros",
        name: "Udson Barros",
        role: "Fisioterapeuta · Fisioterapia Traumato-Esportiva",
        tag: "Equipe",
        registration: "",
        bio: "Fisioterapeuta da equipe Clínica Lucas Streck, com foco na recuperação de lesões ortopédicas e esportivas e transição segura para a rotina e o esporte.",
        imagePath: "/images/udson-barros.png",
        featured: false,
      },
    ] satisfies TeamMember[],
  },

  provaSocial: {
    eyebrow: "Prova Social",
    headlinePrefix: "Quem já passou pelo nosso",
    headlineEmphasis: "gramado.",
    subtitle:
      "Avaliações reais registradas por pacientes e atletas no perfil da clínica no Google.",
    highlights: [
      "Baita estrutura e uma equipe excelente!",
      "Profissional de alta qualidade, super indico!",
    ],
    reviews: [
      {
        id: "rafael-gimenes",
        author: "Rafael Gimenes",
        source: "via Google Maps",
        quote:
          "Um dos melhores fisioterapeuta da Região. Ambiente confortável e climatizado, além do atendimento excelente do início ao final do tratamento.",
        isLiteralQuote: true,
      },
      {
        id: "cristiane-soares",
        author: "Cristiane Soares",
        source: "via Google Maps",
        quote:
          "Atleta que voltou a jogar após lesões complicadas e segue em acompanhamento de manutenção semanal na clínica.",
        isLiteralQuote: false,
      },
      {
        id: "frederico-costa",
        author: "Frederico Costa",
        source: "via Google Maps",
        quote: "Trabalho excelente!",
        isLiteralQuote: true,
      },
    ] satisfies GoogleReview[],
  },

  faq: {
    eyebrow: "Dúvidas Frequentes",
    headlinePrefix: "Antes de agendar a tua",
    headlineEmphasis: "avaliação.",
    items: [
      {
        question: "Como funciona o primeiro atendimento?",
        answer:
          "No primeiro encontro fazemos uma avaliação individualizada: conversamos sobre teu histórico, analisamos teus movimentos e definimos o plano de tratamento mais adequado para o teu objetivo.",
      },
      {
        question: "Preciso de encaminhamento ou exames médicos para agendar?",
        answer:
          "Tu pode chamar diretamente pelo WhatsApp para agendar tua avaliação fisioterapêutica. Caso já tenha exames de imagem ou encaminhamento médico recente, vale trazê-los no dia para complementar a análise.",
      },
      {
        question: "A clínica atende convênios ou particular?",
        answer:
          "Os atendimentos são individualizados para garantir acompanhamento próximo do início ao fim da sessão. Fala com nossa equipe no WhatsApp para consultar valores, formas de pagamento e condições.",
      },
      {
        question: "Quanto tempo dura cada sessão?",
        answer:
          "A duração é organizada de acordo com a tua etapa de tratamento — integrando avaliação, recursos clínicos e progressão ativa no ginásio e gramado. Nossa equipe informa todos os detalhes no agendamento.",
      },
      {
        question: "Vocês atendem apenas atletas profissionais?",
        answer:
          "Não. Atendemos tanto atletas profissionais e amadores de diferentes esportes quanto pessoas que sentem dor no joelho, na coluna ou querem recuperar qualidade de movimento no dia a dia.",
      },
      {
        question: "Como faço para agendar um horário?",
        answer:
          "Basta tocar em qualquer botão de agendamento aqui da página para falar diretamente com a clínica pelo WhatsApp e escolher o melhor horário.",
      },
    ] satisfies FaqItem[],
  },

  contatoFinal: {
    eyebrow: "Contato e Localização",
    headlinePrefix: "Pronto pra voltar ao teu",
    headlineEmphasis: "melhor?",
    subtitle:
      "Chama no WhatsApp para tirar dúvidas ou agendar tua avaliação presencial em Pelotas.",
    ctaLabel: "Agendar minha avaliação",
    ctaMessage: "Olá! Vim pelo site e quero agendar minha avaliação.",
  },
} as const;
