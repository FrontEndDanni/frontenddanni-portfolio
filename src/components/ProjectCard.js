import { Col } from 'react-bootstrap';

//**PUT BUTTON COMPONENT HERE IN PLACE OF THE LINK OR SO HELP ME */

export const ProjectCard = ({ title, description, imgUrl, linkText, link }) => {
    return  (
        <Col size={12} sm={6} md={4}>
            <div className='proj-imgbx' onclick="navToLink()">
                <img src={imgUrl} />
                <div className='proj-txtx'>
                     <h4>{title}</h4>
                    <span>{description}</span>
                    <p>
                        <form action={link}>
                            <button type="submit" class="btn btn-light">{linkText}</button>
                        </form>
                    </p>
                </div>
            </div>
        </Col>
    )
}



