import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, linkText, link }) => {
    const handleLinkClick = () => {
        window.location.assign(link);
    };

    return  (
        <Col size={12} sm={6} md={4}>
            <div className='proj-imgbx' onClick={handleLinkClick}>
                <img src={imgUrl} />
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div>
                        <form action={link}>
                            <button type="submit" className="btn btn-light">{linkText}</button>
                        </form>
                    </div>
                </div>
            </div>
        </Col>
    )
}


