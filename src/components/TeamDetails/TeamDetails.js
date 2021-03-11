import React from 'react';
import maleImage from '../Image/male.png'
import femaleImage from '../Image/female.png';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMars, faFutbol, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';


const TeamDetails = (props) => {

    const { strTeam, strCountry, intFormedYear, strGender, strDescriptionEN, strSport, strTeamBanner } = props.team;
    let imageUrl = "";
    if (strGender === "Male") {
        imageUrl = maleImage;
    }
    else {
        imageUrl = femaleImage;
    }

    return (
        <div className="main-container">
            <div>
                <img style={{ height: '300px' }} src={strTeamBanner} class="img-fluid" alt="Responsive image" />
            </div>
      
                <Container className="team-container">
                    <Row>
                        <Col>
                            <div className="team-info">
                                <h1><strong>{strTeam}</strong></h1>
                                <h3><FontAwesomeIcon icon={faCalendarAlt} /> Founded: {intFormedYear}</h3>
                                <h3><FontAwesomeIcon icon={faFlag} />   Country: {strCountry}</h3>
                                <h3><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h3>
                                <h3><FontAwesomeIcon icon={faMars} />   Gender: {strGender}</h3>
                            </div>
                        </Col>
                        <Col><div className="team-iconImage">
                            <img src={imageUrl} alt="" />
                        </div></Col>
                    </Row>
                </Container>
            
           
            <Container className="team-description">
                <Row>
                    <Col>
                    <div ><p>{strDescriptionEN}</p></div>
                    </Col>
                </Row>
            </Container>

            <footer className="main-footer">
                <div className="social-icon">
                    <a href="https://twitter.com/"><img src="https://i.ibb.co/Ch244kF/Twitter.png" alt="" /></a>
                    <a href="https://www.facebook.com/"><img src="https://i.ibb.co/k5016hW/Facebook.png" alt="" /></a>
                    <a href="https://www.youtube.com/"><img src="https://i.ibb.co/rQZcpQ1/YouTube.png" alt="" /></a>
                </div>
            </footer>
            
        </div>
    );
};

export default TeamDetails;