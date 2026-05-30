import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Github, Linkedin, Mail, ExternalLink, ArrowRight,
  GraduationCap, Briefcase, Code2, Cpu, Eye, Layers,
  Brain, Hand, Car, Sparkles, MapPin, Send, CheckCircle2, Loader2, AlertCircle,
} from "lucide-react";
import portrait from "@/assets/aprajita-portrait.jpg";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { VoiceAssistant } from "@/components/VoiceAssistant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aprajita Yadav — AI Engineer & Full Stack Developer" },
      { name: "description", content: "Portfolio of Aprajita Yadav — AI & ML enthusiast, Computer Vision developer, and Full Stack engineer building intelligent real-world solutions." },
      { property: "og:title", content: "Aprajita Yadav — AI Engineer & Full Stack Developer" },
      { property: "og:description", content: "AI, Machine Learning, Computer Vision & MERN Stack portfolio." },
    ],
  }),
  component: Portfolio,
});

const skills = {
  Languages: ["C++", "Java", "Python", "JavaScript"],
  "AI / ML": ["Artificial Intelligence", "Machine Learning", "Computer Vision", "OpenCV", "YOLO"],
  "Full Stack": ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"],
  Foundations: ["DSA", "DBMS", "Git & GitHub"],
};

const experiences = [
  {
    role: "AICTE Internship",
    org: "MERN Stack Development",
    icon: Code2,
    points: [
      "Built MERN-based assignments using MongoDB, Express, React, Node.",
      "Developed responsive web interfaces and backend functionalities.",
      "Performed database integration, debugging and full-stack iterations.",
    ],
  },
  {
    role: "Yuva ML Internship",
    org: "Yuva Intern",
    icon: Brain,
    points: [
      "Hands-on practice with Python, ML and Data Analysis.",
      "Implemented real-world ML concepts and model workflows.",
      "Strengthened analytical thinking and problem solving.",
    ],
  },
];

const projects = [
  {
    title: "Hand Gesture Recognition",
    desc: "Real-time hand gesture detection system using Python and OpenCV. Interactive webcam-based recognition with computer-vision pipelines.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    icon: Hand,
    accent: "from-[oklch(0.72_0.22_250)] to-[oklch(0.6_0.25_220)]",
  },
  {
    title: "Smart Parking Management",
    desc: "Smart parking monitoring built with Computer Vision and YOLO. Automated vehicle detection and intelligent slot occupancy tracking.",
    tags: ["YOLO", "OpenCV", "Python"],
    icon: Car,
    accent: "from-[oklch(0.65_0.27_305)] to-[oklch(0.55_0.25_270)]",
  },
];

const services = [
  { icon: Brain, title: "AI Solutions", desc: "Intelligent systems and AI-powered automation tailored to real-world problems." },
  { icon: Cpu, title: "Machine Learning", desc: "End-to-end ML pipelines — from data to deployable models." },
  { icon: Eye, title: "Computer Vision", desc: "Object detection, recognition and visual intelligence applications." },
  { icon: Layers, title: "Full Stack Web", desc: "Modern MERN stack web apps with sleek UI and solid backends." },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <div className="fixed inset-0 -z-20 grid-bg" aria-hidden />
      <Navbar />
      <VoiceAssistant />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/30 to-[var(--neon-purple)]/30 blur-3xl -z-10" />
            <div className="relative neon-border rounded-3xl p-2 animate-pulse-glow max-w-md mx-auto">
              <img
                src={portrait}
                alt="Aprajita Yadav, AI Engineer"
                width={1024}
                height={1024}
                className="rounded-2xl w-full h-auto"
              />
              <div className="absolute -top-3 -right-3 glass px-3 py-1.5 rounded-full text-xs font-mono text-[var(--neon-blue)] flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p className="text-muted-foreground mb-3 font-mono text-sm">
              <span className="text-[var(--neon-blue)]">$</span> Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              APRAJITA<br />
              <span className="text-gradient">YADAV</span>
            </h1>
            <div className="text-xl md:text-2xl font-medium text-foreground/80 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  "AI & ML Enthusiast",
                  2000,
                  "Computer Vision Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="text-gradient"
              />
            </div>
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Building intelligent real-world solutions with Artificial Intelligence,
              Machine Learning, Computer Vision and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-neon">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-ghost-neon">
                Contact Me <Send className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/aprajitayadav2901-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-neon"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle kicker="About" title="Who I Am" />
          <Reveal>
            <div className="glass-card rounded-3xl p-8 md:p-12 text-lg leading-relaxed text-foreground/85">
              <Sparkles className="w-8 h-8 text-[var(--neon-blue)] mb-4" />
              <p>
                Final-year Computer Science Engineering student at{" "}
                <span className="text-gradient font-semibold">VIT Bhopal University</span>{" "}
                passionate about Artificial Intelligence, Machine Learning, Computer Vision and
                Full Stack Development. I build intelligent systems, real-time detection
                applications and modern web solutions — driven by strong problem-solving
                instincts and a craft for clean engineering.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle kicker="Education" title="Academic Journey" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon-blue)] via-[var(--neon-purple)] to-transparent" />
            {[
              {
                period: "2023 — 2027",
                title: "B.Tech, Computer Science Engineering",
                place: "VIT Bhopal University",
              },
              {
                period: "Senior Secondary",
                title: "12th Grade",
                place: "Kendriya Vidyalaya Gole Market",
              },
            ].map((edu, i) => (
              <Reveal key={edu.title} delay={i * 0.1}>
                <div className={`relative flex flex-col md:flex-row gap-6 mb-10 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--neon-blue)] glow-blue mt-6" />
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glass-card rounded-2xl p-6">
                      <div className="flex items-center gap-2 text-xs font-mono text-[var(--neon-blue)] mb-2">
                        <GraduationCap className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                      <p className="text-muted-foreground">{edu.place}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Experience" title="Where I've Worked" />
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full group">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 border border-[var(--neon-blue)]/30 group-hover:glow-blue transition-all">
                      <exp.icon className="w-6 h-6 text-[var(--neon-blue)]" />
                    </div>
                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-[var(--neon-purple)] font-mono text-sm mb-4">{exp.org}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-[var(--neon-blue)] mt-1">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Skills" title="Tech Arsenal" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(skills).map(([cat, items], i) => (
              <Reveal key={cat} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--neon-blue)] mb-4">
                    {cat}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-lg text-sm bg-[oklch(0.72_0.22_250/0.08)] border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/60 hover:bg-[oklch(0.72_0.22_250/0.15)] transition-all cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Projects" title="Featured Work" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="glass-card rounded-3xl p-8 h-full group relative overflow-hidden">
                  <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${p.accent} mb-5 group-hover:scale-110 transition-transform`}>
                      <p.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs rounded-md font-mono bg-[oklch(0.65_0.27_305/0.1)] text-[var(--neon-purple)] border border-[var(--neon-purple)]/30">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/aprajitayadav2901-eng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost-neon text-sm"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                      <button className="btn-ghost-neon text-sm opacity-60 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Services" title="What I Offer" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 h-full text-center group">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 border border-[var(--neon-blue)]/30 mb-4 group-hover:animate-pulse-glow">
                    <s.icon className="w-7 h-7 text-[var(--neon-blue)]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle kicker="Contact" title="Let's Build Together" />
          <div className="grid lg:grid-cols-5 gap-6">
            <Reveal className="lg:col-span-2">
              <div className="glass-card rounded-3xl p-8 h-full space-y-5">
                <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Open to internships, hackathons, and AI/ML opportunities.
                </p>
                {[
                  { icon: Mail, label: "aprajitayadav2901@gmail.com", href: "mailto:aprajitayadav2901@gmail.com" },
                  { icon: Linkedin, label: "linkedin.com/in/aprajitay", href: "https://www.linkedin.com/in/aprajitay" },
                  { icon: Github, label: "github.com/aprajitayadav2901-eng", href: "https://github.com/aprajitayadav2901-eng" },
                  { icon: MapPin, label: "Bhopal, India", href: "#" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[oklch(0.72_0.22_250/0.1)] transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-[oklch(0.72_0.22_250/0.15)] border border-[var(--neon-blue)]/30 group-hover:glow-blue">
                      <c.icon className="w-4 h-4 text-[var(--neon-blue)]" />
                    </div>
                    <span className="text-sm break-all">{c.label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal className="lg:col-span-3" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-border/50 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Designed & Developed by <span className="text-gradient font-semibold">APRAJITA YADAV</span>
          </p>
          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/aprajitayadav2901-eng" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/aprajitay" },
              { icon: Mail, href: "mailto:aprajitayadav2901@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass hover:glow-blue hover:border-[var(--neon-blue)] transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-[oklch(0.18_0.03_270/0.6)] border border-border focus:border-[var(--neon-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]/30 transition-all";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "");
    const params = {
      name,
      from_name: name,
      email: String(fd.get("email") || ""),
      from_email: String(fd.get("email") || ""),
      reply_to: String(fd.get("email") || ""),
      subject: String(fd.get("subject") || `Portfolio inquiry from ${name}`),
      message: String(fd.get("message") || ""),
      title: String(fd.get("subject") || `Portfolio inquiry from ${name}`),
    };

    setStatus("loading");
    setErrorMsg("");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        "service_xy1th1m",
        "template_k472fpe",
        params,
        { publicKey: "HSDPeV-yidBC4jlgC" }
      );
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.text || (err instanceof Error ? err.message : "Something went wrong"));
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card rounded-3xl p-10 h-full flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="p-4 rounded-full bg-[var(--neon-blue)]/15 border border-[var(--neon-blue)]/40 glow-blue mb-5">
          <CheckCircle2 className="w-10 h-10 text-[var(--neon-blue)]" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          Thanks for reaching out. I'll get back to you at your email shortly.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-ghost-neon">
          Send another <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input required name="name" placeholder="Your Name" className={inputCls} />
        <input required type="email" name="email" placeholder="Email" className={inputCls} />
      </div>
      <input name="subject" placeholder="Subject" className={inputCls} />
      <textarea required name="message" rows={6} placeholder="Tell me about your project..." className={`${inputCls} resize-none`} />

      {status === "error" && (
        <div className="flex items-start gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{errorMsg || "Failed to send. Please try again or email me directly."}</span>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-neon w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "loading" ? (
          <>Sending… <Loader2 className="w-4 h-4 animate-spin" /></>
        ) : (
          <>Send Message <Send className="w-4 h-4" /></>
        )}
      </button>
    </form>
  );
}
