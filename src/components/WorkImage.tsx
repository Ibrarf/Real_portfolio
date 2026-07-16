import { useState } from "react";
import { MdFullscreen } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  index: number;
  isNDA?: boolean;
  openLightbox: (idx: number) => void;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const isYouTube = props.link?.includes("youtu");

  // Determine click action: If it's a Youtube link, act normally. Otherwise, open the lightbox.
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.isNDA) {
      e.preventDefault();
      return;
    }
    if (!isYouTube) {
      e.preventDefault();
      props.openLightbox(props.index);
    }
  };

  if (props.isNDA) {
    return (
      <div className="work-image nda-container">
        <div className="nda-placeholder">
          <div className="nda-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              <line x1="12" y1="15" x2="12" y2="18"></line>
            </svg>
          </div>
          <div className="nda-text">
            <h5>CANT DISPLAY</h5>
            <p>DUE TO NDA ISSUE</p>
          </div>
          <div className="nda-badge">Confidential</div>
        </div>
      </div>
    );
  }

  return (
    <div className="work-image" style={{ position: "relative", width: "100%", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <a
        className="work-image-in"
        href={isYouTube ? props.link : "#"}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target={isYouTube ? "_blank" : "_self"}
        data-cursor={isYouTube ? "disable" : "pointer"}
        style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", position: "relative", minWidth: 0, cursor: isYouTube ? "pointer" : "zoom-in" }}
      >
        {!isYouTube && (
          <div className="work-link">
            <MdFullscreen />
          </div>
        )}
        <img 
          src={props.image} 
          alt={props.alt} 
          style={{ width: "100%", height: "350px", objectFit: "contain", borderRadius: "8px" }} 
        />
        {isYouTube && (
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#FF0000", fontSize: "5rem", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))" }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
          </div>
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
