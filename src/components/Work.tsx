import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "1. Live Zoom Transcription System",
    category: "Real-time AI Intelligence",
    tools: "Zoom API, N8N, Make.com",
    image: "https://i.postimg.cc/cJGjPfvH/zoom-final.png",
    link: ""
  },
  {
    title: "2. Custom White-Label CRM",
    category: "CRM Systems & Client Ops",
    tools: "Custom CRM, White-Label, Automations",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true
  },
  {
    title: "3. AI Voice Agents",
    category: "Conversational AI & Leads",
    tools: "VAPI, GoHighLevel, Custom LLMs",
    image: "https://i.ytimg.com/vi/1q6D5kjJ-uQ/hqdefault.jpg",
    link: "https://youtu.be/1q6D5kjJ-uQ"
  },
  {
    title: "4. Car Dealership Chatbot",
    category: "High-Volume Customer AI",
    tools: "LangChain, RAG, Webhooks",
    image: "https://i.postimg.cc/4yrR8dqF/c-AR-DEALERSHIP.png",
    link: ""
  },
  {
    title: "5. AI Social Media Shorts Generator",
    category: "Automated Content Creation",
    tools: "Make.com, Python, APIs",
    image: "https://i.postimg.cc/bJ732h1D/Social-Media-Shorts-Generation.png",
    link: ""
  },
  {
    title: "6. HR AI Job Posting & Evaluation",
    category: "Workflow Automation",
    tools: "OpenAI, Scraping, Vector DBs",
    image: "https://i.postimg.cc/y8jQp2CG/HR-job-posting.png",
    link: ""
  },
  {
    title: "7. GoHighLevel Full Setup",
    category: "CRM Systems & Client Ops",
    tools: "GoHighLevel, Webhooks, Pipelines",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true
  },
  {
    title: "8. Financial Reports System",
    category: "Automated Dashboards",
    tools: "Google Sheets, Webhooks",
    image: "https://i.postimg.cc/hPg0FMr6/Payment-Processing-and-Order-Tracking-with-Google-Sheets.png",
    link: ""
  },
  {
    title: "9. RAG Knowledge Agents",
    category: "Intelligent Search & Support",
    tools: "Vector DBs, Python, Prompt Eng.",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true
  },
  {
    title: "10. AI Email Automation System",
    category: "Personalized Client Outreach",
    tools: "Email APIs, LangChain, N8N",
    image: "https://i.postimg.cc/ZYvQYf60/Email-Assistant.png",
    link: ""
  },
  {
    title: "11. Twitter/X Data Scraper",
    category: "Data Extraction & Market Intel",
    tools: "Python, Web Scraping",
    image: "https://i.postimg.cc/FFJrS5Ms/t-WEET-SCRAPER.png",
    link: ""
  },
  {
    title: "12. AI Newsletter Generator",
    category: "Content Pipeline",
    tools: "LLM APIs, Marketing Automation",
    image: "https://i.postimg.cc/ydcGVPbp/newsletter.png",
    link: ""
  },
  {
    title: "13. LinkedIn Scraper & Outreach",
    category: "Lead Generation",
    tools: "Scraping, CRM Integrations",
    image: "https://i.postimg.cc/nLLdyTn5/Linked-In-Scraper-Outreach-Booster.png",
    link: ""
  },
  {
    title: "14. LinkedIn Company Post Analyzer",
    category: "Data Intelligence",
    tools: "NLP, Python, AI Agents",
    image: "/images/Solidx.webp",
    link: "",
    isNDA: true
  }
];

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // Construct slides logic for Lightbox so we only show the current open slide initially
  const slides = (projects as any[]).map(p => ({ 
    src: p.isNDA ? "https://i.postimg.cc/dV3nMK9Y/nda-placeholder.png" : p.image 
  }));

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header-flex">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-nda-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <p>Some projects are under NDA and cannot be displayed here.</p>
          </div>
        </div>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {(projects as any[]).map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage 
                        image={project.image} 
                        alt={project.title} 
                        link={project.link} 
                        index={index}
                        isNDA={project.isNDA}
                        openLightbox={(idx) => setLightboxIndex(idx)} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox Trigger */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 5,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true
        }}
      />
    </div>
  );
};

export default Work;
