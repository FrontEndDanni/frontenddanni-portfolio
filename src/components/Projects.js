import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/images/project-img1.png';
import projImg2 from '../assets/images/project-img2.png';
import projImg3 from '../assets/images/project-img3.png';
import 'animate.css';


export const Projects = () => {
    const projects = [
        {
            title: "Youtube Clone",
            description: "A fully-functional video-streaming application built using ReactJS for its frontend & NodeJS for its backend, with data fetched from RapidAPI.",
            imgUrl: projImg1,
            linkText: "Github Repo",
            link:"https://github.com/FrontEndDanni/youtube-clone",
          },
          {
            title: "'EZ Read' Library API",
            description: "This full-stack application was built using React as its frontend framework, with Node as its backend, using JavaScript to fetch book titles and info from the OpenLibrary API.",
            imgUrl: projImg3,
            linkText: "Github Repo",
            link:"https://github.com/FrontEndDanni/CapstoneProj-Library",
          },
          {
            title: "Pokemon Database App",
            description: "A Flask-built application that features a functional user sign-up and registration, complete with user information storage in SQL databases.",
            imgUrl: projImg2,
            linkText: "Github Repo",
            link:"https://github.com/FrontEndDanni/FlaskCRUDProject",
          },
    ];

  


    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                
                    <h2>Projects</h2>
                    <p>While these showcase my full-stack application capabilities, I have also programmed smaller projects that include a Return on Investment Calculator with Python, registration and log-in mockup pages with CSS/HTML/BootStrap, and Entity Relationship Diagrams for databases in SQL. Visit my Github to see more!</p>

                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">My Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">This Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">My Resume</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>This portfolio was engineered with React and Node.</p>
                          <p>The functional email component was added with EmailJS.</p>
                          <p>While the specific stylings were done by myself using CSS, I utilized React bootstrap as a boilerplate for components like the carousel, the navbar, these pill tabs, and the project thumbnails.</p>
                          <p>It is responsive with mobile and window-resizing.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <center>
                            <iframe src="https://drive.google.com/file/d/1yGYkA0xgiS6jJt830RwiRLosrkr6WipP/preview" width="65%" height="500"></iframe>
                        </center>
                          
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }