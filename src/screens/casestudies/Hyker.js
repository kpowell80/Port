import { useEffect } from "react";
import './hyker.css';
import { Link } from 'react-router-dom';
import Navigation from '../navigationbar/navigationBar';
import BackButton from '../../components/BackButton';
import ScrollToTop from '../../components/ScrollToTop';
import hhMiro from '../../images/projectimages/miroH.png';

function Hyker() {
  useEffect(() => {
    document.title = 'Hyker - Travel & Discovery Platform';

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

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="case-hyker">
      <Navigation />

      <div className="hero-image-hyker">
        <div className="hero-text-hyker">
          <h3>Project</h3>
          <h1>Hyker</h1>
          <p className="hero-subtitle">Travel & Discovery Platform · Live Build in Progress</p>
        </div>
      </div>

      {/* Project Introduction */}
      <section className="project-intro">
        <div className="section-container">
          <BackButton />

          <div className="project-header fade-in">
            <div className="dev-notice">
              <h5>Hyker is currently in active development. This case study reflects the product vision, system design, and build in progress.</h5>
            </div>
            <h1>Building a Travel Discovery Platform from the Ground Up</h1>
          </div>

          <div className="project-meta fade-in">
            <div className="meta-item">
              <span className="label">The Project</span>
              <p>
                Hyker is a travel and discovery platform designed to help people find meaningful, transportive experiences—without the overwhelm of traditional travel planning tools.
              </p>
              <p>
                The goal is to move beyond generic recommendations and create a system that feels curated, intuitive, and deeply personal.
              </p>
            </div>

            <div className="meta-item">
              <span className="label">The Vision</span>
              <p>
                Most travel platforms optimize for volume—more options, more lists, more noise.
              </p>
              <p>
                Hyker takes a different approach.
              </p>
              <p>
                It brings together city guides, restaurants, hotels, cultural experiences, itineraries, and personal recommendations into a single, curated ecosystem designed to help users discover what actually matters.
              </p>
              <p>The platform sits at the intersection of:</p>
              <ul className="role-list">
                <li>Editorial storytelling</li>
                <li>Structured data</li>
                <li>Personalized discovery</li>
              </ul>
            </div>

            <div className="meta-item">
              <span className="label">My Role</span>
              <p>Founder, designer, and developer leading the full build:</p>
              <ul className="role-list">
                <li>Product concept and UX strategy</li>
                <li>End-to-end UI design system</li>
                <li>Full React application architecture</li>
                <li>Content structure and data modeling</li>
                <li>AI-driven discovery and recommendation logic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-white">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number">01</span>
            <span className="step-label">Approach</span>
          </div>
          <h2>Designing for Discovery Over Search</h2>

          <p>
            Hyker is being built with a focus on how people actually explore and decide, not just how platforms traditionally present information.
          </p>

          <ul className="role-list">
            <li>Designing for discovery over search</li>
            <li>Structuring content to feel curated, not overwhelming</li>
            <li>Building flexible systems that allow content to scale across cities and categories</li>
            <li>Integrating AI to enhance—not replace—the user's sense of exploration</li>
          </ul>

          <p>
            The goal is to create an experience that feels less like a tool and more like a trusted guide.
          </p>
        </div>
      </section>

      {/* What I'm Building */}
      <section className="section bg-gray">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number outline">02</span>
            <span className="step-label">Development</span>
          </div>
          <h2>What I'm Building</h2>

          <div className="two-column">
            <div className="content-column">
              <h3>Features</h3>
              <ul className="role-list">
                <li>A full React-based web application with modular architecture</li>
                <li>A structured content system across cities, restaurants, hotels, and experiences</li>
                <li>Personalized discovery features powered by AI</li>
                <li>Dynamic search and navigation across multiple categories</li>
                <li>A scalable design system that supports editorial and functional content</li>
              </ul>
            </div>

            <div className="content-column">
              <h3>Tech Stack</h3>
              <ul className="role-list">
                <li>React.js (hooks, component architecture)</li>
                <li>JavaScript (ES6+)</li>
                <li>Node / API integration</li>
                <li>MongoDB (structured content + scaling data model)</li>
                <li>AI/ML integration (recommendation logic)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Progress */}
      <section className="section bg-white">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number">03</span>
            <span className="step-label">Progress</span>
          </div>
          <h2>Current Progress</h2>

          <ul className="role-list">
            <li>Core React architecture established</li>
            <li>Design system defined (typography, layout, structure)</li>
            <li>Initial city + content models created</li>
            <li>Search / discovery flows mapped</li>
            <li>AI recommendation logic in development</li>
          </ul>

          <div className="hyker-image-wrapper">
            <img src={hhMiro} alt="Hyker design process and system mapping" />
            <p>Early system mapping and UX architecture for Hyker's discovery flows</p>
          </div>
        </div>
      </section>

      {/* Impact & Transformation */}
      <section className="section bg-warm">
        <div className="section-container fade-in">
          <div className="process-step" style={{ justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
            <span className="step-number outline">04</span>
            <span className="step-label">Impact & Transformation</span>
          </div>

          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            Reimagining How People Discover and Plan Travel
          </h2>

          <div className="impact-box">
            <h3>Key Improvements Delivered</h3>

            <div className="two-column" style={{ marginTop: 'var(--space-6)' }}>
              <div>
                <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                  Discovery & Planning
                </h4>
                <ul className="insight-list">
                  <li>AI-powered personalized recommendations</li>
                  <li>Curated city guides with local insights</li>
                  <li>Multi-category search across experiences</li>
                  <li>Saved itineraries with smart suggestions</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                  Safety & Community
                </h4>
                <ul className="insight-list">
                  <li>Real-time trail conditions and alerts</li>
                  <li>User-generated safety updates and tips</li>
                  <li>Community reviews and recommendations</li>
                  <li>Emergency contact integration for outdoor activities</li>
                </ul>
              </div>
            </div>

            <div className="two-column" style={{ marginTop: 'var(--space-6)' }}>
              <div>
                <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                  Content & Experience
                </h4>
                <ul className="insight-list">
                  <li>Editorial storytelling meets structured data</li>
                  <li>Rich media galleries and video integration</li>
                  <li>Detailed venue information and booking links</li>
                  <li>Seasonal recommendations and trending spots</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                  Technical Architecture
                </h4>
                <ul className="insight-list">
                  <li>Scalable React.js component system</li>
                  <li>MongoDB for flexible content modeling</li>
                  <li>API integration for real-time updates</li>
                  <li>Mobile-responsive design for on-the-go use</li>
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
                The Vision
              </h3>
              <p style={{
                fontSize: 'var(--text-lg)',
                fontWeight: '500',
                color: 'var(--color-black)',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Building a travel platform that prioritizes meaningful discovery over overwhelming choice.
                Hyker combines AI-powered recommendations, editorial curation, and community insights to
                help travelers find experiences that truly resonate—making exploration feel guided, not generic.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-12)',
                marginTop: 'var(--space-6)'
              }}>
                <div>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                    Full-Stack
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                    React & MongoDB<br/>build
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                    AI-Powered
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                    Personalized<br/>discovery
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                    Live
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                    Active development<br/>in progress
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-8)' }}>
              <h3>Key Takeaway</h3>
              <p>
                Hyker represents a fundamental rethinking of travel platforms—moving away from overwhelming
                lists toward curated, personalized discovery. By combining editorial storytelling with AI
                recommendations and community insights, the platform creates a travel planning experience
                that feels less like searching and more like being guided by a trusted local friend.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                <strong>Note:</strong> Hyker is currently in active development. A full case study will be
                published as the platform evolves. Private demo available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="more-projects">
        <div className="more-projects-container">
          <h2>More Projects</h2>
          <p className="more-projects-subtitle">
            Continue exploring my design work
          </p>
          <div className="project-links">
            <Link to="/AllSeasons" className="project-link">
              All Seasons - Full React Build
            </Link>
            <Link to="/Variety" className="project-link">
              Variety DC - Charity Redesign
            </Link>
            <Link to="/Govt" className="project-link">
              Government Website Redesign
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

export default Hyker;
