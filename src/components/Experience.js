import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import "../styles/Experience.css";

export default function Experience() {
  return (
      <section id='experience' className='section-padding'>
          <SectionHeading number='02.' text="Where I've Worked" />
          <Container>
              <Row className='justify-content-center gy-5 mt-4'>
                  <Col lg={10}>
                      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                          <Row className='gy-4'>
                              <Col sm={3}>
                                  <Nav variant='tabs' className='flex-column'>
                                      <Nav.Item>
                                          <Nav.Link eventKey='first'>TechnoNext Ltd.</Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                          <Nav.Link eventKey='second'>SkillJobs Ltd.</Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                          <Nav.Link eventKey='third'>Decoders Squad</Nav.Link>
                                      </Nav.Item>
                                  </Nav>
                              </Col>
                              <Col sm={9}>
                                  <Tab.Content>
                                      <Tab.Pane eventKey='first'>
                                          <h5 className='lightest-slate'>
                                              Software Engineer
                                              <span className='green'> @TechnoNext</span>
                                          </h5>
                                          <p className='experience-year slate'>
                                              Jan, 2022 – Current
                                          </p>
                                          <div className='experience-details'>
                                              <ul>
                                                  <li className='slate'>
                                                      Developed MERN Stack websites such as
                                                      E-Commerce Website, Medical Website, Travel
                                                      Agency Website etc.
                                                  </li>
                                                  <li className='slate'>
                                                      Developed production ready Websites intended
                                                      for both mobile and laptop users.
                                                  </li>
                                                  <li className='slate'>
                                                      Worked with Next, React, Redux Toolkit,
                                                      JavaScript, TypeScript, NodeJs, ExpressJs,
                                                      AWS, Git, Redmine, etc.
                                                  </li>
                                              </ul>
                                          </div>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey='second'>
                                          <h5 className='lightest-slate'>
                                              Frontend Developer
                                              <span className='green'> @SkillJobs</span>
                                          </h5>
                                          <p className='experience-year slate'>
                                              Feb, 2021 – Jan, 2022
                                          </p>
                                          <div className='experience-details'>
                                              <ul>
                                                  <li className='slate'>
                                                      Developed MERN Stack websites such as
                                                      E-Commerce Website, Medical Website, Travel
                                                      Agency Website etc.
                                                  </li>
                                                  <li className='slate'>
                                                      Integrate the UI for Corporate site of
                                                      SkillJobs Ltd, Custom Video player in Next,
                                                      and many more small tasks, etc.
                                                  </li>
                                                  <li className='slate'>
                                                      Developed NEXT JS websites for better SEO
                                                      Optimization.
                                                  </li>
                                                  <li className='slate'>
                                                      Worked with Next, React, JavaScript, Boostrap,
                                                      TailwindCS
                                                  </li>
                                              </ul>
                                          </div>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey='third'>
                                          <h5 className='lightest-slate'>
                                              Web Developer Intern
                                              <span className='green'> @Decoders Squad</span>
                                          </h5>
                                          <p className='experience-year slate'>2019-2020</p>
                                          <div className='experience-details'>
                                              <ul>
                                                  <li className='slate'>
                                                      Developed Full Stack Websites such as Blog,
                                                      E-Commerce etc.
                                                  </li>
                                                  <li className='slate'>
                                                      Built static websites using HTML, CSS,
                                                      Bootstrap, Javascript, JQuery etc.
                                                  </li>
                                              </ul>
                                          </div>
                                      </Tab.Pane>
                                  </Tab.Content>
                              </Col>
                          </Row>
                      </Tab.Container>
                  </Col>
              </Row>
          </Container>
      </section>
  );
}
