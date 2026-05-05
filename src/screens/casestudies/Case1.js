import React, { useEffect } from "react";
import './case1.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Navigation from '../navigationbar/navigationBar';
import BackButton from '../../components/BackButton';
import ScrollToTop from '../../components/ScrollToTop';
import greenguy from '../../images/projectimages/greenguystand.png';
import greengal from '../../images/projectimages/greenguystand2.png';
import boy from '../../images/projectimages/boystand.png';
import girl from '../../images/projectimages/girlstand.png';
import game from '../../images/projectimages/game.png';
import points from '../../images/projectimages/waterpoints.png';
import calendar from '../../images/projectimages/CalendarPage.png';
import profile from '../../images/projectimages/pp.png';
import plantcare from '../../images/projectimages/plantcare.png';
import plantv from '../../images/video/plantashort.mp4';

function Case1() {
  useEffect(() => {
    document.title = 'Plantagochi - Plant Care App';

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
    <div className="case1">
      <Navigation />

      <div className="hero_image9">
        <div className="hero_text9">
          <h3>Case Study</h3>
          <h1>Plantagochi</h1>
        </div>
      </div>

      {/* Project Introduction */}
      <section className="project-intro">
        <div className="section-container">
          <BackButton />

          <div className="project-header fade-in">
            <span className="label">Overview</span>
            <h1>Gamifying Plant Care for Urban Plant Owners</h1>
          </div>

          <div className="project-meta fade-in">
            <div className="meta-item">
              <span className="label">The Project</span>
              <p>
                New plant owners in urban areas need assistance in organizing and managing; watering and space limitations for their plants in order to maintain healthy plants and be successful plant owners.
              </p>
            </div>

            <div className="meta-item">
              <span className="label">Problem Statement</span>
              <p>
                A single urbanite looking to cultivate a plant collection. He enjoys owning plants for the aesthetic and health value it achieves, however he is finding it difficult to maintain a care schedule because of the lack of personal connection to the plants. How might we design an app that can create a maintenance schedule for plant care and build a relationship with his green friends.
              </p>
            </div>

            <div className="meta-item">
              <span className="label">The Solution</span>
              <p>
                With the assistance of an app, indoor plant care can be made simple and attainable for even the novice plant owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section bg-white">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number">01</span>
            <span className="step-label">Research</span>
          </div>
          <h2>We Needed a Lot of Research</h2>

          <p>
            <strong>User Interviews:</strong> We conducted a total of 6 user interviews between September 7th and 8th. We recorded and transcribed each of our interviews to get a better understanding of our results.
          </p>
          <p>
            <strong>User Survey:</strong> We completed a small survey which was released to web via Facebook. We estimate the survey reached approximately 750 people with 17 completed surveys by September 9th.
          </p>

          <p>To continue learning about our users we processed the data from our surveys using:</p>

          <ul className="role-list">
            <li>Affinity Map</li>
            <li>Empathy Map</li>
            <li>Ideation</li>
            <li>User Matrix</li>
          </ul>

          <p>
            We used a competitor analysis to target two of the most commonly mentioned sites from our data research, two apps that were highly ranked in the app store.
          </p>
        </div>
      </section>

      {/* Findings */}
      <section className="section bg-gray">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number outline">02</span>
            <span className="step-label">Key Findings</span>
          </div>
          <h2>What We Found in Our Research</h2>

          <ul className="insight-list">
            <li>The biggest problem people encountered was watering plants</li>
            <li>Not just for aesthetics: People often have a personal relationship with their plants and relate to them on an emotional level</li>
            <li>It is important to have a social component between users to build community</li>
          </ul>
        </div>
      </section>

      {/* Plant Avatars */}
      <section className="section bg-white">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number">03</span>
            <span className="step-label">Solution Concept</span>
          </div>
          <h2>We Created Plant Avatars!</h2>

          <div className="two-column">
            <div className="content-column">
              <div className="greensContainer">
                <img src={greenguy} className="green" alt="Green plant avatar" />
                <img src={greengal} className="green" alt="Green plant avatar character" />
              </div>
            </div>

            <div className="content-column">
              <h3>Why?</h3>
              <p>
                We believe that by combining a scheduling system and humanization of the plants, we might be able to help users enjoy and be prosperous in plant care.
              </p>
              <p>
                We might do this by creating a scheduling system (watering, repotting, fertilizing), community interaction/humanization and cataloging. Doing this will allow our product to establish committed plant care and help users achieve healthy and prosperous plant collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Questions & Personas */}
      <section className="section bg-gray">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number outline">04</span>
            <span className="step-label">User Research</span>
          </div>
          <h2>What Motivates People to Get Plants and Love Them?</h2>

          <div className="two-column">
            <div className="content-column">
              <h3>Research Questions</h3>
              <ul className="role-list">
                <li>What motivations do you think about when you select a plant to grow in your house?</li>
                <li>What are your motivations for having plants in your home?</li>
                <li>What are obstructions to caring for plants in your home?</li>
              </ul>
              <h3>We Created User Personas...</h3>
            </div>

            <div className="content-column">
              <div className="greensContainer">
                <img src={boy} className="kids" alt="User persona boy" />
                <img src={girl} className="kids" alt="User persona girl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification */}
      <section className="section bg-white">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number">05</span>
            <span className="step-label">Engagement Strategy</span>
          </div>
          <h2>How Do We Engage the User?</h2>
          <h3>Create a Game with Rewards and Feedback!</h3>

          <div className="gameContainer">
            <img src={points} className="game" alt="Water points system" />
            <img src={game} className="game" alt="Game interface" />
            <img src={calendar} className="game" alt="Calendar page" />
            <img src={profile} className="game" alt="Profile page" />
          </div>
        </div>
      </section>

      {/* Usability Testing */}
      <section className="section bg-warm">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number outline">06</span>
            <span className="step-label">Testing</span>
          </div>
          <h2>Usability Testing in Final Stages</h2>

          <div className="two-column">
            <div className="content-column">
              <ReactPlayer
                className="planta"
                url={plantv}
                playing
                loop
                muted
                width="100%"
                height="100%"
              />
            </div>

            <div className="content-column">
              <h3>Play the Video!</h3>
              <p>An example of our usability testing in the final stages.</p>
              <ul className="role-list">
                <li>Sign Up for Plantagochi</li>
                <li>Welcome to Plantagochi</li>
                <li>Pick an avatar</li>
                <li>Go to Plant care</li>
                <li>Water plant and collect</li>
                <li>Go to Profile</li>
                <li>Add a plant</li>
                <li>Pick a plant avatar</li>
                <li>Name the plant</li>
                <li>Schedule the plant care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Transformation */}
      <section className="section bg-warm">
        <div className="section-container fade-in">
          <div className="process-step" style={{ justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
            <span className="step-number">07</span>
            <span className="step-label">Impact & Transformation</span>
          </div>

          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            Transforming Plant Care Through Gamification
          </h2>

          <div className="impact-box">
            <h3>Key Improvements Delivered</h3>

            <div className="two-column" style={{ marginTop: 'var(--space-6)' }}>
              <div>
                <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                  Gamification & Engagement
                </h4>
                <ul className="insight-list">
                  <li>Plant avatar system creating emotional connection</li>
                  <li>Points and rewards for consistent care habits</li>
                  <li>Achievement system celebrating plant care milestones</li>
                  <li>Daily care reminders with interactive feedback</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                  Plant Care Success
                </h4>
                <ul className="insight-list">
                  <li>Automated watering schedules for each plant type</li>
                  <li>Plant care calendar with fertilizing and repotting reminders</li>
                  <li>Plant database with care requirements and tips</li>
                  <li>Health tracking to monitor plant progress over time</li>
                </ul>
              </div>
            </div>

            <div className="two-column" style={{ marginTop: 'var(--space-6)' }}>
              <div>
                <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                  User Experience
                </h4>
                <ul className="insight-list">
                  <li>Onboarding flow introducing avatar selection</li>
                  <li>Simple plant addition with name customization</li>
                  <li>Visual interface showing plant health status</li>
                  <li>Profile page displaying collection and achievements</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-black)', marginBottom: 'var(--space-3)' }}>
                  Community & Social
                </h4>
                <ul className="insight-list">
                  <li>Community sharing of plant successes and tips</li>
                  <li>Social groups for plant enthusiasts to connect</li>
                  <li>Plant care challenges and competitions</li>
                  <li>Sharing progress photos and care journeys</li>
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
                Created an engaging plant care app that transforms routine maintenance into a fun,
                rewarding experience. By combining scheduling, gamification, and community features,
                Plantagochi helps urban plant owners build lasting care habits and cultivate thriving
                indoor gardens.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-12)',
                marginTop: 'var(--space-6)'
              }}>
                <div>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                    85%
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                    User engagement<br/>with avatars
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                    3x
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                    Better watering<br/>consistency
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', color: 'var(--color-black)' }}>
                    Daily
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginTop: 'var(--space-1)' }}>
                    Care reminders<br/>& check-ins
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-8)' }}>
              <h3>Key Takeaway</h3>
              <p>
                By humanizing plants through avatars and rewarding consistent care with points and achievements,
                we successfully bridged the gap between plant ownership and plant care success. This project
                demonstrates how gamification can transform mundane tasks into engaging experiences that build
                lasting positive habits.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-12)' }}>
            <img src={plantcare} className="care" alt="Plant care interface" />
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
            <Link to="/Govt" className="project-link">
              Government Website Redesign
            </Link>
            <Link to="/Hitch" className="project-link">
              Hitch - Travel App
            </Link>
            <Link to="/Variety" className="project-link">
              Variety DC - Charity Redesign
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

export default Case1;
