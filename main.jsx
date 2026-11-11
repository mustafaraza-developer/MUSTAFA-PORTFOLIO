import React from "react";
import { createRoot } from "react-dom/client";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, ExternalLink, Menu, X, Download, Code2, Database, Server, Smartphone, GraduationCap, Sparkles } from "lucide-react";
import "./styles.css";

const profile = {
  name: "Mustafa Fareed",
  role: "Full Stack Developer",
  email: "mustafarazafareed24@gmail.com",
  phone: "0310-8098658",
  location: "Karachi, Pakistan",
  github: "https://github.com/mustafaraza-developer",
  linkedin: "https://www.linkedin.com/in/mustafa-fareed-4a921243b/",
};

const skills = [
  { group: "Frontend", icon: Code2, items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"], level: "Working Knowledge" },
  { group: "Backend", icon: Server, items: ["Node.js", "Express.js"], level: "Learning" },
  { group: "Database", icon: Database, items: ["MongoDB", "Firebase", "Firestore"], level: "Working Knowledge" },
  { group: "Development", icon: Smartphone, items: ["REST APIs", "CRUD Operations", "Authentication", "Responsive Web Design", "Git & GitHub"], level: "Familiar With" },
];

const projects = [
  {
    title: "FAWZ AINIC",
    type: "Perfume Website",
    description: "A React-based e-commerce project focused on product browsing, authentication, shopping cart functionality and product management.",
    tech: ["React.js", "Firebase", "Firestore", "Authentication", "CRUD"],
    github: "https://github.com/mustafaraza-developer",
    demo: "#",
  },
  {
    title: "LuxuryStay",
    type: "Hotel Website",
    description: "A responsive hotel website project with a modern interface, authentication, CRUD functionality and management features.",
    tech: ["React.js", "Authentication", "CRUD", "Responsive UI"],
    github: "https://github.com/mustafaraza-developer",
    demo: "#",
  },
  {
    title: "City Guide App",
    type: "Flutter Application",
    description: "A city guide application project for exploring attractions, restaurants and hotels, with authentication and favorites functionality.",
    tech: ["Flutter", "Firebase", "Firestore", "Authentication"],
    github: "https://github.com/mustafaraza-developer",
    demo: "#",
  },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">M</span>
          <span>Mustafa<span className="accent">.</span></span>
        </a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's Talk <ArrowUpRight size={16}/></a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
          <div className="hero-grid"></div>
          <div className="hero-content">
            <div className="status-pill"><span className="pulse"></span> Open to entry-level opportunities</div>
            <p className="hello">Hi, I'm</p>
            <h1>Mustafa <span>Fareed</span></h1>
            <h2> Software Developer <b>•</b> Software Engineering Student</h2>
            <p className="hero-text">I'm a motivated software engineering student with hands-on experience building web applications and academic projects. I'm looking for an opportunity to improve my skills, contribute to real projects, and grow as a developer.</p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">View My Projects <ArrowUpRight size={18}/></a>
              <a href="/Mustafa_Raza_Software_Engineering_CV.pdf" download className="btn secondary"><Download size={17}/> Download CV</a>
            </div>
            <div className="quick-contact">
              <a href={`mailto:${profile.email}`}><Mail size={17}/> {profile.email}</a>
              <span></span>
              <a href="#contact">Let's connect <ArrowUpRight size={15}/></a>
            </div>
          </div>
          <div className="code-card">
            <div className="window-bar"><i></i><i></i><i></i><span>mustafa.js</span></div>
            <pre><code><span className="purple">const</span> developer = {"{"}
{"\n  "}name: <span className="green">"Mustafa Fareed"</span>,
{"\n  "}role: <span className="green">" Full Stack Developer"</span>,
{"\n  "}learning: [<span className="green">"React"</span>, <span className="green">"Node"</span>],
{"\n  "}focus: <span className="green">"Web Development"</span>,
{"\n  "}mindset: <span className="green">"Always Learning"</span>
{"\n"}{"}"};</code></pre>
            <div className="code-footer"><span>● available for opportunities</span><span>⌘ 01</span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <SectionTitle eyebrow="01 / About me" title="Building skills through practice." text="A beginner developer focused on learning, building, and improving one project at a time." />
          <div className="about-grid">
            <div className="about-card large">
              <div className="number">01</div>
              <h3>My journey</h3>
              <p>I have completed my school education and am currently studying Software Engineering. I enjoy learning programming, building websites and applications, solving problems, and gaining practical development experience.</p>
              <p>My current focus is strengthening my front-end and full-stack fundamentals through hands-on projects.</p>
            </div>
            <div className="about-card">
              <Sparkles size={25} className="card-icon"/>
              <h3>Quick learner</h3>
              <p>I enjoy exploring new technologies and turning what I learn into practical projects.</p>
            </div>
            <div className="about-card">
              <Code2 size={25} className="card-icon"/>
              <h3>Project focused</h3>
              <p>My portfolio reflects academic and personal work rather than claimed professional employment.</p>
            </div>
          </div>
        </section>

        <section id="education" className="section education">
          <SectionTitle eyebrow="02 / Education" title="Learning the foundations." />
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon"><GraduationCap size={21}/></div>
              <div className="timeline-content">
                <span>Currently studying</span>
                <h3>Software Engineering Course</h3>
                <p>Building foundations in programming, web development, databases and application development.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><GraduationCap size={21}/></div>
              <div className="timeline-content">
                <span>Completed</span>
                <h3>Benchmark School System</h3>
                <p>School education · 2012–2026</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <SectionTitle eyebrow="03 / Skills" title="Tools I'm learning and using." text="A practical skill set built through coursework and projects. No exaggerated expertise claims." />
          <div className="skills-grid">
            {skills.map(({group, icon: Icon, items, level}) => (
              <div className="skill-card" key={group}>
                <div className="skill-head"><div className="skill-icon"><Icon size={20}/></div><div><h3>{group}</h3><span>{level}</span></div></div>
                <div className="tags">{items.map(x => <span key={x}>{x}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <SectionTitle eyebrow="04 / Projects" title="Things I've built." text="Selected academic and personal projects that show my practical development experience." />
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-top"><span>0{i+1}</span><a href={p.github} aria-label={`${p.title} GitHub`}><Github size={20}/></a></div>
                <div className="project-preview"><span>{p.title}</span><small>{p.type}</small><div className="preview-lines"><i></i><i></i><i></i></div></div>
                <div className="project-body">
                  <h3>{p.title}</h3><span className="project-type">{p.type}</span><p>{p.description}</p>
                  <div className="tags">{p.tech.map(x => <span key={x}>{x}</span>)}</div>
                  <div className="project-links"><a href={p.github}>GitHub <ArrowUpRight size={15}/></a><a href={p.demo}>Live Demo <ExternalLink size={14}/></a></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience">
          <SectionTitle eyebrow="05 / Experience" title="Practical experience." />
          <div className="experience-box">
            <div className="experience-mark">M</div>
            <div><span className="eyebrow">Hands-on development</span><h3>Learning by building</h3><p>My software development experience comes mainly from academic projects, personal projects, and hands-on practice. I am seeking an entry-level opportunity where I can apply these foundations, learn from experienced developers, and contribute to a team.</p></div>
          </div>
        </section>

        <section className="section strengths">
          <SectionTitle eyebrow="06 / Why me" title="What I bring as a junior developer." />
          <div className="strengths-grid">
            {["Willingness to learn", "Problem solving", "Consistency", "Fast learner", "Practical project experience", "Teamwork", "Interest in web development"].map((x,i) => <div className="strength" key={x}><span>0{i+1}</span><h3>{x}</h3><ArrowUpRight size={18}/></div>)}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="eyebrow">07 / Contact</span>
              <h2>Let's build something <span>together.</span></h2>
              <p>I'm open to entry-level software development roles, internships, and opportunities to learn through real projects.</p>
              <div className="contact-list">
                <a href={`mailto:${profile.email}`}><Mail/> {profile.email}</a>
                <a href={`tel:${profile.phone}`}><Phone/> {profile.phone}</a>
                <span><MapPin/> {profile.location}</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={e => {e.preventDefault(); alert("Thanks! Please connect with me directly by email.");}}>
              <label>Name<input required placeholder="Your name"/></label>
              <label>Email<input type="email" required placeholder="your@email.com"/></label>
              <label>Message<textarea required rows="5" placeholder="Tell me about the opportunity..."></textarea></label>
              <button className="btn primary" type="submit">Send Message <ArrowUpRight size={17}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div><a href="#home" className="brand"><span className="brand-mark">M</span><span>Mustafa<span className="accent">.</span></span></a><p> Software Developer · Software Engineering Student</p></div>
        <div className="footer-links"><a href={profile.github}><Github size={18}/></a><a href={profile.linkedin}><Linkedin size={18}/></a><a href={`mailto:${profile.email}`}><Mail size={18}/></a></div>
        <small>© 2026 Mustafa Fareed. All rights reserved.</small>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
