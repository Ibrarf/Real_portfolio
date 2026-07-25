import { useState, useRef, CSSProperties } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import ProjectModal from "./ProjectModal";
import { MdArrowOutward } from "react-icons/md";
import { useScrollReveal } from "./utils/useScrollReveal";

const projects = [
  {
    title: "Live Zoom Transcription System",
    category: "Real-time AI Intelligence",
    tools: "Zoom API, N8N, Make.com",
    image: "https://i.postimg.cc/cJGjPfvH/zoom-final.png",
    link: "",
    description:
      "Built to eliminate manual note-taking during client calls. Captures live speech from Zoom in real time and auto-populates presentation slides mid-meeting, then hands the full transcript to a Make.com pipeline that drafts the follow-up proposal automatically.",
  },
  {
    title: "Custom White-Label CRM",
    category: "CRM Systems & Client Ops",
    tools: "Custom CRM, White-Label, Automations",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true,
    description:
      "A fully white-labeled CRM built from the ground up so the client could resell it under their own brand, with backend automations handling pipeline management and client communication end to end.",
  },
  {
    title: "Car Dealership Chatbot",
    category: "High-Volume Customer AI",
    tools: "LangChain, RAG, Webhooks",
    image: "https://i.postimg.cc/4yrR8dqF/c-AR-DEALERSHIP.png",
    link: "",
    description:
      "Built to handle a high volume of repetitive customer questions for a car dealership, using RAG over the inventory and FAQ data so sales staff can focus on qualified leads instead of answering the same questions all day.",
  },
  {
    title: "AI Social Media Shorts Generator",
    category: "Automated Content Creation",
    tools: "Make.com, Python, APIs",
    image: "https://i.postimg.cc/bJ732h1D/Social-Media-Shorts-Generation.png",
    link: "",
    description:
      "Solves the bottleneck of manually editing and publishing short-form content by automating clip generation, captioning, and scheduling across platforms end to end.",
  },
  {
    title: "HR AI Job Posting & Evaluation",
    category: "Workflow Automation",
    tools: "OpenAI, Scraping, Vector DBs",
    image: "https://i.postimg.cc/y8jQp2CG/HR-job-posting.png",
    link: "",
    description:
      "Built to remove manual resume screening from hiring. Scores incoming candidates against the job description and CV, then schedules screening interviews automatically for the ones that qualify.",
  },
  {
    title: "GoHighLevel Full Setup",
    category: "CRM Systems & Client Ops",
    tools: "GoHighLevel, Webhooks, Pipelines",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true,
    description:
      "A complete GoHighLevel implementation built to replace a client's scattered spreadsheets and manual follow-ups with one automated pipeline covering funnels, communication sequences, and reporting.",
  },
  {
    title: "Financial Reports System",
    category: "Automated Dashboards",
    tools: "Google Sheets, Webhooks",
    image: "https://i.postimg.cc/hPg0FMr6/Payment-Processing-and-Order-Tracking-with-Google-Sheets.png",
    link: "",
    description:
      "Built to stop manual reconciliation of payments and orders. Pulls transaction data into Google Sheets automatically and keeps financial reporting current without anyone touching a spreadsheet by hand.",
  },
  {
    title: "RAG Knowledge Agents",
    category: "Intelligent Search & Support",
    tools: "Vector DBs, Python, Prompt Eng.",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true,
    description:
      "Built so support teams could get instant, accurate answers pulled from internal documentation instead of searching through scattered files and wikis for every question.",
  },
  {
    title: "AI Email Automation System",
    category: "Personalized Client Outreach",
    tools: "Email APIs, LangChain, N8N",
    image: "https://i.postimg.cc/ZYvQYf60/Email-Assistant.png",
    link: "",
    description:
      "Solves the problem of generic, one-size-fits-all outreach by generating personalized emails at scale for each client segment, based on their actual data instead of a single static template.",
  },
  {
    title: "Twitter/X Data Scraper",
    category: "Data Extraction & Market Intel",
    tools: "Python, Web Scraping",
    image: "https://i.postimg.cc/FFJrS5Ms/t-WEET-SCRAPER.png",
    link: "",
    description:
      "Built to track market and competitor signals automatically, pulling structured data from Twitter/X instead of relying on someone manually monitoring feeds every day.",
  },
  {
    title: "AI Newsletter Generator",
    category: "Content Pipeline",
    tools: "LLM APIs, Marketing Automation",
    image: "https://i.postimg.cc/ydcGVPbp/newsletter.png",
    link: "",
    description:
      "Built to remove the weekly bottleneck of writing newsletters by hand. Pulls source content, drafts a ready-to-send issue, and feeds it straight into the marketing automation pipeline.",
  },
  {
    title: "LinkedIn Scraper & Outreach",
    category: "Lead Generation",
    tools: "Scraping, CRM Integrations",
    image: "https://i.postimg.cc/nLLdyTn5/Linked-In-Scraper-Outreach-Booster.png",
    link: "",
    description:
      "Built to replace manual lead list building with automated LinkedIn scraping, feeding qualified prospects straight into the CRM with an outreach sequence already attached.",
  },
  {
    title: "LinkedIn Company Post Analyzer",
    category: "Data Intelligence",
    tools: "NLP, Python, AI Agents",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true,
    description:
      "Built to help a client understand what content actually performs on LinkedIn by analyzing competitor company posts automatically instead of tracking them by hand.",
  },
  {
    title: "AI Voice Agents",
    category: "Conversational AI & Leads",
    tools: "VAPI, GoHighLevel, Custom LLMs",
    image: "https://i.ytimg.com/vi/1q6D5kjJ-uQ/hqdefault.jpg",
    link: "https://youtu.be/1q6D5kjJ-uQ",
    description:
      "Built to handle inbound calls and qualify leads automatically around the clock, so the sales team only spends time on conversations that are actually worth having.",
  },
];

const INITIAL_COUNT = 6;
const ACCENTS = ["#d7ff3f", "#4fa8ff", "#b06bff"];

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  useScrollReveal(gridRef, [showAll]);

  return (
    <div className="work-section section-container" id="work">
      <div className="work-header-bar">
        <h2 className="display">Recent Projects</h2>
        <button
          className="view-all-link"
          onClick={() => setShowAll((v) => !v)}
          data-cursor="disable"
        >
          {showAll ? "See less" : "See all"} <MdArrowOutward />
        </button>
      </div>

      <div className="work-nda-note">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <p>Some projects are under NDA and cannot be displayed here.</p>
      </div>

      <div className="project-grid" ref={gridRef}>
        {visibleProjects.map((project, index) => (
          <div
            className="project-card reveal"
            key={project.title}
            style={{ "--card-accent": ACCENTS[index % ACCENTS.length] } as CSSProperties}
          >
            <div className="project-thumb">
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
                index={index}
                isNDA={project.isNDA}
                openLightbox={(idx) => setActiveIndex(idx)}
              />
            </div>
            <div className="project-body">
              <p className="project-tools mono">{project.tools}</p>
              <h4 className="project-title">{project.title}</h4>
              <p className="project-category">{project.category}</p>
              <div className="project-actions">
                {project.isNDA ? (
                  <span className="project-pill project-pill-disabled mono">NDA</span>
                ) : project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-pill mono"
                    data-cursor="disable"
                  >
                    Live &lt;-&gt;
                  </a>
                ) : (
                  <button
                    className="project-pill mono"
                    onClick={() => setActiveIndex(index)}
                    data-cursor="disable"
                  >
                    View &lt;-&gt;
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={activeIndex >= 0 ? projects[activeIndex] : null}
        onClose={() => setActiveIndex(-1)}
      />
    </div>
  );
};

export default Work;
