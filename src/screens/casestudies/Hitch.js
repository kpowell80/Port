import { useEffect } from "react";
import './hitch.css';
import { Link } from 'react-router-dom';
import Navigation from '../navigationbar/navigationBar';
import BackButton from '../../components/BackButton';
import ScrollToTop from '../../components/ScrollToTop';
import storyboard from '../../images/projectimages/legosb.png';
import journey from '../../images/projectimages/userjourneyHH.png';
import hhusers from '../../images/projectimages/hhusers.png';
import hhuseri from '../../images/projectimages/hhuseri.png';
import hhra from '../../images/projectimages/hhra.png';
import hhgg from '../../images/projectimages/hhgg.png';

function Hitch() {
  useEffect(() => {
    document.title = 'Hitch - Travel App Case Study';

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
    <div className="case3">
      <Navigation />

      <div className="hero_image3">
        <div className="hero_text8">
          <h3>Case Study</h3>
          <h1>Travel App</h1>
        </div>
      </div>

      {/* Project Introduction */}
      <section className="project-intro">
        <div className="section-container">
          <BackButton />

          <div className="project-header fade-in">
            <span className="label">Overview</span>
            <h1>Hitchhiker.World - Safe Dining in a Post-Pandemic World</h1>
          </div>

          <div className="project-meta fade-in">
            <div className="meta-item">
              <span className="label">The Project</span>
              <p>
                Hitchhiker.World. The certified dining guide to fearless travel in a post pandemic world!
              </p>
            </div>

            <div className="meta-item">
              <span className="label">The Problem</span>
              <p>
                Travelers are weary of where to dine and how to find "clean" restaurants/stores. He/she must use many different tools or don't have any existing to answer his/her needs such as: where to eat, how to get there, is it safe, are there mandatory masks, are tables separated, how to get delivery, is the restaurant only allowing vaccinated, has the service dropped since Covid, is there a full menu, capacity of restaurant indoors?
              </p>
            </div>

            <div className="meta-item">
              <span className="label">The Solution</span>
              <p>
                Create an app that has options of "safely certified" GG - Guarded Gate Guaranteed restaurants. Logs travelers profiles for future trips and can interact with other user's profiles. Keeps up to date reviews on restaurant's service stars with RA - Restaurant Alliance. Allows users to connect direct routes to restaurants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Questions */}
      <section className="section bg-white">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number">01</span>
            <span className="step-label">Research</span>
          </div>
          <h2>Research Questions</h2>

          <div className="two-column">
            <div className="content-column">
              <ul className="role-list">
                <li>What are people's eating habits when traveling in the modern world affected by COVID?</li>
                <li>How do they find dining options (grocery, food truck, food stalls), specifically can they find the location?</li>
                <li>Do people want to eat out?</li>
                <li>How does COVID limitations affect people's ability to go to certain restaurants?</li>
                <li>Do people feel safe going to the grocery store?</li>
              </ul>
            </div>

            <div className="content-column">
              <p>
                In this research project, we planned and I conducted 5 interviews. The group was chosen from my circle. We started with 5 research questions. Then we came up with our interview questions. They were asked 25 questions each. A couple questions evolved along the way and are noted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Research & Personas */}
      <section className="section bg-gray">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number outline">02</span>
            <span className="step-label">User Insights</span>
          </div>
          <h2>Understanding Our Users</h2>

          <div className="two-column">
            <div className="content-column">
              <img src={hhusers} className="user5" alt="User personas" />
              <img src={hhuseri} className="user5" alt="User insights" />
            </div>

            <div className="content-column">
              <h3>We Created</h3>
              <ul className="role-list">
                <li>User Questions</li>
                <li>Proto Persona</li>
                <li>User Insight</li>
                <li>Empathy Mapping</li>
              </ul>

              <h3>Why?</h3>
              <p>
                We need to first discover the fundamental problems with the website as is. What is most valued to the user? What should the navigation process look like?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey & Storyboard */}
      <section className="section bg-white">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number">03</span>
            <span className="step-label">User Journey</span>
          </div>
          <h2>After the Interview</h2>

          <div className="two-column">
            <div className="content-column">
              <p>
                People were not as interested in food trucks and stores. It was apparent I needed to focus on the Safe and Excellence of a restaurant primarily.
              </p>

              <h3>Competitor Analysis</h3>
              <p>
                I then compared Hitchhiker.World to Resy, Expedia and Yelp primarily. I also looked at indirect competition like United airlines. None of the websites had any Covid responses related to protocols or reviews.
              </p>

              <h3>After our initial research, we created:</h3>
              <ul className="role-list">
                <li>User Persona</li>
                <li>User Journey Map</li>
                <li>StoryBoard</li>
              </ul>

              <h3>Why?</h3>
              <p>
                Who are we targeting and how will they accomplish their travel needs from Hitchhiker?
              </p>
            </div>

            <div className="content-column">
              <img src={storyboard} className="gamey" alt="Storyboard" />
              <img src={journey} className="gamey" alt="User journey map" />
            </div>
          </div>
        </div>
      </section>

      {/* Findings & Iteration */}
      <section className="section bg-gray">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number outline">04</span>
            <span className="step-label">Key Findings</span>
          </div>
          <h2>What We Found in Our Research</h2>

          <p>
            Continued to simplify the process and focus on what the user wants. For instance, dropping the weather determinant. The user's testing did not get that and just made the wire test more complicated.
          </p>

          <p>
            Then the prototype testing was next, this was invaluable. I learned an incredible amount that I would have skated over. After login, because the app was new, the user still had no idea what features we were offering. Coaching screens were added. And screens explaining the product were sprinkled throughout the user's journey.
          </p>

          <div className="two-column" style={{ marginTop: 'var(--space-8)' }}>
            <div className="content-column">
              <img src={hhra} className="user5" alt="Restaurant Alliance feature" />
            </div>
            <div className="content-column">
              <img src={hhgg} className="user5" alt="Guarded Gate feature" />
            </div>
          </div>

          <p style={{ marginTop: 'var(--space-8)' }}>
            Merchandising screen was created. A description of the chosen restaurant screen was added, this step further helps identify what RA an GG actually are doing in a pragmatic way. Buttons needed to be clearer. Profile link needed to be more obvious. Past and previous reservations screen was created. A default user profile screen was created, so the user is able to have the default pic option presented. The "search" feature was made more apparent, as were some directives to help guide the User.
          </p>
        </div>
      </section>

      {/* Final Impact & Results */}
      <section className="section bg-white">
        <div className="section-container fade-in">
          <div className="process-step">
            <span className="step-number">05</span>
            <span className="step-label">Impact & Results</span>
          </div>
          <h2>The Final Solution</h2>

          <div className="impact-box">
            <h3>Key Features Implemented</h3>
            <ul className="role-list">
              <li><strong>GG Certification System:</strong> Guarded Gate Guaranteed restaurants with verified safety protocols</li>
              <li><strong>RA Rating System:</strong> Restaurant Alliance provides real-time service quality ratings</li>
              <li><strong>User Profiles:</strong> Personalized travel profiles with dietary preferences and safety requirements</li>
              <li><strong>Smart Search:</strong> Filter by safety protocols, capacity limits, and vaccination requirements</li>
              <li><strong>Coaching Screens:</strong> Onboarding flow to educate users about safety features</li>
            </ul>

            <h3 style={{ marginTop: 'var(--space-8)' }}>Design Improvements from Testing</h3>
            <ul className="role-list">
              <li>Simplified navigation by removing weather determinant feature</li>
              <li>Added coaching screens to explain GG and RA certifications</li>
              <li>Enhanced button clarity and profile link visibility</li>
              <li>Created past/future reservations management screen</li>
              <li>Improved search feature prominence with guided directives</li>
            </ul>

            <p style={{ marginTop: 'var(--space-6)', fontWeight: '500', color: 'var(--color-black)' }}>
              The result: A comprehensive travel dining app that addresses post-pandemic safety concerns while maintaining
              an intuitive user experience, helping travelers make informed dining decisions with confidence.
            </p>
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
            <Link to="/Case1" className="project-link">
              Plantagochi - Plant Care App
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

export default Hitch;
