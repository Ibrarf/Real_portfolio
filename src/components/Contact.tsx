import { MdArrowOutward, MdCheckCircle, MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-split">
                    {/* LEFT SIDE */}
                    <div className="contact-left">
                        <h2 className="contact-heading title">
                            Stop losing revenue<br />
                            <span>to broken systems.</span>
                        </h2>
                        <p className="contact-desc para">
                            In a free 30-minute strategy call, I'll map out exactly where AI can save you time, cut costs, and scale your operations.
                        </p>

                        <div className="contact-stats">
                            <div className="stat">
                                <h3>60%</h3>
                                <p>FASTER RESPONSE</p>
                            </div>
                            <div className="stat">
                                <h3>15+</h3>
                                <p>HOURS SAVED / WEEK</p>
                            </div>
                            <div className="stat">
                                <h3>10K+</h3>
                                <p>CALLS AUTOMATED</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="contact-right">
                        <div className="strategy-card-wrapper">
                            <div className="strategy-card">
                                <div className="card-header">
                                    <div className="badge green-badge">
                                        <span className="dot green-dot"></span> AVAILABLE NOW
                                    </div>
                                    <div className="card-price">
                                        <span className="card-price-value">$500 value</span>
                                        <strong>FREE</strong>
                                    </div>
                                </div>

                                <h3>Free Automation Strategy Call</h3>
                                <p>In 30 minutes, you'll get a custom roadmap showing exactly which workflows to automate first.</p>

                                <ul className="card-features">
                                    <li>
                                        <MdCheckCircle className="check-icon" />
                                        <span><strong>Workflow Audit:</strong> Identify your 3 highest-impact opportunities</span>
                                    </li>
                                    <li>
                                        <MdCheckCircle className="check-icon" />
                                        <span><strong>ROI Projection:</strong> Exact time and cost savings calculation</span>
                                    </li>
                                    <li>
                                        <MdCheckCircle className="check-icon" />
                                        <span><strong>Implementation Roadmap:</strong> 90-day priority action plan</span>
                                    </li>
                                    <li>
                                        <MdCheckCircle className="check-icon" />
                                        <span><strong>No obligation:</strong> Walk away with value either way</span>
                                    </li>
                                </ul>

                                <a href="https://calendly.com/ibrarfv/30min" target="_blank" className="book-btn" data-cursor="disable">
                                    <div className="btn-text">
                                        <strong>Book Your Free Call</strong>
                                        <span>30 min · No obligation</span>
                                    </div>
                                    <div className="btn-arrow"><MdArrowOutward /></div>
                                </a>
                            </div>
                        </div>

                        <div className="social-cards">
                            <a href="mailto:ibrarfv@gmail.com" target="_blank" data-cursor="disable" className="social-card sc-gmail">
                                <MdOutlineEmail className="sc-icon" />
                                <span>Gmail</span>
                            </a>
                            <a href="https://wa.me/923355026885" target="_blank" data-cursor="disable" className="social-card sc-whatsapp">
                                <FaWhatsapp className="sc-icon" />
                                <span>WhatsApp</span>
                            </a>
                            <a href="https://www.linkedin.com/in/ibraahimarif/" target="_blank" data-cursor="disable" className="social-card sc-linkedin">
                                <FaLinkedinIn className="sc-icon" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

