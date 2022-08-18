import { Col } from 'react-bootstrap';


export const ProjectCard = ({ title, description, imgUrl, linkText, link }) => {
    return  (
        <Col size={12} sm={6} md={4}>
            <div className='proj-imgbx' onclick="navToLink()">
                <img src={imgUrl} />
                <div className='proj-txtx'>
                     <h4>{title}</h4>
                    <span>{description}</span>
                    <p><a href={link}>{linkText}</a></p>
                </div>
            </div>
        </Col>
    )
}



