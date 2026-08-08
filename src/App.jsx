import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Cpu,
  Menu,
  Network,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import "./App.css";

const revealItems = [
  {
    number: "01",
    title: "LEARN",
    text: "Workshops, talks and hands-on sessions that turn curiosity into practical skills.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "BUILD",
    text: "Create projects, prototypes and experiments around emerging technologies.",
    icon: Code2,
  },
  {
    number: "03",
    title: "CONNECT",
    text: "Meet students, mentors and builders who share the same curiosity.",
    icon: Network,
  },
];

const events = [
  {
    date: "01",
    type: "TECH / BUILD",
    title: "Hackathons",
    text: "Ideas become prototypes.",
  },
  {
    date: "02",
    type: "LEARN / EXPLORE",
    title: "Workshops",
    text: "Knowledge becomes capability.",
  },
  {
    date: "03",
    type: "CONNECT / DISCOVER",
    title: "Tech Talks",
    text: "Conversations become opportunities.",
  },
];

const projects = ["AI & MACHINE LEARNING", "WEB TECHNOLOGY", "OPEN SOURCE"];

function Reveal({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    const onMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className="site"
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >
      <div className="cursor-glow" />

      {/* NAVBAR */}
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#home" className="logo" onClick={closeMenu}>
          <div className="logo-box">CS</div>

          <div>
            <strong>IEEE COMPUTER SOCIETY</strong>
            <span>SBC · NSSCE</span>
          </div>
        </a>

        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#events" onClick={closeMenu}>
            Events
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#community" onClick={closeMenu}>
            Community
          </a>

          <a href="#contact" className="nav-button" onClick={closeMenu}>
            Join us <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />

          <div className="hero-topline">
            <span>IEEE COMPUTER SOCIETY</span>
            <span>PALAKKAD · INDIA</span>
          </div>

          <div className="hero-content">
            <Reveal>
              <p className="hero-kicker">
                <span className="live-dot" />
                STUDENT BRANCH CHAPTER
              </p>
            </Reveal>

            <Reveal className="hero-title-wrap">
              <h1>
                THE NEXT
                <br />
                <span>GENERATION</span>
                <br />
                OF BUILDERS.
              </h1>
            </Reveal>

            <Reveal>
              <p className="hero-description">
                A community of students exploring computer science, engineering
                ideas and the technologies shaping tomorrow.
              </p>
            </Reveal>

            <Reveal>
              <div className="hero-buttons">
                <a href="#about" className="main-button">
                  Explore chapter
                  <ArrowUpRight size={17} />
                </a>

                <a href="#events" className="outline-button">
                  See what&apos;s happening
                </a>
              </div>
            </Reveal>
          </div>

          <div className="hero-visual">
            <div className="visual-frame">
              <div className="visual-label">SYSTEM / 001</div>

              <div className="visual-orbit orbit-a" />
              <div className="visual-orbit orbit-b" />
              <div className="visual-orbit orbit-c" />

              <div className="visual-core">
                <Cpu size={52} />
              </div>

              <div className="floating-code code-one">01 / CREATE</div>
              <div className="floating-code code-two">02 / CONNECT</div>
              <div className="floating-code code-three">03 / EXPLORE</div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={15} />
          </div>
        </section>

        {/* STATEMENT */}
        <section className="statement">
          <Reveal>
            <p className="section-eyebrow">A COMMUNITY WITH PURPOSE</p>
          </Reveal>

          <Reveal>
            <h2>
              WE DON&apos;T JUST
              <br />
              <span>FOLLOW TECHNOLOGY.</span>
              <br />
              WE BUILD WITH IT.
            </h2>
          </Reveal>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <Reveal>
            <div className="section-index">01 / ABOUT</div>
          </Reveal>

          <div className="about-layout">
            <Reveal>
              <h2>
                Curious
                <br />
                minds.
                <br />
                <span>Shared direction.</span>
              </h2>
            </Reveal>

            <Reveal>
              <div className="about-copy">
                <p>
                  IEEE Computer Society SBC NSSCE brings together students
                  interested in computing, technology and innovation.
                </p>

                <p>
                  The chapter creates opportunities to learn beyond the
                  classroom, experiment with technology and collaborate with
                  people who want to build meaningful things.
                </p>

                <div className="about-line">
                  <span>IEEE CS · NSSCE</span>
                  <span>EST. / CHAPTER</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="dark-section section">
          <Reveal>
            <div className="section-index">02 / WHAT WE DO</div>
          </Reveal>

          <Reveal>
            <div className="section-heading">
              <h2>
                TURN
                <br />
                <span>CURIOSITY</span>
                <br />
                INTO ACTION.
              </h2>

              <p>
                Learning is only the beginning. We create spaces where students
                can experiment, collaborate and take ownership.
              </p>
            </div>
          </Reveal>

          <div className="feature-grid">
            {revealItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} className="feature-wrap">
                  <article
                    className="feature-card"
                    style={{ "--delay": `${index * 100}ms` }}
                  >
                    <div className="feature-number">{item.number}</div>

                    <Icon className="feature-icon" size={27} />

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>

                    <ArrowUpRight className="feature-arrow" size={20} />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* EVENTS */}
        <section className="events section" id="events">
          <Reveal>
            <div className="section-index">03 / EXPERIENCES</div>
          </Reveal>

          <Reveal>
            <div className="events-heading">
              <h2>
                EVENTS THAT
                <br />
                <span>MOVE IDEAS.</span>
              </h2>

              <p>
                From hands-on learning to competitive builds and conversations
                around technology.
              </p>
            </div>
          </Reveal>

          <div className="events-list">
            {events.map((event, index) => (
              <Reveal
                key={event.date}
                style={{ "--delay": `${index * 120}ms` }}
              >
                <article className="event-row">
                  <div className="event-number">{event.date}</div>

                  <div className="event-info">
                    <span>{event.type}</span>
                    <h3>{event.title}</h3>
                  </div>

                  <p>{event.text}</p>

                  <ArrowUpRight className="event-arrow" />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects" id="projects">
          <div className="projects-header">
            <div className="section-index">04 / PROJECTS</div>

            <Reveal>
              <div className="projects-heading-row">
                <div>
                  <p className="projects-kicker">BUILD. CREATE. EXPERIMENT.</p>

                  <h2 className="projects-title">
                    IDEAS
                    <br />
                    <span>IN MOTION.</span>
                  </h2>
                </div>

                <div className="projects-intro">
                  <span className="intro-line"></span>

                  <p>
                    A collection of ideas, experiments and student-built digital
                    experiences.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* MOVING PROJECT TAGS */}

          <div className="project-marquee">
            <div className="project-track">
              {[...projects, ...projects].map((project, index) => (
                <div className="project-pill" key={`${project}-${index}`}>
                  <Sparkles size={15} />
                  <span>{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MAIN SHOWCASE */}

          <Reveal>
            <div className="project-showcase">
              {/* decorative elements */}

              <div className="showcase-grid"></div>

              <div className="showcase-number">
                <span>PROJECT</span>
                <strong>001</strong>
              </div>

              <div className="showcase-status">
                <span className="status-dot"></span>
                LIVE IDEAS
              </div>

              {/* orbital rings */}

              <div className="showcase-orbit orbit-one"></div>
              <div className="showcase-orbit orbit-two"></div>
              <div className="showcase-orbit orbit-three"></div>

              {/* central object */}

              <div className="showcase-center">
                <div className="showcase-icon">
                  <Code2 size={52} strokeWidth={1.5} />
                </div>

                <div className="showcase-center-text">
                  <span className="showcase-label">
                    STUDENT PROJECT SHOWCASE
                  </span>

                  <h3>
                    FROM
                    <br />
                    <span>IDEA → IMPACT</span>
                  </h3>

                  <p>
                    Turning curiosity into technology, one project at a time.
                  </p>
                </div>
              </div>

              {/* corner arrow */}

              <div className="showcase-arrow">
                <ArrowUpRight size={28} strokeWidth={1.5} />
              </div>

              {/* bottom metadata */}

              <div className="showcase-meta">
                <span>IEEE CS • NSSCE</span>
                <span>CREATIVE TECHNOLOGY</span>
                <span>2026</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* COMMUNITY */}
        <section className="community section" id="community">
          <Reveal>
            <div className="section-index">05 / COMMUNITY</div>
          </Reveal>

          <div className="community-heading">
            <Reveal>
              <h2>
                PEOPLE
                <br />
                MAKE THE
                <br />
                <span>CHAPTER.</span>
              </h2>
            </Reveal>

            <Reveal>
              <div className="community-copy">
                <Users size={32} />
                <p>
                  A chapter is more than events and projects. It is the people
                  who show up, share ideas and help each other grow.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="people-grid">
            <div className="person-card">
              <span>01</span>
              <Users size={35} />
              <strong>LEADERSHIP</strong>
            </div>

            <div className="person-card">
              <span>02</span>
              <Network size={35} />
              <strong>COLLABORATION</strong>
            </div>

            <div className="person-card">
              <span>03</span>
              <Code2 size={35} />
              <strong>BUILDERS</strong>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="contact" id="contact">
          <div className="contact-grid" />

          <Reveal>
            <p>IEEE COMPUTER SOCIETY · SBC NSSCE</p>
          </Reveal>

          <Reveal>
            <h2>
              READY TO
              <br />
              <span>BUILD?</span>
            </h2>
          </Reveal>

          <Reveal>
            <a href="#home" className="main-button">
              Start exploring
              <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <div className="logo-box">CS</div>

          <div>
            <strong>IEEE COMPUTER SOCIETY</strong>
            <span>SBC · NSSCE</span>
          </div>
        </div>

        <div className="footer-meta">
          <span>NSS COLLEGE OF ENGINEERING</span>
          <span>PALAKKAD · KERALA</span>
        </div>

        <span className="footer-copy">BUILD / LEARN / CONNECT</span>
      </footer>
    </div>
  );
}

export default App;
