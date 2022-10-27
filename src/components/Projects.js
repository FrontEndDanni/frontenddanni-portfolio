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
                          <Nav.Link eventKey="third">About Me</Nav.Link>
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
                        <p>I have been an artist for as long as I have been around. I have also been a technology geek for equally as long. It was only a matter of time before I would realize my passion for web development.</p>
                        <p>I'm also a bit of a coffee fanatic. Before pursuing my career in web development, I was a barista for 5 years. Did my portfolio make that a little too obvious?</p> 
                        <p>Aside from art, technology, and my all-consuming thirst for coffee, I have always been completely fascinated with biology. I take advantage of my free time and use it to hike in hopes I'll spot some of my favorite wildlife.</p> 
                        <p>Some might find it surprising that I got into programming, but I don't. I fell in love with it years ago when I designed blog layouts for artists using HTML and CSS. Recently, I wanted to take it a step further by building web applications- and making them look great.</p> 
                        <p>Of course I am still learning on my long, long journey on this career path I've chosen, but that's another reason I grew so attached to it. To be able to learn something new every day and to watch my growth as a developer is one of the reasons I find it so fulfilling. I'm excited to see where my projects take me, whether they be alone or part of a collaboration with a team of developers.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }