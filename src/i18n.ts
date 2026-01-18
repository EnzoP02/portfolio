export type Language = "pt" | "en";

export const TEXTS = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidadess",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      location: "Aachen, Alemanha",
      roleTitle: "Engenheiro Mecatrônico",
      roleSubtitle: "Universidade Federal de Santa Catarina",
      tagline:
        "Construo soluções que conectam hardware e software, trabalhando com automação, gêmeos digitais (AAS/BaSyx), MQTT, REST/HTTP, sistemas web e protótipos embarcados.",
      buttons: {
        projects: "Ver projetos",
        contact: "Falar comigo",
        cv: "Baixar CV",
      },
    },
    metrics: {
      areas: "Áreas",
    },
    about: {
      title: "Sobre",
      subtitle: "Um breve resumo sobre mim.",
      profileTitle: "Perfil",
      profileText:
        "Graduando em engenharia mecatrônica pela UFSC, com experiências de trabalho no exterior, sou um entusiasta da inovação, com foco em Indústria 4.0 e Internet das Coisas (IoT). Optei por cursar engenharia mecatrônica visando o aprendizado acerca de integração de sistemas: desde o sinal até dashboards conectados a um gêmeo digital.",
      bullets: [
        "Integração: hardware ↔ software ↔ nuvem/edge",
        "Industrial: Gêmeos Digitais, MQTT",
        "Entrega: documentação, demonstradores e reprodutibilidade",
      ],
      finds: "O que você encontra aqui",
    },
    skills: {
      title: "Competências",
      subtitle: "Stack resumida por categoria.",
      groups: {
        software: "Software",
        industrial: "Industrial / IoT",
        embedded: "Embarcados",
      },
    },
    projects: {
      title: "Projetos",
      subtitle: "Alguns projetos em que eu trabalhei ou desenvolvi.",
    },
    experience: {
      title: "Experiência",
      subtitle: "Um pouco sobre a minha trajetória até aqui.",
    },
    contact: {
      title: "Contato",
      subtitle: "Caso queira trocar um ideia, aqui é o caminho mais rápido.",
      emailTitle: "Me mande um email",
      emailText:
        "Respondo melhor se você inserir um contexto: objetivo, stack, prazo e links (se existirem).",
      quickMsg: "Mensagem rápida",
      name: "Seu nome",
      message: "Mensagem",
      openEmail: "Abrir email",
    },
    available: "Disponível para projetos/colabs",
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      location: "Aachen, Germany",
      roleTitle: "Mechatronic Engineer",
      roleSubtitle: "Federal University of Santa Catarina",
      tagline:
        "I build solutions that connect hardware and software: automation, digital twins (AAS/BaSyx), MQTT, REST/HTTP, web systems and embedded prototypes.",
      buttons: {
        projects: "View projects",
        contact: "Contact me",
        cv: "Download CV",
      },
    },
    metrics: {
      areas: "Areas",
    },
    about: {
      title: "About",
      subtitle: "A short summary about me.",
      profileTitle: "Profile",
      profileText:
        "Mechatronics engineering student at UFSC, with internship experience in Germany. Enthusiastic about innovation, focused on Industry 4.0 and IoT. I chose mechatronics to integrate systems: from signals to dashboards connected to a digital twin.",
      bullets: [
        "Integration: hardware ↔ software ↔ cloud/edge",
        "Industrial: Digital Twins, MQTT",
        "Delivery: documentation, demos and reproducibility",
      ],
      finds: "What you’ll find here",
    },
    skills: {
      title: "Skills",
      subtitle: "Stack organized by category.",
      groups: {
        software: "Software",
        industrial: "Industrial / IoT",
        embedded: "Embedded Systems",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Some projects I’ve worked on.",
    },
    experience: {
      title: "Experience",
      subtitle: "A short timeline (straight to the point).",
    },
    contact: {
      title: "Contact",
      subtitle: "If you want to talk, this is the fastest way.",
      emailTitle: "Send me an email",
      emailText:
        "I reply better if you include context: goal, stack, deadline and links (if any).",
      quickMsg: "Quick message",
      name: "Your name",
      message: "Message",
      openEmail: "Open email",
    },
    footer: "Built with React + Vite",
    available: "Available for projects/collabs",
  },
} as const;
