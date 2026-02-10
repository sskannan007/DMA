/**
 * DMA AI Landing Page - Asset Fixed
 */

import React from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
    Navbar,
    Card,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import local assets
import svgPaths from './imports/svg-u06yhaelxj';
import brainSvg from './assets/brain.svg';
import dmaLogo from './assets/DMA-logo.svg';

// Assets from src/assets (using hashed names from Figma export)
import imgFeatured1 from './assets/featured-1.png';
import imgFeatured2 from './assets/4b591353b3ef8901d79a2756a7540e65b8c8fdcd.png';
import imgFeatured3 from './assets/featured-2.png';
import imgAvatar from './assets/0e92e68e656eabf75d07c53a2c5542404ad9301f.png';
import credibility1 from './assets/credibility-1.svg';
import credibility2 from './assets/credibility-2.svg';
import credibility3 from './assets/credibility-3.svg';
import framework1 from './assets/framework-1.png';
import framework2 from './assets/framework-2.png';
import framework3 from './assets/framework-3.png';
import bgFrameworkImg from './assets/frameworks-bg.svg';
import twitter from './assets/logo-twitter.svg';
import facebook from './assets/logo-facebook.svg';
import instagram from './assets/logo-instagram.svg';
import linkedin from './assets/logo-linkedin.svg';
import location from './assets/Address.svg';
import phone from './assets/phone.svg';
import email from './assets/Email.svg';

// Mapping Figma assets to our existing orange logo since they were missing
const imgRectangle1317 = imgFeatured1;
const imgImage1535 = imgAvatar;
const imgRectangle1318 = imgFeatured2;
const imgImage1536 = imgAvatar;
const imgRectangle1319 = imgFeatured3;
const imgImage1534 = imgAvatar;

// Fallback for missing DMA-Orange.png
const dmaOrange = imgRectangle1317;

const LandingPage = () => {

    // DMA Logo Component
    const DMALogo = ({ className = "", style = {} }) => (
        <div className={`logo-container ${className}`} style={style}>
            <img src={dmaLogo} alt="DMA Logo" className="dma-logo-img" />
        </div>
    );

    // AI Circuit Graphic Component (Now using brain.svg)
    const AICircuitGraphic = () => (
        <div className="ai-circuit-graphic" >
            <img src={brainSvg} alt="AI Brain" className="brain-svg-img" />
        </div>
    );

    // Social Icons Component
    const SocialIcons = () => (
        <div className="social-icons" >
            <a href="#" className="social-icon" >
                <svg fill="none" viewBox="0 0 15.3 13.5" >
                    <path d={svgPaths.pd212e80} fill="#7D818D" />
                </svg>
            </a>
            <a href="#" className="social-icon" >
                <svg fill="none" viewBox="0 0 16.2 16.2" >
                    <path d={svgPaths.p3d858d70} fill="#7D818D" />
                </svg>
            </a>
            <a href="#" className="social-icon" >
                <svg fill="none" viewBox="0 0 16.2 16.2" >
                    <path d={svgPaths.p3e430280} fill="#7D818D" />
                    <path d={svgPaths.p368b0ec0} fill="#7D818D" />
                    <circle cx="12.1514" cy="4.04986" fill="#7D818D" r="1.10455" />
                </svg>
            </a>
            <a href="#" className="social-icon" >
                <svg fill="none" viewBox="0 0 16.2 16.2" >
                    <path d={svgPaths.p188bdb80} fill="#7D818D" />
                </svg>
            </a>
        </div>
    );

    return (
        <div className="landing-page" >
            <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom" >
                <Container>
                    <Navbar.Brand href="#home" >
                        <DMALogo />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav>
                            <Nav.Link href="#capabilities" >Capabilities</Nav.Link>
                            <Nav.Link as={Link} to="/knowledge" >Knowledge Hub</Nav.Link>
                            <Nav.Link href="#about" >About</Nav.Link>
                            <Nav.Link href="#contact" >Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section className="hero-section" >
                <Container>
                    <Row className="align-items-center" style={{ position: 'relative' }}>
                        <div className="bg-blur" style={{ position: 'absolute', top: 0, left: 0 }}></div>
                        <Col lg={6} md={12} style={{ zIndex: 2 }}>
                            <h1 className="hero-title" > Where Academic Rigor Meets <br /> <span className="highlight-text" >Real-World AI</span> </h1>
                            <p className="hero-description" >
                                Developing AI Models from Responsible and Indigenous AI to Gen AI Observability,
                                changing what AI's capabilities are with Proven Research.
                            </p>
                            <Button variant="danger" size="lg" className="cta-button" > LEARN MORE → </Button>
                        </Col>
                        <Col lg={6} md={12} className="hero-graphic-col" >
                            <AICircuitGraphic />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="features-section" >
                <Container>
                    <h2 className="section-title" > Built on Credibility, <span className="highlight-text" >Designed for Scale</span> </h2>
                </Container>
                <Container>
                    <Row className="mt-5" >
                        <Col lg={4} md={6} className="mb-4" >
                            <div className="feature-card" >
                                <div className="feature-icon" >
                                    <img src={credibility1} alt="Credibility 1" className="credibility-icon" />
                                </div>
                                <h3>Incubated by IIT Madras Pravartak</h3>
                                <p> Rooted in one of India’s most respected deep-tech and innovation ecosystems.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4" >
                            <div className="feature-card" >
                                <div className="feature-icon" >
                                    <img src={credibility2} alt="Credibility 2" className="credibility-icon" />
                                </div>
                                <h3>Lead by Prof. <br />Madhusudhanan Baskaran</h3>
                                <p>Guided by national-level leadership across BharatGen and RBI advisory initiatives.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4" >
                            <div className="feature-card" >
                                <div className="feature-icon" >
                                    <img src={credibility3} alt="Credibility 3" className="credibility-icon" />
                                </div>
                                <h3>Built for AI-First, Nation-Scale Impact</h3>
                                <p> Focused on creating foundational AI products, frameworks, and large-scale deployments.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="stats-section" >
                <Container>
                    <Row>
                        <Col lg={3} md={6} className="mb-4" >
                            <div className="stat-card" >
                                <h2 className="stat-number" >12+</h2>
                                <p className="stat-label" >Published in Patents & Papers</p>
                                <small className="stat-description" >Contributing to research by supporting AI engineers</small>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4" >
                            <div className="stat-card" >
                                <h2 className="stat-number" >5</h2>
                                <p className="stat-label" >Products in Deployment</p>
                                <small className="stat-description" >Deployed with AI engineers in production</small>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4" >
                            <div className="stat-card" >
                                <h2 className="stat-number" >40+</h2>
                                <p className="stat-label" >Research & Thought Leadership</p>
                                <small className="stat-description" >Collaborative research & thought leadership</small>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="" >
                            <div className="stat-card" >
                                <h2 className="stat-number" >Open</h2>
                                <p className="stat-label" >Source Contribution</p>
                                <small className="stat-description" >Empowering developers to innovate</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="featured-reads-section" >
                <Container>
                    <div className="section-header d-flex justify-content-between align-items-center mb-5" >
                        <h2 className="section-title text-start m-0" > Featured <span className="highlight-text" >Reads</span> </h2>
                        <Button variant="outline-danger" className="view-all-btn" >View All →</Button>
                    </div>
                    <Row className="featured-row" >
                        <Col lg={4} md={6} className="mb-4 staggered-col-1" >
                            <Card className="featured-card" >
                                <Card.Img variant="top" src={imgFeatured1} alt="Data to Decisions" />
                                <Card.Body>
                                    <Card.Title>From Data to Decisions: How AI Learns What Matters</Card.Title>
                                    <div className="author-info d-flex align-items-center mb-3" >
                                        <img src={imgAvatar} alt="Author" className="author-avatar" />
                                        <div className="meta-text" >
                                            <span className="author-name" >Dr. Name last name</span>
                                            <span className="dot" >•</span>
                                            <span className="date" >June 28, 2025</span>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Modern AI doesn't just process data it prioritizes signals that drive real outcomes. Learn how
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4 staggered-col-2" >
                            <Card className="featured-card" >
                                <Card.Img variant="top" src={imgFeatured2} alt="Invisible Layer" />
                                <Card.Body>
                                    <Card.Title>The Invisible Layer of Intelligence Powering Everyday Products</Card.Title>
                                    <div className="author-info d-flex align-items-center mb-3" >
                                        <img src={imgAvatar} alt="Author" className="author-avatar" />
                                        <div className="meta-text" >
                                            <span className="author-name" >Dr. Name last name</span>
                                            <span className="dot" >•</span>
                                            <span className="date" >June 28, 2025</span>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Behind seamless digital experiences lies an orchestration of models, rules, and
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="staggered-col-3" >
                            <Card className="featured-card" >
                                <Card.Img variant="top" src={imgFeatured3} alt="Trustworthy AI" />
                                <Card.Body>
                                    <Card.Title>Designing Trustworthy AI: Beyond Accuracy Metrics</Card.Title>
                                    <div className="author-info d-flex align-items-center mb-3" >
                                        <img src={imgAvatar} alt="Author" className="author-avatar" />
                                        <div className="meta-text" >
                                            <span className="author-name" >Dr. Name last name</span>
                                            <span className="dot" >•</span>
                                            <span className="date" >June 28, 2025</span>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Accuracy alone isn't enough for real-world AI adoption. Discover how explainability
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="research-section" >
                <Container>
                    <h2 className="section-title" > Our <span className="highlight-text" >Research & Frameworks</span> </h2>
                    <Row className="pt-5" style={{ position: 'relative' }}>
                        <div className="bg-img" style={{ position: 'absolute', top: 0, left: '-112px', width: '100%' }}><img src={bgFrameworkImg} alt="bg-img" /></div>
                        <Col lg={4} md={6} className="mb-4" >
                            <Card className="research-card" >
                                <Card.Img variant="top" src={framework1} alt="Interpretive Analytics" />
                                <Card.Body>
                                    <Card.Title>Interpretive Analytics Layer</Card.Title>
                                    <Card.Text> An innovative approach platform to scalable AI from trusted sources </Card.Text>
                                    <Button variant="link" className="learn-more-btn" >Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4" >
                            <Card className="research-card" >
                                <Card.Img variant="top" src={framework2} alt="Vector Pipeline" />
                                <Card.Body>
                                    <Card.Title>Vector Pipeline Wizard</Card.Title>
                                    <Card.Text> A platform that allows native LLM operations and applications </Card.Text>
                                    <Button variant="link" className="learn-more-btn" >Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4" >
                            <Card className="research-card" >
                                <Card.Img variant="top" src={framework3} alt="Vortex Reuse" />
                                <Card.Body>
                                    <Card.Title>Vortex Reuse & Hop</Card.Title>
                                    <Card.Text> A pipeline approach for AI/LLMs to scale to product research </Card.Text>
                                    <Button variant="link" className="learn-more-btn" >Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

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
                                <p>© 2025 DMA Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;