import { useEffect, useMemo, useState } from "react";
//import { TEXTS, Language } from "./i18n";


type Project = {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

type Experience = {
  title: string;
  org: string;
  period: string;
  description: string;
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, setDark };
}

export default function App() {
  const { dark, setDark } = useDarkMode();
  const [cvLang, setCvLang] = useState<"pt" | "en">("pt");

  
  const PROFILE = useMemo(
    () => ({
      name: "Enzo Perez Morais de Jesus",
      roleTitle: "Engenheiro Mecatrônico",
      roleSubtitle: "Universidade Federal de Santa Catarina",
      location: "Aachen, Alemanha",
      tagline: "Construo soluções que conectam hardware e software, trabalhando com automação, gêmeos digitais (AAS/BaSyx), MQTT, REST/HTTP e desenvolvimento web.",
      email: "enzopmjmorais@gmail.com",
      github: "https://github.com/EnzoP02",
      linkedin: "https://www.linkedin.com/in/enzo-perez-morais/",
      cv: "#", // pode apontar para um PDF no repo
    }),
    []
  );

  const skills = useMemo(
    () => [
      { title: "Software", items: ["Python", "C/C++", "matlab", "Node.js/TypeScript", "React", "Docker", "Git", "FastAPI", "SQL"] },
      { title: "Industrial/IoT", items: ["MQTT", "REST/HTTP", "AAS", "BaSyx"] },
      { title: "Embarcados", items: ["Microcontroladores", "I2C/SPI/UART", "PWM/Motores", "Sensores", "Eletrônica"] },
    ],
    []
  );

  
  const projects: Project[] = useMemo(
    () => [
      {
        title: "Gêmeo Digital — Tripteron",
        description:
          "Desenvolvimento de Gêmeo Digital para um robô Tripteron, via AAS + servidores BaSyx, para monitoramento dos estadose controle do ativo remotamente.",
        tags: ["AAS", "BaSyx", "Docker", "REST", "IoT"],
        links: [
          { label: "Repo", href: "https://github.com/SEU_USUARIO/seu-repo" },
        ],
      },
      {
        title: "Jogo supertrunfo",
        description:
          "Desenvolvimento de um jogo singleplayer de supertrunfo.",
        tags: ["C++", "Programação orientada a objetos"],
        links: [{ label: "Repo", href: "#" }],
      },
    ],
    []
  );

  
  const experience: Experience[] = useMemo(
    () => [
      {
        title: "Estágio / Pesquisa aplicada",
        org: "Fraunhofer-Institut für Produktionstechnologie IPT",
        period: "Ago. 2025 — Atual",
        description:
          "Gêmeos Digitais, integração de sistemas industriais, desenvolvimento web e demonstrações IoT/5G.",
      },
      {
        title: "Teaching Assistant — Física 1",
        org: "UFSC",
        period: "2022",
        description: "Suporte a estudantes, resolução de dúvidas e auxílio na correção de listas/avaliações.",
      },
      {
        title: "Liderança / Projetos — Empresa Júnior",
        org: "Web Dev / RH",
        period: "2024",
        description: "Coordenação de pessoas e participação no design/implementação de websites e aplicações.",
      },
    ],
    []
  );

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progress = clamp(scrollY / (document.body.scrollHeight - window.innerHeight || 1), 0, 1);

  return (
    <div className="app">
      <div className="scrollProgress" style={{ transform: `scaleX(${progress})` }} />

      <header className="header">
        <a className="brand" href="#top" aria-label="Ir ao topo">
          <span className="brandDot" />
          <span>{PROFILE.name}</span>
        </a>

        <nav className="nav">
          <a href="#about">Sobre</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
          <a href="#experience">Experiência</a>
          <a href="#contact">Contato</a>
        </nav>

        <div className="headerActions">
          <button className="iconBtn" onClick={() => setCvLang(cvLang === "pt" ? "en": "pt")} aria-label="Mudar idioma do CV">
            {cvLang === "pt" ? "PT" : "EN"}
          </button>
          <button className="iconBtn" onClick={() => setDark(!dark)} aria-label="Alternar tema">
            {dark ? "☀️" : "🌙"}
          </button>
          <a className="pill" href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <main id="top" className="main">
        <section className="hero">
          <div className="heroBg" aria-hidden="true">
            <div className="blob b1" />
            <div className="blob b2" />
            <div className="grid" />
          </div>

          <div className="heroContent">
            <p className="kicker">{PROFILE.location}</p>
            <h1>
              {PROFILE.roleTitle}
              <br />
              <span className="roleSubtitle">
                {PROFILE.roleSubtitle}
              </span>
              <span className="accent">.</span>
            </h1>
            <p className="lead">{PROFILE.tagline}</p>

            <div className="ctaRow">
              <a className="btn primary" href="#projects">
                Ver projetos
              </a>
              <a className="btn" href="#contact">
                Falar comigo
              </a>
              <a className="btn ghost" href={PROFILE.cv} target="_blank" rel="noreferrer">
                Baixar CV
              </a>
            </div>

            <div className="metrics">
              <div className="metric">
                <div className="metricValue">4+</div>
                <div className="metricLabel">Áreas</div>
              </div>
              <div className="metric">
                <div className="metricValue">IoT</div>
                <div className="metricLabel">MQTT</div>
              </div>
              <div className="metric">
                <div className="metricValue">Gêmeos Digitais</div>
                <div className="metricLabel">AAS/BaSyx</div>
              </div>
              <div className="metric">
                <div className="metricValue">Hardware</div>
                <div className="metricLabel">ESP32/Sensores</div>
              </div>
            </div>
          </div>

          <div className="heroCard">
            <div className="cardTop">
              <div className="avatar" aria-hidden="true">
                EP
              </div>
              <div>
                <div className="cardTitle">{PROFILE.name}</div>
                <div className="cardSub">{PROFILE.roleTitle}</div>
              </div>
            </div>

            <div className="cardList">
              <a className="cardLink" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <span className="arrow">↗</span>
              </a>
              <a className="cardLink" href={PROFILE.github} target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <span className="arrow">↗</span>
              </a>
              <a className="cardLink" href={`mailto:${PROFILE.email}`}>
                <span>{PROFILE.email}</span>
                <span className="arrow">→</span>
              </a>
            </div>

            <div className="cardFoot">
              <span className="dotLive" />
              <span>Disponível para projetos/colabs</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="sectionHeader">
            <h2>Sobre</h2>
            <p>Um breve resumo sobre mim.</p>
          </div>

          <div className="grid2">
            <div className="panel">
              <h3>Perfil</h3>
              <p>
                Graduando de engenharia mecatrônica pela UFSC, com experiência de estágio internacional, sou 
                um entusiasta da tecnologia, com foco nas áreas relacionadas à Indústria 4.0 e Internet das Coisas (IoT).
                Optei por cursar engenharia mecatrônica devido a minha curiosidade acerca das tecnologias do momento e da minha vontade de trabalhar com integração de sistemas: desde o sinal até dashboards ligados a um gêmeo digital de um ativo. 
                Gosto de projetos que exigem modelagem, testes e entrega de algo que realmente funcione no mundo real,
                além disso, sou muito motivado por desafios relacionados às demandas concomitantes da indústria.
              </p>
              <ul className="bullets">
                <li>Integração: hardware ↔ software ↔ nuvem/edge</li>
                <li>Industrial: Gêmeos Digitais, MQTT</li>
                <li>Entrega: documentação, demos e reprodutibilidade</li>
              </ul>
            </div>

            <div className="panel">
              <h3>O que você encontra aqui</h3>
              <div className="pillGrid">
                {["Digital Twins", "IoT/Industrial", "Controle", "Robótica", "Web Development"].map((x) => (
                  <span key={x} className="chip">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="sectionHeader">
            <h2>Habilidades</h2>
            <p>Coisas que já estudei e com as quais já trabalhei.</p>
          </div>

          <div className="cards">
            {skills.map((g) => (
              <div key={g.title} className="card">
                <h3>{g.title}</h3>
                <div className="pillGrid">
                  {g.items.map((s) => (
                    <span key={s} className="chip subtle">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="sectionHeader">
            <h2>Projetos</h2>
            <p>Alguns projetos que desenvolvi.</p>
          </div>

          <div className="cards">
            {projects.map((p) => (
              <article key={p.title} className="card project">
                <div className="projectTop">
                  <h3>{p.title}</h3>
                  <div className="projectLinks">
                    {p.links.map((l) => (
                      <a key={l.label} className="miniLink" href={l.href} target="_blank" rel="noreferrer">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>

                <p className="muted">{p.description}</p>

                <div className="pillGrid">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="sectionHeader">
            <h2>Experiência</h2>
            <p>Um pouco do que eu já vivi.</p>
          </div>

          <div className="timeline">
            {experience.map((e) => (
              <div key={e.title} className="tlItem">
                <div className="tlDot" />
                <div className="tlContent">
                  <div className="tlTop">
                    <h3>{e.title}</h3>
                    <span className="tlPeriod">{e.period}</span>
                  </div>
                  <div className="tlOrg">{e.org}</div>
                  <p className="muted">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="sectionHeader">
            <h2>Contato</h2>
            <p>Se quiser trocar uma ideia, aqui é o caminho mais rápido.</p>
          </div>

          <div className="grid2">
            <div className="panel">
              <h3>Me mande um email</h3>
              <p className="muted">
                Respondo melhor se você mandar contexto: objetivo, stack, prazo e links (se existirem).
              </p>
              <a className="btn primary" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>

              <div className="spacer" />

              <h3>Links</h3>
              <div className="linkRow">
                <a className="miniLink" href={PROFILE.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a className="miniLink" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a className="miniLink" href={PROFILE.cv} target="_blank" rel="noreferrer">
                  CV ↗
                </a>
              </div>
            </div>

            <form
              className="panel"
              onSubmit={(ev) => {
                ev.preventDefault();
                const fd = new FormData(ev.currentTarget);
                const name = String(fd.get("name") || "").trim();
                const msg = String(fd.get("message") || "").trim();
                const subject = encodeURIComponent(`Contato via portfólio — ${name || "Sem nome"}`);
                const body = encodeURIComponent(msg || "Olá! Vi seu portfólio e queria falar sobre…");
                window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
              }}
            >
              <h3>Mensagem rápida</h3>

              <label className="label">
                Seu nome
                <input name="name" className="input" placeholder="Ex.: Enzo" />
              </label>

              <label className="label">
                Mensagem
                <textarea name="message" className="input" rows={5} placeholder="Escreva aqui…" />
              </label>

              <button className="btn" type="submit">
                Abrir email
              </button>
              <p className="tiny muted">* Isso abre seu app de email com a mensagem pronta.</p>
            </form>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <span className="sep">•</span>
        </footer>
      </main>
    </div>
  );
}
