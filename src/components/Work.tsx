import { useState, useRef, CSSProperties } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowOutward } from "react-icons/md";
import { useScrollReveal } from "./utils/useScrollReveal";

const projects = [
  {
    title: "Live Zoom Transcription System",
    category: "Real-time AI Intelligence",
    tools: "Zoom API, N8N, Make.com",
    image: "https://i.postimg.cc/cJGjPfvH/zoom-final.png",
    link: ""
  },
  {
    title: "Custom White-Label CRM",
    category: "CRM Systems & Client Ops",
    tools: "Custom CRM, White-Label, Automations",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true
  },
  {
    title: "Car Dealership Chatbot",
    category: "High-Volume Customer AI",
    tools: "LangChain, RAG, Webhooks",
    image: "https://i.postimg.cc/4yrR8dqF/c-AR-DEALERSHIP.png",
    link: ""
  },
  {
    title: "AI Social Media Shorts Generator",
    category: "Automated Content Creation",
    tools: "Make.com, Python, APIs",
    image: "https://i.postimg.cc/bJ732h1D/Social-Media-Shorts-Generation.png",
    link: ""
  },
  {
    title: "HR AI Job Posting & Evaluation",
    category: "Workflow Automation",
    tools: "OpenAI, Scraping, Vector DBs",
    image: "https://i.postimg.cc/y8jQp2CG/HR-job-posting.png",
    link: ""
  },
  {
    title: "GoHighLevel Full Setup",
    category: "CRM Systems & Client Ops",
    tools: "GoHighLevel, Webhooks, Pipelines",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true
  },
  {
    title: "Financial Reports System",
    category: "Automated Dashboards",
    tools: "Google Sheets, Webhooks",
    image: "https://i.postimg.cc/hPg0FMr6/Payment-Processing-and-Order-Tracking-with-Google-Sheets.png",
    link: ""
  },
  {
    title: "RAG Knowledge Agents",
    category: "Intelligent Search & Support",
    tools: "Vector DBs, Python, Prompt Eng.",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true
  },
  {
    title: "AI Email Automation System",
    category: "Personalized Client Outreach",
    tools: "Email APIs, LangChain, N8N",
    image: "https://i.postimg.cc/ZYvQYf60/Email-Assistant.png",
    link: ""
  },
  {
    title: "Twitter/X Data Scraper",
    category: "Data Extraction & Market Intel",
    tools: "Python, Web Scraping",
    image: "https://i.postimg.cc/FFJrS5Ms/t-WEET-SCRAPER.png",
    link: ""
  },
  {
    title: "AI Newsletter Generator",
    category: "Content Pipeline",
    tools: "LLM APIs, Marketing Automation",
    image: "https://i.postimg.cc/ydcGVPbp/newsletter.png",
    link: ""
  },
  {
    title: "LinkedIn Scraper & Outreach",
    category: "Lead Generation",
    tools: "Scraping, CRM Integrations",
    image: "https://i.postimg.cc/nLLdyTn5/Linked-In-Scraper-Outreach-Booster.png",
    link: ""
  },
  {
    title: "LinkedIn Company Post Analyzer",
    category: "Data Intelligence",
    tools: "NLP, Python, AI Agents",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true
  },
  {
    title: "AI Voice Agents",
    category: "Conversational AI & Leads",
    tools: "VAPI, GoHighLevel, Custom LLMs",
    image: "https://i.ytimg.com/vi/1q6D5kjJ-uQ/hqdefault.jpg",
    link: "https://youtu.be/1q6D5kjJ-uQ"
  }
];

const INITIAL_COUNT = 6;
const ACCENTS = ["#d7ff3f", "#4fa8ff", "#b06bff"];

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  useScrollReveal(gridRef, [showAll]);

  const slides = projects.map((p) => ({
    src: p.isNDA ? "/images/Solidx.webp" : p.image,
    title: p.title,
    description: `${p.category} · ${p.tools}`,
  }));

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
                openLightbox={(idx) => setLightboxIndex(idx)}
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
                    onClick={() => setLightboxIndex(index)}
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

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom, Captions]}
        captions={{ descriptionTextAlign: "center" }}
        zoom={{
          maxZoomPixelRatio: 5,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
      />
    </div>
  );
};

export default Work;
