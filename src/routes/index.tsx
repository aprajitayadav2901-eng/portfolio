import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Github, Linkedin, Mail, ArrowUpRight,
  Send, CheckCircle2, Loader2, AlertCircle, MapPin,
} from "lucide-react";
import portrait from "@/assets/aprajita-portrait.jpg";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { VoiceAssistant } from "@/components/VoiceAssistant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aprajita Yadav — AI Engineer & Full Stack Developer" },
      { name: "description", content: "Portfolio of Aprajita Yadav — AI, Machine Learning, Computer Vision and Full Stack Developer crafting intelligent systems with precision." },
      { property: "og:title", content: "Aprajita Yadav — AI Engineer & Full Stack Developer" },
      { property: "og:description", content: "Editorial portfolio — AI, ML, Computer Vision & Full Stack." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { title: "Hand Gesture Recognition", tag: "Computer Vision", year: "2024", desc: "Real-time hand gesture detection using Python and OpenCV with an interactive webcam pipeline." },
  { title: "Smart Parking Management", tag: "YOLO · CV", year: "2024", desc: "Automated vehicle detection and intelligent slot occupancy tracking built with YOLO and OpenCV." },
  { title: "MERN Web Suite", tag: "Full Stack", year: "2024", desc: "Responsive MongoDB · Express · React · Node applications with clean architecture and REST APIs." },
  { title: "ML Insight Engine", tag: "Machine Learning", year: "2024", desc: "Predictive workflows and analytical pipelines built during the Yuva ML internship." },
];

const achievements = [
  { kind: "Internship", year: "2024", title: "AICTE — MERN Stack Development", place: "Full Stack Engineering" },
  { kind: "Internship", year: "2024", title: "Yuva ML Internship", place: "Python · ML · Data Analysis" },
  { kind: "Education", year: "2023—2027", title: "B.Tech, Computer Science Engineering", place: "VIT Bhopal University" },
];

const services = [
  { num: "01", icon: "🚀", title: "Computer Vision Development", desc: "Creating AI-powered applications using YOLO, OpenCV, and Python for real-time object detection and intelligent automation." },
  { num: "02", icon: "💻", title: "Web Application Development", desc: "Building modern, responsive, and interactive web applications with clean UI and optimized performance." },
  { num: "03", icon: "🧠", title: "Machine Learning Solutions", desc: "Applying machine learning techniques to analyze data, generate insights, and develop predictive systems." },
  { num: "04", icon: "⚡", title: "Software Engineering", desc: "Developing efficient and scalable solutions with a focus on clean code, problem-solving, and real-world impact." },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <VoiceAssistant />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-24 px-6 md:px-10 grain">
        <div className="absolute inset-0 -z-10 smoke-bg" aria-hidden />
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-10">Aprajita Yadav · Portfolio · 2026</div>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[18vw] md:text-[14vw] text-foreground/95"
            >
              APRAJITA
            </motion.h1>

            <div className="relative grid md:grid-cols-12 items-start gap-6 mt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="md:col-span-5 md:col-start-2 order-2 md:order-1 -mt-[6vw] md:-mt-[8vw] z-10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={portrait}
                    alt="Aprajita Yadav, AI Engineer"
                    className="w-full h-auto grayscale contrast-110"
                    style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.85)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="md:col-span-4 md:col-start-9 order-1 md:order-2 pt-4 md:pt-12"
              >
                <div className="eyebrow mb-3">Aprajita Yadav</div>
                <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Crafting intelligence in every line — building real-world AI, Computer Vision and
                  Full Stack systems with precision and quiet rigor.
                </p>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[18vw] md:text-[14vw] text-foreground/95 text-right -mt-[4vw]"
            >
              YADAV
            </motion.h1>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-mono">
                Explore Work <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-ghost-mono">
                Contact <Send className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="eyebrow max-w-xs">
              Engineering intelligent systems — Computer Vision, ML, and Full Stack — from Delhi, India.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto hairline pt-16">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="eyebrow mb-4">About</div>
              <h2 className="display text-5xl md:text-7xl">
                About<br />Aprajita
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-7">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/85 mb-8">
                Since 2023, Aprajita has immersed herself in the craft of intelligent systems —
                forging a deep connection between code and reasoning. Each project tells a story,
                revealing the precision and curiosity carved into it over time.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Final-year Computer Science Engineering student at VIT Bhopal University, focused on
                Artificial Intelligence, Machine Learning, Computer Vision and Full Stack
                Development. Driven by problem-solving instinct and a craft for clean engineering.
              </p>
              <a href="#projects" className="btn-ghost-mono">
                Learn More <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / PROJECTS */}
      <section id="projects" className="relative py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="eyebrow mb-4">Gallery</div>
            <h2 className="display text-6xl md:text-8xl">Selected Work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border/40">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <a
                  href="https://github.com/aprajitayadav2901-eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-10 md:p-14 card-mono group h-full"
                >
                  <div className="flex items-start justify-between mb-12">
                    <span className="eyebrow">{p.tag}</span>
                    <span className="eyebrow">{p.year}</span>
                  </div>
                  <h3 className="display text-4xl md:text-5xl mb-6 group-hover:translate-x-1 transition-transform">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-8">
                    {p.desc}
                  </p>
                  <div className="flex items-center gap-2 eyebrow text-foreground">
                    View Case <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT */}
      <section id="achievement" className="relative py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-4">Achievement</div>
          <h2 className="display text-6xl md:text-8xl mb-20">Achievement</h2>
          <div className="space-y-px bg-border/40">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="grid grid-cols-12 gap-4 py-8 px-2 bg-background hover:bg-secondary/20 transition-colors group">
                  <div className="col-span-3 md:col-span-2">
                    <div className="eyebrow text-muted-foreground">{a.kind}</div>
                    <div className="font-serif text-2xl md:text-3xl mt-1">{a.year}</div>
                  </div>
                  <div className="col-span-9 md:col-span-7">
                    <h3 className="font-serif text-2xl md:text-3xl group-hover:translate-x-1 transition-transform">
                      {a.title}
                    </h3>
                  </div>
                  <div className="hidden md:flex md:col-span-3 items-center justify-end">
                    <span className="eyebrow text-muted-foreground">{a.place}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-32 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 smoke-bg" aria-hidden />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-5">
              <h2 className="display text-5xl md:text-7xl">
                THROUGH<br />
                <span className="text-foreground/40">CODE AND</span><br />
                CURIOSITY
              </h2>
            </div>
            <div className="md:col-span-2 flex justify-center my-10 md:my-0">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden grayscale border border-border">
                <img src={portrait} alt="" className="w-full h-full object-cover" style={{ filter: "grayscale(100%) brightness(0.7) contrast(1.1)" }} />
              </div>
            </div>
            <div className="md:col-span-5 md:text-right">
              <h2 className="display text-5xl md:text-7xl">
                WE BUILD<br />
                <span className="text-foreground/40">THE SOUL OF</span><br />
                THE MACHINE
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / WHAT I DO */}
      <section id="services" className="relative py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-4">What I Do</div>
          <h2 className="display text-6xl md:text-8xl mb-20">Practice</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border/40">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="bg-background p-10 md:p-12 h-full">
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-xs text-muted-foreground pt-2">{s.num}</span>
                    <div>
                      <div className="text-3xl mb-4">{s.icon}</div>
                      <h3 className="display text-3xl md:text-4xl mb-3">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6 md:px-10 grain overflow-hidden">
        <div className="absolute inset-0 -z-10 smoke-bg" aria-hidden />
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-4">Get in Touch</div>
          <h2 className="display text-6xl md:text-8xl mb-16">Feel the Craft</h2>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <ContactForm />
            </div>
            <div className="md:col-span-6 md:col-start-7 space-y-6">
              {[
                { icon: Mail, label: "aprajitayadav2901@gmail.com", href: "mailto:aprajitayadav2901@gmail.com" },
                { icon: Linkedin, label: "linkedin.com/in/aprajitay", href: "https://www.linkedin.com/in/aprajitay" },
                { icon: Github, label: "github.com/aprajitayadav2901-eng", href: "https://github.com/aprajitayadav2901-eng" },
                { icon: MapPin, label: "Delhi, India", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-5 hairline group"
                >
                  <div className="flex items-center gap-4">
                    <c.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="font-serif text-xl md:text-2xl">{c.label}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-10 hairline">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="eyebrow">© 2026 — Aprajita Yadav</div>
          <div className="display text-2xl md:text-3xl">Aprajita Yadav</div>
          <div className="flex gap-5">
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
                className="text-muted-foreground hover:text-foreground transition-colors"
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
    "w-full px-0 py-4 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors font-serif text-lg placeholder:text-muted-foreground/60";

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
      <div className="py-16 flex flex-col items-start">
        <CheckCircle2 className="w-8 h-8 mb-5" />
        <h3 className="display text-4xl mb-3">Message sent.</h3>
        <p className="text-sm text-muted-foreground mb-8 max-w-sm">
          Thank you for reaching out — a reply will arrive at your inbox shortly.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-ghost-mono">
          Send Another <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input required name="name" placeholder="Name" className={inputCls} />
      <input required type="email" name="email" placeholder="Email" className={inputCls} />
      <input name="subject" placeholder="Subject" className={inputCls} />
      <textarea required name="message" rows={4} placeholder="Tell me about your project…" className={`${inputCls} resize-none`} />

      {status === "error" && (
        <div className="flex items-start gap-2 text-xs text-destructive pt-3">
          <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
          <span>{errorMsg || "Failed to send. Please email me directly."}</span>
        </div>
      )}

      <div className="pt-6">
        <button type="submit" disabled={status === "loading"} className="btn-mono disabled:opacity-60">
          {status === "loading" ? (
            <>Sending <Loader2 className="w-3.5 h-3.5 animate-spin" /></>
          ) : (
            <>Get in Touch <ArrowUpRight className="w-3.5 h-3.5" /></>
          )}
        </button>
      </div>
    </form>
  );
}
