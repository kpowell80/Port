import { useEffect } from "react";
import './allseasons.css';
import { Link } from 'react-router-dom';
import Navigation from '../navigationbar/navigationBar';
import BackButton from '../../components/BackButton';
import ReactPlayer from 'react-player';
import aSeasonsVideo from '../../images/video/aSeasonsVideo2.mp4';
import SnowfallEffects from '../../components/SnowfallEffects';
import ScrollToTop from '../../components/ScrollToTop';

// Import old website images for before/after comparison
import allseasonsOLD from '../../images/projectimages/allseasonsOLD.jpeg';
import aslOld1 from '../../images/projectimages/aslOld1.jpg';

function AllSeasons() {
  useEffect(() => {
    // Set page title
    document.title = 'All Seasons Landscaping - Full React Build';

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

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="case-allseasons">
      <SnowfallEffects />
      <Navigation />

      {/* Hero Section */}
      <div className="hero-wrapper-allseasons">
        <ReactPlayer
          className="allseasons-video"
          url={aSeasonsVideo}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <div className="hero-text-allseasons">
          <h3>Project</h3>
          <h1>All Seasons Landscaping</h1>
          <p className="hero-subtitle">Full React Build & Brand Transformation · 2024</p>
        </div>
      </div>

      {/* Project Introduction */}
      <section className="project-intro">
        <div className="section-container">
          <BackButton />

          <div className="project-header fade-in">
            <span className="label">Case Study</span>
            <h1>Bringing a 33-Year-Old Sun Valley Brand into the Modern Web</h1>
            <p className="lead">
              A complete website redesign and rebuild for All Seasons Landscaping — a landscape design/build firm with 60+ employees serving Sun Valley, Hailey, Ketchum, and the Wood River Valley since 1991.
            </p>
          </div>

          <div className="project-meta fade-in">
            <div className="meta-item">
              <span className="label">The Challenge</span>
              <p>
                All Seasons is a respected, well-established business — but their digital presence didn't match the quality of their craftsmanship or the premium market they serve. The existing site was an outdated React deployment that was text-heavy, lacked visual storytelling, and didn't communicate what actually made the company different: a 60+ person local crew, decades of expertise, and a "we figure it out" approach to property management problems most other firms turn down.
              </p>
            </div>

            <div className="meta-item">
              <span className="label">My Role</span>
              <p>
                Solo designer and developer, leading the full project lifecycle from research through deployment as a paid freelance engagement.
              </p>
              <ul className="role-list">
                <li>Brand identity and UI system design</li>
                <li>Custom React development</li>
                <li>Content strategy and site architecture</li>
                <li>On-site research, photography direction, and client interviews</li>
                <li>SEO structure and deployment</li>
                <li>Third-party platform integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Approach */}
      <section className="section bg-white">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number">01</span>
            <span className="step-label">Research & Discovery</span>
          </div>
          <h2>Understanding the Business from the Ground Up</h2>

          <p>
            To build something that actually represented the company, I traveled to Sun Valley, Idaho to work directly with the team in person.
          </p>

          <ul className="role-list">
            <li>Met with leadership to understand business goals, positioning, and market context</li>
            <li>Visited active job sites to see the work, crews, and materials firsthand</li>
            <li>Interviewed long-tenured team members (including Luke, who shaped the eco/naturalistic content strategy, and Chris, who informed the maintenance offering)</li>
            <li>Gathered original photography, project examples, and direct client testimonials</li>
            <li>Audited the existing site to identify content gaps and missed conversion opportunities</li>
          </ul>

          <p style={{ marginTop: 'var(--space-6)' }}>
            This shaped every decision that followed. One example: the team explained that property managers come to All Seasons because "they don't say no — they figure it out." That insight reframed the entire Property Management page away from generic eco-talk and toward a "one call handles everything outside" positioning the owner felt was finally accurate.
          </p>

          {/* Before images showing the old website */}
          <div className="two-column" style={{ marginTop: 'var(--space-8)' }}>
            <div className="image-column">
              <figure>
                <h3 style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>Original Homepage</h3>
                <img src={allseasonsOLD} alt="Old All Seasons website homepage" style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  border: '2px solid var(--color-gray-300)',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} />
                <figcaption style={{ textAlign: 'center', marginTop: 'var(--space-2)', color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                  Text-heavy, outdated design lacking visual impact
                </figcaption>
              </figure>
            </div>
            <div className="image-column">
              <figure>
                <h3 style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>Original Navigation</h3>
                <img src={aslOld1} alt="Old All Seasons website navigation" style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  border: '2px solid var(--color-gray-300)',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} />
                <figcaption style={{ textAlign: 'center', marginTop: 'var(--space-2)', color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                  Confusing navigation structure and poor information hierarchy
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section bg-gray">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number outline">02</span>
            <span className="step-label">Design & Development</span>
          </div>
          <h2>Building a Modern Digital Experience</h2>

          <p>
            Rebuilt the site from the ground up in React, replacing a static, text-heavy experience with a visual, mobile-first platform built around the work.
          </p>

          <div className="two-column">
            <div className="content-column">
              <h3>Design Solutions</h3>
              <ul className="role-list">
                <li>Established a complete brand color system rooted in the Sun Valley landscape — Sunlit Gold, Evergreen, Bark Brown, Sky Blue, Fireweed Red, Bloom Pink</li>
                <li>Designed a clean, editorial UI system without gradients, with consistent typography, spacing, and interaction patterns</li>
                <li>Replaced emoji icons with editorial typography for a more elevated feel</li>
                <li>Built service-specific pages (Residential, Property Management, Maintenance, Snow, Holiday Lighting, Tree Services, Fire Pits, Water Features, Naturalistic Design, and more) that share a consistent visual system</li>
                <li>Created interactive team bio cards that reveal staff photos on hover</li>
              </ul>
            </div>

            <div className="content-column">
              <h3>Technical Implementation</h3>
              <ul className="role-list">
                <li>Custom React component library with reusable, prop-driven patterns (PropertyComponent, ResidentialComponent, AspireCTA, ContentSplitSections, HeroSection, CTASection, etc.) — most components support multiple size and layout variants</li>
                <li>Centralized CSS design token system in root.css with semantic color variables and transparency utilities, making the entire palette themeable from one source</li>
                <li>Responsive navigation with priority-navigation pattern (full menu on desktop, "More" dropdown on mid-size screens, hamburger on mobile)</li>
                <li>Mobile-first responsive design across all breakpoints</li>
                <li>Accessibility considerations including skip-to-content navigation, semantic HTML, focus states, reduced-motion support, and high-contrast mode</li>
                <li>SEO-optimized structure, metadata, and content hierarchy</li>
              </ul>
            </div>
          </div>

          <div className="content-column" style={{ marginTop: 'var(--space-6)' }}>
            <h3>Third-Party Integrations</h3>
            <ul className="role-list">
              <li>Aspire client portal — built a flexible AspireCTA component with three variants (navbar link, standard CTA, full card) so clients can access their project dashboard from anywhere on the site</li>
              <li>BambooHR — embedded job application flow on the Careers page so applicants can apply without leaving the site</li>
              <li>Analytics tracking integration so the client can monitor performance over time</li>
            </ul>
          </div>

          <div className="meta-item" style={{ marginTop: 'var(--space-8)' }}>
            <span className="label">Tech Stack</span>
            <p>React.js · React Router · JavaScript (ES6+) · HTML/CSS · CSS Custom Properties · Git · Responsive Design</p>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="section bg-warm">
        <div className="section-container fade-in">
          <div className="process-step" style={{ justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
            <span className="step-number">03</span>
            <span className="step-label">Outcome</span>
          </div>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            A Platform Built to Grow With the Business
          </h2>

          <div className="impact-box">
            <h3>Delivered</h3>

            <ul className="role-list" style={{ marginTop: 'var(--space-4)' }}>
              <li>Fully custom React build, live at allseasons.info</li>
              <li>15+ service and content pages (Home, Residential, Property Management, Maintenance, Snow, Holiday Lighting, Tree Services, Fire Pits, Water Features, Naturalistic Design, Team, Careers, Apply, Gallery, Contact)</li>
              <li>Reusable component library supporting future page expansion without rework</li>
              <li>Complete brand identity system applied consistently across the site</li>
              <li>Centralized design token system enabling fast theme updates and consistent styling</li>
              <li>Aspire client portal integration with three context-specific UI variants</li>
              <li>BambooHR-integrated careers and application flow</li>
              <li>Analytics integration for ongoing performance tracking</li>
            </ul>

            <div style={{
              marginTop: 'var(--space-8)',
              padding: 'var(--space-6)',
              background: 'var(--color-white)',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                Why This Matters
              </h3>
              <p style={{
                fontSize: 'var(--text-lg)',
                fontWeight: '500',
                color: 'var(--color-black)',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                The site now matches the quality of the company's actual work and gives them a credible presence in a competitive luxury market. The component-based architecture means new service pages can be added in hours, not days, and the centralized color system means rebrand or palette adjustments touch a single file rather than dozens.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-12)',
                marginTop: 'var(--space-6)'
              }}>
                <div>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                    15+
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                    Service & content<br/>pages delivered
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                    60+
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                    Employee team<br/>represented
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                    33
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                    Years of business<br/>legacy honored
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-8)' }}></div>
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
            <Link to="/Variety" className="project-link">
              Variety DC - Charity Redesign
            </Link>
            <Link to="/Govt" className="project-link">
              Government Website Redesign
            </Link>
            <Link to="/Hitch" className="project-link">
              Hitch - Travel App
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

export default AllSeasons;