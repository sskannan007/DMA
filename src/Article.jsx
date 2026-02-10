import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Article.css';
import './LandingPage.css';

import dmaLogo from './assets/DMA-Logo.svg';
import twitter from './assets/logo-twitter.svg';
import facebook from './assets/logo-facebook.svg';
import instagram from './assets/logo-instagram.svg';
import linkedin from './assets/logo-linkedin.svg';
import location from './assets/Address.svg';
import phone from './assets/phone.svg';
import email from './assets/Email.svg';

export default function Reading() {
  const recommendedArticles = [
    {
      id: 1,
      title: 'Transforming Laboratory Synthesis with AI',
      subtitle: 'Automatic Experiment Setup and Data Population',
      description: "In today's R&D environments, scientists spend significant time configuring experiments manually."
    },
    {
      id: 2,
      title: 'From Raw Data to Actionable Intelligence',
      subtitle: 'How AI Models Learn What Matters',
      description: 'Modern AI systems prioritize signals over noise by continuously learning from outcomes, enabling'
    },
    {
      id: 3,
      title: 'Designing AI That Works in the Real World',
      subtitle: 'Moving Beyond Proofs of Concept',
      description: 'Deploying AI at scale requires more than accurate models. This article explores the architectural, data'
    }
  ];

  const DMALogo = ({ className = "", style = {} }) => (
    <div className={`logo-container ${className}`} style={style}>
      <img src={dmaLogo} alt="DMA Logo" className="dma-logo-img" />
    </div>
  );

  return (
    <div className="reading-page">
      {/* Header Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom" >
        <Container>
          <Navbar.Brand as={Link} to="/" >
            <DMALogo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
            <Nav>
              <Nav.Link as={Link} to="/" >Capabilities</Nav.Link>
              <Nav.Link as={Link} to="/knowledge" >Knowledge Hub</Nav.Link>
              <Nav.Link as={Link} to="/" >About</Nav.Link>
              <Nav.Link as={Link} to="/" >Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="reading-container">
        {/* Article Header */}
        <Row>
          <Col lg={12}>
            <div className="article-header">
              <h1 className="article-main-title">
                Transforming Laboratory Synthesis with AI
              </h1>
              <h2 className="article-main-subtitle">
                Automatic Experiment Setup and Data Population
              </h2>
              <div className="header-divider"></div>
              <p className="article-author">Author Name : Prof. Madhusudhanan Baskaran</p>
            </div>
          </Col>
        </Row>

        {/* Article Content */}
        <Row>
          <Col lg={12}>
            <div className="article-content">
              <h3 className="section-heading">Overview</h3>
              <p className="article-paragraph">
                In modern research and development environments, scientists often spend a disproportionate amount of time setting up experiments defining parameters, configuring instruments, and manually recording results. These repetitive tasks slow innovation and introduce the risk of human error.
              </p>
              <p className="article-paragraph">
                Artificial Intelligence is transforming this process by automating experiment design, execution, and data capture—allowing researchers to focus on insight generation rather than setup.
              </p>

              <h3 className="section-heading">The Challenge with Traditional Experimentation</h3>
              <p className="article-paragraph">
                Manual experiment setup typically involves:
              </p>
              <ul className="article-list">
                <li>Repeated configuration of similar protocols</li>
                <li>Manual parameter selection based on experience</li>
                <li>Fragmented data capture across systems</li>
                <li>Limited reuse of historical experiment data</li>
              </ul>
              <p className="article-paragraph">
                As experiment complexity increases, these inefficiencies compound.
              </p>

              <h3 className="section-heading">How AI Changes the Workflow</h3>
              <p className="article-paragraph">
                AI-powered laboratory systems introduce intelligence at multiple stages:
              </p>
              <ul className="article-list">
                <li>
                  <strong>Automated Protocol Configuration</strong>
                  <br />
                  AI models recommend optimal experiment parameters based on historical data and objectives.
                </li>
                <li>
                  <strong>Real-Time Data Population</strong>
                  <br />
                  Sensor and instrument outputs are captured automatically, reducing transcription errors.
                </li>
                <li>
                  <strong>Continuous Learning</strong>
                  <br />
                  Each experiment improves future recommendations by feeding outcome data back into the system.
                </li>
              </ul>

              <h3 className="section-heading">Key Benefits</h3>
              <ul className="article-list">
                <li>Faster experiment turnaround times</li>
                <li>Reduced manual errors and inconsistencies</li>
                <li>Improved reproducibility</li>
                <li>Better utilization of historical research data</li>
              </ul>

              <h3 className="section-heading">Looking Ahead</h3>
              <p className="article-paragraph">
                As AI systems mature, laboratory workflows will evolve from manual configuration to self-optimizing experimentation environments, accelerating discovery while maintaining scientific rigor.
              </p>
            </div>
          </Col>
        </Row>

        {/* Recommended Section Divider */}
        <Row>
          <Col lg={12}>
            <div className="recommended-divider"></div>
          </Col>
        </Row>

        {/* Recommended Articles */}
        <Row>
          <Col lg={12}>
            <h3 className="recommended-title">Recommended for you</h3>
          </Col>
        </Row>

        <Row className="recommended-articles">
          {recommendedArticles.map((article) => (
            <Col lg={4} md={6} sm={12} key={article.id} className="article-col">
              <Card className="recommended-card">
                <Card.Body>
                  <Card.Title className="card-title">{article.title}</Card.Title>
                  <Card.Subtitle className="card-subtitle">{article.subtitle}</Card.Subtitle>
                  <Card.Text className="card-description">{article.description}</Card.Text>
                  <div className="read-more-link">
                    <span>Read More</span>
                    <div className="read-more-underline"></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer" >
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4" >
              <DMALogo style={{ marginBottom: '1.5rem' }} />
              <div className="social-media">
                <img className='me-2' src={twitter} alt="twitter" />
                <img className='me-2' src={facebook} alt="facebook" />
                <img className='me-2' src={instagram} alt="instagram" />
                <img className='me-2' src={linkedin} alt="linkedin" />
              </div>
              <p className="footer-description" > Building responsible, <br />indigenous, and high-<br />performance AI for enterprises, <br />researchers, and governments. </p>
            </Col>
            <Col lg={3} md={6} className="mb-4" >
              <h5 className="footer-heading" >Explore</h5>
              <ul className="footer-links" >
                <li><a href="#about" >About</a></li>
                <li><a href="#why" >Why Us</a></li>
                <li><a href="#journey" >Journey</a></li>
                <li><a href="#faq" >FAQs</a></li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4" >
              <h5 className="footer-heading" >Contact</h5>
              <ul className="footer-contact" >
                <li>
                  <div className="contact-content" ><img src={location} alt="location" /> <div><p>DMA</p> <p>Address</p> <p>Address cont...</p></div> </div>
                </li>
                <li>
                  <div className="contact-content" ><img src={phone} alt="phone" /> <p>+91 9840712345</p> </div>
                </li>
                <li>
                  <div className="contact-content" ><img src={email} alt="email" /> <p>contact@dma.com</p> </div>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4" >
              <div className="footer-dev-info" >
                <p>This is for the development</p>
                <p>Total Width: 1440px</p>
                <p>Number of Columns: 12</p>
                <p>Column Width: ~83px</p>
                <p>Gutter (space between columns): 24px</p>
                <p>Left & Right Margins: 90px</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-bottom" >
          <Container>
            <Row>
              <Col md={12} className="text-center" >
                <p>&copy; 2025 DMA Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
}
