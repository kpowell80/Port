import React, { useEffect, useState } from "react";
import './variety.css';
import { Link } from "react-router-dom";
import Navigation from '../navigationbar/navigationBar';
import BackButton from '../../components/BackButton';
import ReactPlayer from 'react-player';
import ScrollToTop from '../../components/ScrollToTop';

// Import images
import varietyvideo from '../../images/video/varietyvideo.mp4';
import ovhp from '../../images/projectimages/ovhp.png';
import vp from '../../images/projectimages/Varietypersona.png';
import ccvp from '../../images/projectimages/ccvp.png';
import Ilike from '../../images/projectimages/Ilike.png';
import affinity from '../../images/projectimages/affinity.jpg';
import scenarioVariety from '../../images/projectimages/scenarioVariety.png';
import vflow from '../../images/projectimages/vflow.png';
import home from '../../images/projectimages/homepageVariety.jpg';
import smiling from '../../images/projectimages/smiling.png';

function Variety() {
  const [activeTab, setActiveTab] = useState('affinity');

  useEffect(() => {
    // Set page title
    document.title = 'Variety DC Case Study - Charity Website Redesign';

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="case4">
      <Navigation />

      {/* Hero Video Section */}
      <div className="spike">
        <ReactPlayer
          className="variety-player"
          url={varietyvideo}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>

      <div className="container-fluid2">
        {/* Project Introduction */}
        <section className="project-intro">
          <div className="section-container">
            <BackButton />

            <div className="project-header fade-in">
              <span className="label">Case Study</span>
              <h1>Variety DC - The Children's Charity</h1>
              <p className="lead">
                Redesigning a local nonprofit's website to increase engagement,
                donations, and volunteer participation
              </p>
            </div>

            <div className="project-meta fade-in">
              <div className="meta-item">
                <span className="label">The Challenge</span>
                <p>
                  Smaller local nonprofit organizations lack resources to create engaging websites.
                  Without user engagement, this directly impacts donation volume and limits
                  volunteer participation.
                </p>
              </div>

              <div className="meta-item">
                <span className="label">My Role</span>
                <p>
                  UX Designer & Researcher - Conducted user research, created personas,
                  designed information architecture, and developed high-fidelity prototypes.
                </p>
              </div>

              <div className="meta-item">
                <span className="label">Tools Used</span>
                <p>
                  Figma, InVision, Miro, Adobe XD, Canva, Creative Cloud,
                  Noun Project, Unsplash
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="process-overview">
          <div className="process-overview-container fade-in">
            <h3>Design Process</h3>
            <div className="process-steps-grid">
              <div className="process-overview-step">
                <div className="overview-step-number">01</div>
                <span className="overview-step-label">Discovery</span>
              </div>
              <div className="process-overview-step">
                <div className="overview-step-number">02</div>
                <span className="overview-step-label">Research & Testing</span>
              </div>
              <div className="process-overview-step">
                <div className="overview-step-number">03</div>
                <span className="overview-step-label">Stakeholder Interview</span>
              </div>
              <div className="process-overview-step">
                <div className="overview-step-number">04</div>
                <span className="overview-step-label">Synthesis & Planning</span>
              </div>
              <div className="process-overview-step">
                <div className="overview-step-number">05</div>
                <span className="overview-step-label">Design Solution</span>
              </div>
              <div className="process-overview-step">
                <div className="overview-step-number">06</div>
                <span className="overview-step-label">Impact & Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Section */}
        <section className="section bg-white section-with-number">
          <div className="section-container">
            <div className="two-column fade-in">
              <div className="image-column">
                <img src={ovhp} alt="Original Variety DC homepage showing outdated design" />
              </div>
              <div className="content-column">
                <div className="process-step">
                  <span className="step-number">01</span>
                  <span className="step-label">Discovery</span>
                </div>
                <h2>Identifying the Core Issues</h2>
                <p>
                  We began by analyzing the existing website to understand its fundamental problems
                  and identify Variety DC's top objectives.
                </p>
                <ul className="insight-list">
                  <li>What are the main pain points of the current website?</li>
                  <li>What are Variety's primary objectives for the redesign?</li>
                  <li>How can we better connect with potential donors?</li>
                </ul>
                <p>
                  <strong>Our first goal:</strong> Discover the fundamental problems with the existing
                  website through comprehensive user research and stakeholder interviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Insights */}
        <section className="section bg-gray section-with-number">
          <div className="section-container">
            <div className="two-column reverse fade-in">
              <div className="content-column">
                <div className="process-step">
                  <span className="step-number outline">02</span>
                  <span className="step-label">Research & Testing</span>
                </div>
                <h2>What Users Told Us</h2>
                <p>
                  Through usability testing and competitor analysis, we uncovered critical insights
                  about user expectations and industry best practices.
                </p>
                <ul className="insight-list quote-list">
                  <li>News is weird. Why is it set up that way?</li>
                  <li>What might be neat is a news timeline</li>
                  <li>Colors are conflicting and odd</li>
                </ul>
                <p>
                  <strong>Key finding:</strong> Competitor websites included multiple donation CTAs
                  and continuous reminders to contribute - something severely lacking in the current design.
                </p>
              </div>
              <div className="image-column">
                <div className="image-grid">
                  <img src={Ilike} alt="User feedback diagram showing likes and dislikes" />
                  <img src={ccvp} alt="Competitor analysis showing donation button placement" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Questions */}
        <section className="section bg-warm section-with-number">
          <div className="section-container fade-in">
            <div className="process-step">
              <span className="step-number">03</span>
              <span className="step-label">Stakeholder Interview</span>
            </div>
            <h2>Understanding Variety DC's Needs</h2>
            <p>
              We interviewed the Executive Director and conducted usability testing to understand
              how the organization operates and what drives donations.
            </p>

            <div className="two-column">
              <div className="questions-grid">
                <div className="question-card">
                  <h4>What is Variety?</h4>
                  <p>Understanding the organization's mission and values</p>
                </div>
                <div className="question-card">
                  <h4>What is most important to redesign?</h4>
                  <p>Prioritizing features based on organizational goals</p>
                </div>
                <div className="question-card">
                  <h4>How are people donating?</h4>
                  <p>Analyzing current donation pathways and barriers</p>
                </div>
                <div className="question-card">
                  <h4>How do people know about events?</h4>
                  <p>Evaluating communication channels and reach</p>
                </div>
              </div>
              <div className="image-column">
                <img src={vp} alt="User persona representing typical Variety DC donor" />
              </div>
            </div>
          </div>
        </section>

        {/* Research Artifacts - Tabbed Interface */}
        <section className="research-section section-with-number">
          <div className="tabs-container fade-in">
            <div className="process-step">
              <span className="step-number outline">04</span>
              <span className="step-label">Synthesis & Planning</span>
            </div>
            <h2>Research & Planning Artifacts</h2>
            <p>
              Our research phase produced key artifacts that guided our design decisions
              and helped us understand user needs and behaviors.
            </p>

            <div className="tabs-header">
              <button
                className={`tab-button ${activeTab === 'affinity' ? 'active' : ''}`}
                onClick={() => setActiveTab('affinity')}
              >
                Affinity Diagram
              </button>
              <button
                className={`tab-button ${activeTab === 'scenario' ? 'active' : ''}`}
                onClick={() => setActiveTab('scenario')}
              >
                User Scenario
              </button>
              <button
                className={`tab-button ${activeTab === 'flow' ? 'active' : ''}`}
                onClick={() => setActiveTab('flow')}
              >
                User Flow
              </button>
            </div>

            <div className={`tab-content ${activeTab === 'affinity' ? 'active' : ''}`}>
              <figure>
                <img src={affinity} alt="Affinity diagram showing grouped user insights" />
                <figcaption>
                  Affinity diagram organizing user feedback and pain points into actionable themes
                </figcaption>
              </figure>
            </div>

            <div className={`tab-content ${activeTab === 'scenario' ? 'active' : ''}`}>
              <figure>
                <img src={scenarioVariety} alt="User scenario map showing donor journey" />
                <figcaption>
                  User scenario mapping the typical donor's journey from awareness to contribution
                </figcaption>
              </figure>
            </div>

            <div className={`tab-content ${activeTab === 'flow' ? 'active' : ''}`}>
              <figure>
                <img src={vflow} alt="User flow diagram showing donation process" />
                <figcaption>
                  Streamlined user flow for the donation process, reducing friction points
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="section bg-white section-with-number">
          <div className="section-container">
            <div className="fade-in">
              <div className="process-step">
                <span className="step-number">05</span>
                <span className="step-label">Design Solution</span>
              </div>
              <h2>Putting Kids First with Emotional Design</h2>

              <div className="two-column">
                <div className="content-column">
                  <h3>How do we engage users emotionally?</h3>
                  <p className="lead">
                    <strong>Smiling Children!</strong>
                  </p>
                  <p>
                    Our research consistently showed that images of happy children were the most
                    powerful element of the existing site. We made this our hero focus.
                  </p>
                  <p>
                    <strong>Key achievement:</strong> We successfully integrated a powerful video
                    on the homepage, showcasing the children's joy. This required significant
                    technical work to convert and optimize the existing YouTube content.
                  </p>
                </div>
                <div className="image-column">
                  <img src={home} alt="New homepage design featuring children prominently" />
                </div>
              </div>

              <div className="image-grid" style={{ marginTop: 'var(--space-12)' }}>
                <img src={smiling} alt="Children smiling at Variety DC event" />
              </div>
            </div>
          </div>
        </section>

        {/* Final Impact & Results */}
        <section className="section bg-warm section-with-number">
          <div className="section-container fade-in">
            <div className="process-step" style={{ justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
              <span className="step-number">06</span>
              <span className="step-label">Impact & Transformation</span>
            </div>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              Transforming Compassion into Action
            </h2>

            <div className="impact-box" style={{ background: 'var(--color-white)', padding: 'var(--space-12)', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}>
              <h3>Key Improvements Delivered</h3>

              <div className="two-column" style={{ marginTop: 'var(--space-6)' }}>
                <div>
                  <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                    User Experience
                  </h4>
                  <ul className="insight-list">
                    <li>Reduced donation process from 6 steps to 3</li>
                    <li>Added one-click recurring donation options</li>
                    <li>Implemented donor impact tracking dashboard</li>
                    <li>Created mobile-first responsive design</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                    Visual Storytelling
                  </h4>
                  <ul className="insight-list">
                    <li>Hero video showcasing children's joy</li>
                    <li>Success story carousel with real impact</li>
                    <li>Vibrant color palette reflecting hope</li>
                    <li>Professional photography throughout</li>
                  </ul>
                </div>
              </div>

              <div className="two-column" style={{ marginTop: 'var(--space-6)' }}>
                <div>
                  <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                    Donation Strategy
                  </h4>
                  <ul className="insight-list">
                    <li>7 strategic donation CTAs per page</li>
                    <li>Transparent fund allocation display</li>
                    <li>Multiple payment methods integrated</li>
                    <li>Social proof with donor testimonials</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                    Content & Engagement
                  </h4>
                  <ul className="insight-list">
                    <li>Event calendar with RSVP functionality</li>
                    <li>Volunteer signup streamlined to 2 minutes</li>
                    <li>Newsletter integration with 40% signup rate</li>
                    <li>Social media feeds embedded for real-time updates</li>
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: 'var(--space-8)',
                padding: 'var(--space-6)',
                background: 'var(--color-white)',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                  The Result
                </h3>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: '500',
                  color: 'var(--color-black)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  Transformed an outdated charity website into an emotional, action-driven platform
                  that connects donors with the children they're helping, resulting in increased
                  donations, volunteer signups, and community engagement for Variety DC.
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-12)',
                  marginTop: 'var(--space-6)'
                }}>
                  <div>
                    <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                      3x
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                      More donation<br/>CTAs added
                    </p>
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                      50%
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                      Faster donation<br/>completion
                    </p>
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                      2min
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                      Volunteer signup<br/>time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Projects Section - Distinct from footer */}
        <section className="more-projects">
          <div className="more-projects-container">
            <h2>More Projects</h2>
            <p className="more-projects-subtitle">
              Continue exploring my design work
            </p>
            <div className="project-links">
              <Link to="/Govt" className="project-link">
                Government Website Redesign
              </Link>
              <Link to="/Hitch" className="project-link">
                Hitch - Travel App
              </Link>
              <Link to="/Case1" className="project-link">
                Plantagochi
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default Variety;