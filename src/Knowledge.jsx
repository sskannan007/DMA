import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, InputGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './knowledge.css';
import './LandingPage.css';

import dmaLogo from './assets/DMA-logo.svg';
import twitter from './assets/logo-twitter.svg';
import facebook from './assets/logo-facebook.svg';
import instagram from './assets/logo-instagram.svg';
import linkedin from './assets/logo-linkedin.svg';
import location from './assets/Address.svg';
import phone from './assets/phone.svg';
import email from './assets/Email.svg';

export default function Landing() {
  const [activeCategory, setActiveCategory] = useState('Applied Artificial Intelligence');

  const categories = [
    'Applied Artificial Intelligence',
    'AI Frameworks & Platforms',
    'Data & Analytics Engineering',
    'Enterprise Transformation',
    'AI Governance & Trust',
    'Automation & Intelligent Workflows',
    'Research & Thought Leadership',
    'Product & Platform Insights',
    'Future of Intelligent Systems'
  ];

  const articles = [
    {
      id: 1,
      title: 'Transforming Laboratory Synthesis with AI',
      subtitle: 'Automatic Experiment Setup and Data Population',
      description: "In today's R&D environments, scientists spend significant time configuring experiments manually.",
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'From Raw Data to Actionable Intelligence',
      subtitle: 'How AI Models Learn What Matters',
      description: 'Modern AI systems prioritize signals over noise by continuously learning from outcomes, enabling',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Designing AI That Works in the Real World',
      subtitle: 'Moving Beyond Proofs of Concept',
      description: 'Deploying AI at scale requires more than accurate models. This article explores the architectural, data',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Transforming Laboratory Synthesis with AI',
      subtitle: 'Automatic Experiment Setup and Data Population',
      description: "In today's R&D environments, scientists spend significant time configuring experiments manually.",
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'From Raw Data to Actionable Intelligence',
      subtitle: 'How AI Models Learn What Matters',
      description: 'Modern AI systems prioritize signals over noise by continuously learning from outcomes, enabling',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Designing AI That Works in the Real World',
      subtitle: 'Moving Beyond Proofs of Concept',
      description: 'Deploying AI at scale requires more than accurate models. This article explores the architectural, data',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
    }
  ];

    const DMALogo = ({ className = "", style = {} }) => (
        <div className={`logo-container ${className}`} style={style}>
            <img src={dmaLogo} alt="DMA Logo" className="dma-logo-img" />
        </div>
    );

  return (
    <div className="knowledge-page">
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
              <Nav.Link as={Link} to="/knowledge" className="active-link" >Knowledge Hub</Nav.Link>
              <Nav.Link as={Link} to="/" >About</Nav.Link>
              <Nav.Link as={Link} to="/" >Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="hero-title">
                Knowledge <span className="hero-title-highlight">Hub</span>
              </h1>
              <p className="hero-description">
                Explore DMA's Knowledge Hub, where data, intelligence, and innovation converge. 
                Access expert insights on AI, analytics, platforms, and real-world transformation 
                across industries. Stay informed with trends, frameworks, and perspectives shaping 
                the future of intelligent systems.
              </p>
            </Col>
          </Row>
          <div className="hero-divider"></div>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="content-section">
        <Container fluid>
          <Row>
            {/* Sidebar */}
            <Col lg={3} md={4} className="sidebar-col">
              <div className="sidebar-card">
                {/* Search Box */}
                <div className="search-box">
                  <InputGroup>
                    <InputGroup.Text className="search-icon">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M14.5 14.5L10.5 10.5M12.1667 6.83333C12.1667 9.77885 9.77885 12.1667 6.83333 12.1667C3.88781 12.1667 1.5 9.77885 1.5 6.83333C1.5 3.88781 3.88781 1.5 6.83333 1.5C9.77885 1.5 12.1667 3.88781 12.1667 6.83333Z" stroke="#38414A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="search-input"
                    />
                  </InputGroup>
                </div>

                {/* Categories */}
                <div className="categories-list">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={`category-item ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      <span className="category-text">{category}</span>
                      {activeCategory === category && (
                        <svg className="category-arrow" width="14" height="13" viewBox="0 0 14 13" fill="none">
                          <path d="M7 1L12.5 6.5L7 12" stroke="#EE4A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Articles Grid */}
            <Col lg={9} md={8}>
              <Row className="articles-grid">
                {articles.map((article) => (
                  <Col lg={4} md={6} sm={12} key={article.id} className="article-col">
                    <Card className="article-card">
                      <Card.Body>
                        <Card.Title className="article-title">{article.title}</Card.Title>
                        <Card.Subtitle className="article-subtitle">{article.subtitle}</Card.Subtitle>
                        <Card.Text className="article-description">{article.description}</Card.Text>
                        <Link to="/article" className="read-more-link" style={{ textDecoration: 'none' }}>
                          <span>Read More</span>
                          <div className="read-more-underline"></div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

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
