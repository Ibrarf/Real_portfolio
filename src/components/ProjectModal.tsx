import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import "./styles/ProjectModal.css";

interface Project {
  title: string;
  category: string;
  tools: string;
  image: string;
  description?: string;
  isNDA?: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // Only touch overflow-y, and restore it to the value the smooth-scroll
    // setup actually relies on ("auto") rather than clearing it. The
    // `overflow` shorthand sets BOTH overflow-x/-y as inline styles, so
    // clearing it afterward wiped out the overflow-y:auto that Navbar sets
    // up for GSAP ScrollSmoother, and body fell back to the stylesheet's
    // base `overflow: hidden` — which blocks all scroll/wheel input until a
    // full reload re-applies the inline override.
    document.body.style.overflowY = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflowY = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  const tags = [project.category, ...project.tools.split(",").map((t) => t.trim())];

  // Rendered via a portal straight onto <body> — this component mounts inside
  // GSAP ScrollSmoother's transformed content wrapper, and a `transform` on
  // any ancestor turns `position: fixed` into "fixed to that ancestor"
  // instead of the viewport. Without the portal, the backdrop and modal
  // ended up positioned thousands of pixels off-screen, scaled to the whole
  // scrollable page instead of the visible viewport.
  return createPortal(
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close"
          data-cursor="disable"
        >
          <MdClose />
        </button>

        <div className="project-modal-image-wrap">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-modal-body">
          <h3 className="project-modal-title">{project.title}</h3>
          <p className="project-modal-desc">{project.description}</p>
          <div className="project-modal-tags">
            {tags.map((tag) => (
              <span className="project-modal-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
