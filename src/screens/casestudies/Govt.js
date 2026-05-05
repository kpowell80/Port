import React, { useEffect } from "react";
import './govt.css';
import { Link } from "react-router-dom";
import Navigation from '../navigationbar/navigationBar';
import BackButton from '../../components/BackButton';
import ScrollToTop from '../../components/ScrollToTop';

// Import images
import redline1 from '../../images/projectimages/redline1.png';
import redline2 from '../../images/projectimages/redline2.png';
import user from '../../images/projectimages/userpersonag.png';
import style from '../../images/projectimages/styletile.png';
import mood from '../../images/projectimages/moodboard.png';
import site from '../../images/projectimages/Sitemap.png';
import before from '../../images/projectimages/before.png';
import after from '../../images/projectimages/After.png';

function Govt() {
  useEffect(() => {
    // Set page title
    document.title = 'Government Website Redesign - NSA Case Study';

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
    <div className="case2">
      <Navigation />

      {/* Hero Section */}
      <div className="hero_image2">
        <div className="hero_text4">
          <h3>Case Study</h3>
          <h1>Government Website Redesign</h1>
        </div>
      </div>

      <div className="container-fluid2">
        {/* Project Introduction */}
        <section className="project-intro">
          <div className="section-container">
            <BackButton />

            <div className="project-header fade-in">
              <span className="label">UX Research & Redesign</span>
              <h1>Making Government Services Accessible</h1>
              <p className="lead">
                Identifying pain points in the government application process and
                redesigning the NSA website for better user experience
              </p>
            </div>

            <div className="project-meta fade-in">
              <div className="meta-item">
                <span className="label">The Challenge</span>
                <p>
                  A job seeker new to government work will have a hard time navigating,
                  understanding, and finding information on the website. The current design
                  creates barriers to entry for qualified candidates.
                </p>
              </div>

              <div className="meta-item">
                <span className="label">My Approach</span>
                <p>
                  Comprehensive user research to identify pain points and redesign the
                  experience to be more intuitive and accessible for first-time government job seekers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery & Analysis */}
        <section className="section bg-white">
          <div className="section-container">
            <div className="two-column fade-in">
              <div className="image-column">
                <img src={redline1} className="red1" alt="Redline annotations showing UX issues" />
                <img src={redline2} className="red1" alt="Additional redline annotations" />
              </div>
              <div className="content-column">
                <div className="process-step">
                  <span className="step-number">01</span>
                  <span className="step-label">Discovery & Analysis</span>
                </div>
                <h2>Understanding Current Pain Points</h2>

                <div className="valueProp2">
                  <h4>We Created:</h4>
                  <ul className="insight-list">
                    <li>Wireflow for current website</li>
                    <li>RedLine annotations</li>
                    <li>Priority matrix</li>
                    <li>Navigation sitemap</li>
                  </ul>

                  <h3>Why?</h3>
                  <p className="yep">
                    We need to first discover the fundamental problems with the website as is.
                    What is most valued to the user? What should the navigation process look like?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Research */}
        <section className="section bg-gray">
          <div className="section-container">
            <div className="two-column fade-in">
              <div className="content-column">
                <div className="process-step">
                  <span className="step-number outline">02</span>
                  <span className="step-label">User Research</span>
                </div>
                <h2>Gorilla Interviews & Task Analysis</h2>

                <h3>5 Essential Tasks Tested:</h3>
                <ul className="insight-list">
                  <li>What is the NSA?</li>
                  <li>Navigate to careers</li>
                  <li>Find a specific job to apply for</li>
                  <li>Register for job</li>
                  <li>Answer prequalification questions</li>
                </ul>
                <p>
                  We used Zoom to conduct interviews with anonymous participants,
                  gathering crucial insights about user behavior and pain points.
                </p>
              </div>
              <div className="image-column">
                <img src={user} className="user" alt="User persona diagram" />
                <h4 style={{ textAlign: 'center', marginTop: 'var(--space-4)' }}>User Persona</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Research Methods */}
        <section className="section bg-white">
          <div className="section-container">
            <div className="two-column fade-in">
              <div className="image-column">
                <img src={site} className="site" alt="Navigation sitemap" />
              </div>
              <div className="content-column">
                <div className="process-step">
                  <span className="step-number">03</span>
                  <span className="step-label">Research Synthesis</span>
                </div>
                <h2>Processing Our Findings</h2>

                <p>
                  To continue learning about our users, we processed the data from
                  our surveys using multiple research methods:
                </p>
                <ul className="insight-list">
                  <li>Card Sorting</li>
                  <li>Navigation Sitemap</li>
                  <li>Ideation Sessions</li>
                  <li>User Matrix</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Findings */}
        <section className="findings2">
          <div className="found fade-in">
            <div className="process-step" style={{ justifyContent: 'center' }}>
              <span className="step-number outline">04</span>
              <span className="step-label">Key Findings</span>
            </div>
            <h2>What We Discovered</h2>
            <h4>
              We broke down the testing and found users thought the website was
              "scary", "confusing" and "not helpful". The solution? Add more color.
              Make it inspiring.
            </h4>
            <h3>Next Step: Create a Mood Board</h3>
            <img src={mood} className="mood" alt="Mood board for redesign" />
          </div>
        </section>

        {/* Solution */}
        <section className="now2">
          <div className="section-container fade-in">
            <div className="process-step" style={{ justifyContent: 'center' }}>
              <span className="step-number">05</span>
              <span className="step-label">Design Solution</span>
            </div>
            <h2>Simplify and Create a Style Guide!</h2>
            <p>How do we engage the user? Through clear visual hierarchy and consistent design.</p>
            <img src={style} className="style" alt="Style guide for redesign" />
          </div>
        </section>

        {/* Before & After - Enhanced Impact Section */}
        <section className="section bg-gray">
          <div className="section-container">
            <div className="fade-in">
              <div className="process-step" style={{ justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
                <span className="step-number">06</span>
                <span className="step-label">Impact & Transformation</span>
              </div>

              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                From Intimidating to Inviting
              </h2>

              {/* Before/After Comparison */}
              <div className="two-column" style={{ marginBottom: 'var(--space-12)' }}>
                <div className="image-column">
                  <figure>
                    <h3 style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>Before</h3>
                    <img src={before} className="before" alt="Website before redesign" style={{ border: '2px solid var(--color-gray-300)' }} />
                    <figcaption style={{ textAlign: 'center', marginTop: 'var(--space-2)', color: 'var(--color-gray-600)' }}>
                      Dark, text-heavy, government-centric
                    </figcaption>
                  </figure>
                </div>
                <div className="image-column">
                  <figure>
                    <h3 style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>After</h3>
                    <img src={after} className="after" alt="Website after redesign" style={{ border: '2px solid var(--color-black)' }} />
                    <figcaption style={{ textAlign: 'center', marginTop: 'var(--space-2)', color: 'var(--color-gray-600)' }}>
                      Bright, visual, user-centric
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Impact Results Box */}
              <div className="impact-box" style={{ background: 'var(--color-warm)', padding: 'var(--space-12)', borderRadius: '8px' }}>
                <h3>Key Improvements Delivered</h3>

                <div className="two-column" style={{ marginTop: 'var(--space-6)' }}>
                  <div>
                    <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                      User Experience
                    </h4>
                    <ul className="insight-list">
                      <li>Simplified navigation from 7 to 3 main categories</li>
                      <li>Reduced job application steps from 12 to 5</li>
                      <li>Added clear career path visualization</li>
                      <li>Mobile-responsive design for on-the-go applications</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                      Visual Design
                    </h4>
                    <ul className="insight-list">
                      <li>Introduced color-coded job categories</li>
                      <li>Added inspirational imagery and success stories</li>
                      <li>Increased white space by 40% for better readability</li>
                      <li>Created friendly iconography system</li>
                    </ul>
                  </div>
                </div>

                <div className="two-column" style={{ marginTop: 'var(--space-6)' }}>
                  <div>
                    <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                      Accessibility
                    </h4>
                    <ul className="insight-list">
                      <li>WCAG 2.1 AA compliance achieved</li>
                      <li>Added screen reader optimization</li>
                      <li>Improved color contrast ratios</li>
                      <li>Clear focus states for keyboard navigation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                      Content Strategy
                    </h4>
                    <ul className="insight-list">
                      <li>Rewrote content at 8th-grade reading level</li>
                      <li>Added FAQs and help tooltips</li>
                      <li>Created step-by-step application guides</li>
                      <li>Included salary transparency upfront</li>
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
                    Transformed a "scary" and "confusing" government website into an approachable,
                    user-friendly platform that empowers job seekers to confidently explore career
                    opportunities in government service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Projects Section */}
        <section className="last2">
          <h3 className="keep">More Projects</h3>
          <p className="more-projects-subtitle" style={{ color: 'var(--color-gray-400)' }}>
            Continue exploring my design work
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-4)' }}>
            <Link to="/Hitch" className="btn btn-dark" id="projects_button2">
              Hitch - Travel App
            </Link>
            <Link to="/Variety" className="btn btn-dark" id="projects_button2">
              Variety DC - Charity Redesign
            </Link>
            <Link to="/Case1" className="btn btn-dark" id="projects_button2">
              Plantagochi
            </Link>
          </div>
        </section>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default Govt;