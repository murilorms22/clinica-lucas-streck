export interface CourseTopic {
  number: string;
  title: string;
  summary: string;
}

export interface CourseAudienceCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  iconName: "graduation" | "stethoscope" | "shield";
}

export interface CourseDifferential {
  id: string;
  title: string;
  description: string;
  iconName: "dumbbell" | "users" | "coffee" | "gift";
}

export interface CourseFaqItem {
  question: string;
  answer: string;
}

export const cursoContent = {
  meta: {
    title: "Curso de Avaliação e Reabilitação do Joelho | Pelotas",
    description:
      "Imersão presencial de 2 dias em Pelotas/RS com Lucas Streck (21 e 22/11/2026). Avaliação clínica, testes ortopédicos, LCA, menisco, tendinopatias e prática clínica real.",
  },

  title: "Avaliação e reabilitação do joelho: do raciocínio clínico à prática",
  shortBadge: "Curso presencial · 21 e 22 de novembro",
  symplaUrl:
    "https://www.sympla.com.br/evento/curso-avaliacao-de-joelho-na-pratica/3627561",

  /** Datas com fuso oficial America/Sao_Paulo (UTC-03:00) — controlam contador e estado pós-evento */
  startDateIso: "2026-11-21T09:00:00-03:00",
  endDateIso: "2026-11-22T12:00:00-03:00",
  dateDisplay: "21 e 22 de novembro de 2026",
  scheduleDisplay: "Sábado (21/11) a partir das 09h00 · Domingo (22/11) até 12h00",
  timezone: "America/Sao_Paulo",

  format: {
    badge: "100% Presencial · 2 dias de imersão",
    summary:
      "Dois dias intensivos unindo raciocínio clínico estruturado, momentos práticos, coffee break com networking e bônus exclusivos para participantes presenciais.",
    chips: [
      "Prática clínica",
      "Coffee break & networking",
      "Bônus presenciais",
      "Para estudantes e fisioterapeutas",
    ],
  },

  location: {
    venueLabel: "Pelotas/RS",
    // [CONFIRMAR se o bloco H 302 é no mesmo espaço da clínica ou auditório/sala no mesmo endereço]
    addressLine: "Rua Padre Anchieta, 4708 — Bloco H 302 — Pelotas/RS",
    mapsQueryUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Padre+Anchieta+4708+Pelotas+RS",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua%20Padre%20Anchieta%2C%204708%20-%20Pelotas%20-%20RS&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },

  pricing: {
    // [CONFIRMAR valor do ingresso, lotes e vagas caso queira exibir fora do Sympla]
    installmentBadge: "Parcele em até 12x no Sympla",
    priceLabel: "Ver valores no Sympla",
    cancellationPolicy:
      "Cancelamento disponível em até 7 dias após a compra, desde que solicitado até 48 horas antes do início do evento (conforme política na plataforma Sympla).",
  },

  ctas: {
    buyLabel: "Garantir minha vaga",
    homeBuyLabel: "Quero participar",
    homeDetailsLabel: "Ver detalhes do curso",
    endedBadge: "Edição encerrada · entre na lista de espera",
    endedCtaLabel: "Entrar na lista de espera",
    waitlistWhatsappMessage:
      "Olá! Vi o Curso de Avaliação e Reabilitação do Joelho no site e quero entrar na lista de espera da próxima edição.",
  },

  media: {
    coverImagePath: "/images/curso-hero.png",
    coverAlt: "Capa do curso Avaliação e reabilitação do joelho: do raciocínio clínico à prática",
  },

  audience: {
    eyebrow: "Para quem é",
    headlinePrefix: "Pensado para quem quer",
    headlineEmphasis: "segurança",
    headlineSuffix: "na prática clínica.",
    cards: [
      {
        id: "estudantes",
        tag: "Graduação",
        title: "Estudantes de Fisioterapia",
        description:
          "Que querem ir além da teoria de sala de aula e desenvolver raciocínio clínico estruturado para avaliar e tratar o joelho com clareza.",
        iconName: "graduation",
      },
      {
        id: "fisioterapeutas",
        tag: "Clínica & Esporte",
        title: "Fisioterapeutas",
        description:
          "Que atendem ortopedia, traumatologia ou esporte e buscam refinar testes ortopédicos, interpretação clínica e critérios de progressão.",
        iconName: "stethoscope",
      },
      {
        id: "seguranca-clinica",
        tag: "Tomada de decisão",
        title: "Profissionais em busca de mais segurança",
        description:
          "Para quem deseja conduzir lesões ligamentares, meniscais, tendinopatias e osteoartrose sabendo o porquê de cada conduta.",
        iconName: "shield",
      },
    ] satisfies CourseAudienceCard[],
  },

  topicsSection: {
    eyebrow: "Conteúdo Programático",
    headlinePrefix: "O que tu vai",
    headlineEmphasis: "aprender.",
    subtitle:
      "Oito módulos conectando avaliação, interpretação dos achados e progressão prática da reabilitação do joelho.",
    topics: [
      {
        number: "01",
        title: "Avaliação clínica do joelho e construção do raciocínio clínico",
        summary:
          "Anamnese direcionada, coleta de dados relevantes, hipóteses diagnósticas funcionais e organização da tomada de decisão.",
      },
      {
        number: "02",
        title: "Principais testes ortopédicos e sua interpretação",
        summary:
          "Execução técnica na prática e como correlacionar os achados dos testes com a queixa real do paciente.",
      },
      {
        number: "03",
        title: "Lesões ligamentares: LCA, LCP, LCM e LCL",
        summary:
          "Particularidades biomecânicas, manejo conservador e pós-operatório e critérios seguros para avançar cada etapa.",
      },
      {
        number: "04",
        title: "Lesões meniscais e disfunções femoropatelares",
        summary:
          "Diferenciação clínica, controle de sobrecarga articular e estratégias de fortalecimento e reeducação funcional.",
      },
      {
        number: "05",
        title: "Tendinopatias patelar e do quadríceps",
        summary:
          "Manejo da dor tendínea, ajuste de volume/intensidade e progressão de carga aplicada à realidade clínica e esportiva.",
      },
      {
        number: "06",
        title: "Osteoartrose do joelho e outras disfunções frequentes",
        summary:
          "Abordagem baseada em movimento, educação do paciente e ganho de capacidade funcional em quadros degenerativos.",
      },
      {
        number: "07",
        title: "Estratégias práticas para alívio dos sintomas e progressão da reabilitação",
        summary:
          "Do controle inicial de dor e edema à evolução de força, estabilidade e demandas específicas do dia a dia ou esporte.",
      },
      {
        number: "08",
        title: "Aplicação em situações clínicas reais",
        summary:
          "Discussão e prática orientada com foco no que realmente aparece no consultório e no ginásio de reabilitação.",
      },
    ] satisfies CourseTopic[],
  },

  differentials: {
    eyebrow: "Experiência Presencial",
    headlinePrefix: "Muito mais que",
    headlineEmphasis: "teoria.",
    subtitle:
      "Imersão desenhada para tu colocar a mão na massa, tirar dúvidas ao vivo e trocar experiência com colegas da região.",
    items: [
      {
        id: "pratica",
        title: "Momentos de prática real",
        description:
          "Demonstração e execução supervisionada de testes, avaliação e progressões funcionais para fixar o conteúdo no corpo.",
        iconName: "dumbbell",
      },
      {
        id: "interacao",
        title: "Discussão clínica próxima",
        description:
          "Ambiente aberto para perguntas, troca de raciocínio sobre casos do dia a dia e contato direto com o ministrante.",
        iconName: "users",
      },
      {
        id: "coffee",
        title: "Coffee break e networking",
        description:
          "Pausas pensadas para conexão entre estudantes e fisioterapeutas de Pelotas e região.",
        iconName: "coffee",
      },
      {
        id: "bonus",
        title: "Bônus exclusivos presenciais",
        description:
          "Condições e materiais extras reservados exclusivamente para os participantes desta turma presencial.",
        iconName: "gift",
      },
    ] satisfies CourseDifferential[],
  },

  instructor: {
    eyebrow: "Ministrante",
    name: "Lucas Streck",
    role: "Fisioterapeuta · Fisioterapia Traumato-Esportiva",
    registration: "CREFITO-5",
    imagePath: "/images/lucas-streck.png",
    bioParagraphs: [
      "Fisioterapeuta à frente da Clínica Lucas Streck Fisioterapia, em Pelotas/RS, atuando diariamente na reabilitação traumato-esportiva de pacientes ortopédicos e atletas de diferentes modalidades.",
      "Une a rotina intensa de consultório e ginásio — da avaliação clínica inicial até o retorno ao gramado — em um ensino direto, aplicável e sem enrolação.",
    ],
  },

  faq: {
    eyebrow: "Perguntas Frequentes do Curso",
    headlinePrefix: "Tire suas dúvidas antes de",
    headlineEmphasis: "embarcar.",
    items: [
      {
        question: "Como faço minha inscrição e quais são as formas de pagamento?",
        answer:
          "A inscrição é feita online diretamente pela plataforma Sympla, com possibilidade de parcelamento em até 12x no cartão (conforme condições da plataforma).",
      },
      {
        question: "Qual é a política de cancelamento?",
        answer:
          "O cancelamento pode ser solicitado em até 7 dias após a compra, desde que o pedido seja feito com pelo menos 48 horas de antecedência em relação ao início do evento.",
      },
      {
        question: "Para quem o curso é indicado?",
        answer:
          "O curso foi estruturado para estudantes de Fisioterapia, fisioterapeutas formados e profissionais que desejam mais clareza de raciocínio clínico e segurança prática na reabilitação do joelho.",
      },
      {
        question: "Como funciona a dinâmica dos dois dias?",
        answer:
          "São dois dias presenciais de imersão (sábado das 09h00 em diante e domingo até 12h00), combinando exposição clínica objetiva, execução prática de testes ortopédicos, estratégias de progressão e coffee break com networking.",
      },
      {
        question: "Que tipo de roupa devo usar nos momentos práticos?",
        answer:
          "Como o curso inclui prática de avaliação e testes do joelho, recomenda-se roupa confortável ou esportiva (como bermuda ou legging que permita visualizar e testar a articulação do joelho).",
      },
    ] satisfies CourseFaqItem[],
  },
} as const;

export function isCourseEnded(now: Date = new Date()): boolean {
  const start = new Date(cursoContent.startDateIso).getTime();
  return now.getTime() >= start;
}
